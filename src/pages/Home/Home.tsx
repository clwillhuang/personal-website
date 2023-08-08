import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
import Banner from '../../components/Banner/Banner';
import Project from '../../models/Project';
import { Portfolio } from '../../data/PortfolioData';
import Experience from '../../models/Experience';
import { Experiences } from '../../data/ExperienceData';
import BottomDivider from '../../components/BottomDivider/BottomDivider';
import { Navbar } from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

function App() {
	const navigate = useNavigate();
	const portfolio: Array<Project> = Portfolio;
	const experiences: Array<Experience> = Experiences;

	return (
		<div className={styles.homeWrapper}>
			<Navbar />
			<Banner />
			<BottomDivider fillColor='#ffffff' />
			<div className={styles.aboutContainer}>
				<div className={styles.aboutDividerTop}>
					<svg data-name="aboutDividerTop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
					</svg>
				</div>
				<div className={styles.aboutLeft}>
					<h2 className={styles.aboutTitle}>About</h2>
					<p>
						I am a developer passionate and experienced with creating great user experiences.
					</p>
				</div>
				<div className={styles.aboutDividerBottom}>
					<svg data-name="aboutDividerBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
					</svg>
				</div>
			</div>
			<div className={styles.eventContainer}>
				<h2>Portfolio</h2>
				<div className={styles.eventRight}>
					{
						Portfolio.slice(0, 2).map((project: Project, index: number) =>
							<PortfolioCard project={project} id={index} />
						)
					}
				</div>
				<Link to='/portfolio'>Browse all my projects.</Link>


				<div className={styles.eventDividerBottom}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
					</svg>
				</div>
			</div>

			<div className={styles.memberContainer}>
				<h2 className={styles.memberTitle}>Experience</h2>
				<p>Learn more about my experiences.</p>
				<button onClick={() => navigate('/experience')}>Read more</button>
				<div className={styles.memberPerks}>
					{/* Experience here */}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App