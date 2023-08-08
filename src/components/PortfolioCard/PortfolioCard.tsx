import { Link } from "react-router-dom"
import Project from "../../models/Project"
import styles from './PortfolioCard.module.css'

interface PortfolioCardProps {
    project: Project,
    id: number,
}

export default (props: PortfolioCardProps) => {

    const { id } = props;
    const { title, stack, languages, shortDescription, tags} = props.project

    return (
        <div className={styles.card}>
            <a className={styles.cardActionArea} href={`/project/${id}`}/>
            <img src='/image.jpg'/>
            {/* {previewImage && <img src={previewImage}/> } */}
            <div className={styles.content}>
                <h3>{title}</h3>
                <div className={styles.stack}>
                    {stack.map(stackItem => <span>{stackItem}</span>)}
                </div>
                <div className={styles.language}>
                    {languages.map(language => <span>{language}</span>)}
                </div>
                <span>{tags.join(" ,")}</span>
                <p>
                    {shortDescription}
                </p>
                <div className={styles.buttons}>
                    <div>
                        <Link to={`/project/${id}`}>Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}