import styles from './Experience.module.css'
import { Layout } from '../../components/Layout/Layout';
import { Experiences } from '../../data/ExperienceData';
import Experience from '../../models/Experience';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

export default () => {

    const data : Array<Experience> = Experiences;

    return(
        <Layout>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.grid}>
                {
                    data.map((experience: Experience) => 
                        <ExperienceCard experience={experience}/>
                    )
                }
            </div>
        </Layout>
    )
}