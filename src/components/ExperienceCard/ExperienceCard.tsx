import Experience from "../../models/Experience"

interface ExperienceCardProps {
    experience: Experience
}

export default (props: ExperienceCardProps) => {

    const { role, company, dates, description } = props.experience

    return (
        <div>
            <h3>{role}</h3>
            <span>{dates}</span>
            <p>{company}</p>
            <p>{description}</p>
        </div>
    )
}