import styles from './Experience.module.css'
import { Layout } from '../../components/Layout/Layout';
import { Experiences, Extracurriculars } from '../../data/ExperienceData';
import Experience from '../../models/Experience';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

export default () => {

    const data: Array<Experience> = Experiences;
    const extData: Array<Experience> = Extracurriculars;

    return (
        <Layout>
            <h2 className={styles.title} id='work'>Experience</h2>
            <div className={styles.grid}>
                {
                    data.map((experience: Experience) =>
                        <ExperienceCard experience={experience} key={experience.dates} />
                    )
                }
            </div>
            <h2 className={styles.title} id='groups'>Extracurricular Experience</h2>
            <div className={styles.grid}>
                {
                    extData.map((experience: Experience) =>
                        <ExperienceCard experience={experience} key={experience.dates} />
                    )
                }
            </div>
        </Layout>
    )
}