import { useMemo } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Project from "../../models/Project"
import { Portfolio } from "../../data/PortfolioData"
import { Layout } from "../../components/Layout/Layout"
import styles from "./Project.module.css"
import BackButton from "../../components/BackButton/BackButton"

export default () => {

    const { id } = useParams();
    let navigate = useNavigate();

    const project: Project | undefined = useMemo<Project | undefined>(() => {
        if (!id) return undefined;
        let ind: number = parseInt(id)
        if (ind < 0 || Portfolio.length <= ind) {
            return undefined;
        }
        return Portfolio[ind]
    }, [id])

    if (!project) {
        navigate('/404');
        return(<div></div>);
    }

    const { title, stack, languages, summary, lessons, previewImage, projectLink, projectPrompt } = project;

    return (
        <Layout>
            <h2>{title}</h2>
            {previewImage && <img src={previewImage}/>}
            <h3>Technologies, Tools, Packages</h3>
            <div className={styles.stack}>
                    {stack.map(stackItem => <span key={stackItem}>{stackItem}</span>)}
                </div>
            <h3>Languages</h3>
                <div className={styles.language}>
                    {languages.map(language => <span key={language}>{language}</span>)}
                </div>
            <h3>What is this?</h3>
            <div>{summary}</div>
            <h3>What did I learn?</h3>
            <div>{lessons}</div>
            {(projectLink && projectPrompt) && <Link to={projectLink}><button>{projectPrompt}</button></Link>}
            <hr className={styles.horizontalDivider}/>
            <BackButton to='/portfolio' text='Back to all projects'/>
        </Layout>
    )
} 