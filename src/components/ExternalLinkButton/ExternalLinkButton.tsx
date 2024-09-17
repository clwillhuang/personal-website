import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ExternalLinkButton.module.css'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface ExternalLinkProps {
    href: string,
    text: string,
    icon?: IconProp
}

export default ({href, text, icon } : ExternalLinkProps) => {

    const iconUsed = (icon ?? faExternalLink) as IconProp;

    return(
        <div className={styles.box}>
            <a target='_blank' referrerPolicy='no-referrer' className={styles.link} href={href}>
                <FontAwesomeIcon icon={iconUsed} size='lg'/>
                {text}
            </a>
        </div>
    )
}