import Experience from "../../models/Experience"
import styles from './ExperienceCard.module.css'

interface ExperienceCardProps {
    experience: Experience
}

export default (props: ExperienceCardProps) => {

    const { role, company, dates, description } = props.experience

    return (
        <div>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.company}>{company}</p>
            <span className={styles.dates}>{dates}</span>
            <ul>
                {description.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}