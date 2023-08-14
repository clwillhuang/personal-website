// import { Link } from "react-router-dom"
import { Link } from "react-router-dom";
import Project from "../../models/Project"
import styles from './PortfolioCard.module.css'

interface PortfolioCardProps {
    project: Project,
    id: number,
}

export default (props: PortfolioCardProps) => {

    const { id } = props;
    const { title, stack, languages, shortDescription, tags, previewImage} = props.project

    return (
        <div className={styles.card}>
            <div className={styles.imageFrame}>
                <img src={previewImage ?? '/personal-website/image.jpg'}/>
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <div className={styles.stack}>
                    {stack.map(stackItem => <span key={stackItem}>{stackItem}</span>)}
                </div>
                <div className={styles.language}>
                    {languages.map(language => <span key={language}>{language}</span>)}
                </div>
                <span>{tags.join(" ,")}</span>
                <p>
                    {shortDescription}
                </p>
                {/* <div className={styles.buttons}>
                    <div>
                        <Link to={`/project/${id}`}>Read more</Link>
                    </div>
                </div> */}
            </div>
            <Link className={styles.cardActionArea} to={`/project/${id}`}/>
        </div>
    )
}