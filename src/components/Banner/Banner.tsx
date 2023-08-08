import styles from './Banner.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Banner = () => {

    const title : string = "Title Here"
    const subtitle : string = "Subtitle Here"
    const navigate = useNavigate();

    return (
        <div className={styles.banner}>
            <div className={styles.image}>
                <img src="/blue-bg.jpg">
                </img>
            </div>
            <div className={styles.tint}>
                <div className={styles.content}>
                    <h1>{title} </h1>
                    <p>{subtitle}</p>
                    <div className={styles.buttons}>
                        <button onClick={() => navigate('/#about')}>About</button>
                        <button onClick={() => navigate('/portfolio')}>Portfolio</button>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Banner;