import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Project from "../../models/Project"
import { Portfolio } from "../../data/PortfolioData"
import { Layout } from "../../components/Layout/Layout"
import styles from "./Project.module.css"
import BackButton from "../../components/BackButton/BackButton"
import ExternalLinkButton from "../../components/ExternalLinkButton/ExternalLinkButton"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"

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

    const { title, stack, languages, summary, lessons, previewImage, projectLink, projectPrompt, repoLink } = project;

    return (
        <Layout>
            <h2>{title}</h2>
            {previewImage && <img src={previewImage}/>}
            <div className={styles.prompts}>
                { (projectPrompt && projectLink) && <ExternalLinkButton href={projectLink} text={projectPrompt}/>}
                { (repoLink) && <ExternalLinkButton href={repoLink} text='View Repository' icon={faGithub}/>}
            </div>
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
            <hr className={styles.horizontalDivider}/>
            <BackButton to='/portfolio' text='Back to all projects'/>
        </Layout>
    )
} 