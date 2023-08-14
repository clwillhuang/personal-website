import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

interface BackButtonProps {
    to: string,
    text: string
}

export default ({to, text}: BackButtonProps) => {
    return (
        <Link to={to} style={{width: 'fit-content'}}>
            <FontAwesomeIcon icon={faChevronLeft}/> {text}
        </Link>
    )
}