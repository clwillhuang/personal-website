import styles from './Portfolio.module.css'
import { Layout } from '../../components/Layout/Layout';
import Project from '../../models/Project';
import { Portfolio } from '../../data/PortfolioData';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

export default () => {

    const data : Array<Project> = Portfolio;

    return(
        <Layout>
            <h2 className={styles.title}>Portfolio</h2>
            <div className={styles.grid}>
                {
                    data.map((project: Project, index: number) => 
                        <PortfolioCard project={project} id={index}/>
                    )
                }
            </div>
        </Layout>
    )
}