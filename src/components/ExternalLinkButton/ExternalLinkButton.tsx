import styles from './ExternalLinkButton.module.css'

interface ExternalLinkProps {
    href: string,
    text: string
}

export default ({href, text} : ExternalLinkProps) => {
    return(
        <div className={styles.box}>
            <a target='_blank' referrerPolicy='no-referrer' className={styles.link} href={href}>{text}</a>
        </div>
    )
}