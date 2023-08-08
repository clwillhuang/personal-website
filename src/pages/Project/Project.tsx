import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Project from "../../models/Project"
import { Portfolio } from "../../data/PortfolioData"
import ExternalLinkButton from "../../components/ExternalLinkButton/ExternalLinkButton"
import { Layout } from "../../components/Layout/Layout"
import styles from "./Project.module.css"

export default () => {

    const { id } = useParams();
    const project: Project | undefined = useMemo<Project | undefined>(() => {
        if (!id) return undefined;
        return Portfolio[parseInt(id)]
    }, [id])

    if (!project) {
        let navigate = useNavigate();
        navigate('/404');
        return(<div></div>);
    }

    const { title, stack, languages, description, previewImage, tags, projectLink, projectPrompt } = project;

    return (
        <Layout>
            <h1>{title}</h1>
            <h3>Technologies, Tools, Packages</h3>
            <div className={styles.stack}>
                    {stack.map(stackItem => <span>{stackItem}</span>)}
                </div>
            <h3>Languages</h3>
                <div className={styles.language}>
                    {languages.map(language => <span>{language}</span>)}
                </div>
            <p>{description}</p>
            {(projectLink && projectPrompt) && <ExternalLinkButton text={projectPrompt} href={projectLink}/>}
        </Layout>
    )
} 