import styles from './Banner.module.css'
import { Link } from 'react-router-dom'

const Banner = () => {

    const title: string = "Hello there! 👋"
    const subtitle: string = "My name is William, an aspiring software developer at the University of Toronto."

    const jumpToAbout = () => {
        if (document) {
            document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className={styles.banner}>
            <div className={styles.image}>
                {/* Add an image here if needed. */}
                {/* <img src="/blue-bg.jpg"/> */}
            </div>
            <div className={styles.tint}>
                <div className={styles.content}>
                    <h1>{title} </h1>
                    <p>{subtitle}</p>
                    <div className={styles.buttons}>
                        <button role='button' title='Read more about me' onClick={() => jumpToAbout()}>About me</button>
                        <Link to='/portfolio#projects' title='View my full portfolio'>
                            <button role='button'>Portfolio</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;