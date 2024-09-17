import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Banner from '../../components/Banner/Banner';
import Project from '../../models/Project';
import { Portfolio } from '../../data/PortfolioData';
import BottomDivider from '../../components/BottomDivider/BottomDivider';
import { Navbar } from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { useEffect } from 'react';

function App() {

	const onScrollIntoView = (entries: IntersectionObserverEntry[]) => {
		// again loop over all entries (element)
		entries.forEach(entry => {
			// check if the entry is intersecting at our set threshold
			if (entry.isIntersecting) {
				// set a class to toggle animation
				entry.target.classList.add(styles.animateAfterScroll);
				// if we only want to play the animation once per page, let's also add a class for that
				entry.target.classList.add('scrolled-into-view-first-time');
			} else {
				// if we've stopped intersecting, let's remove the animation
				entry.target.classList.remove('scrolled-into-view');
			}
		});
	}

	useEffect(() => {
		const elements : NodeListOf<Element> = document.querySelectorAll(`.${styles.animate}`);
		// loop over all elements and observe each of them
		elements.forEach(element => {
			observer.observe(element);
		});
	}, [])


	let observer = new IntersectionObserver(onScrollIntoView, {
		root: null,
		rootMargin: '0px',
		threshold: 0.25
	});

	return (
		<div className={styles.homeWrapper}>
			<Navbar />
			<Banner />
			<BottomDivider fillColor='#ffffff' />
			<div className={styles.aboutContainer} id='about'>
				<div className={styles.aboutDividerTop}>
					<svg data-name="aboutDividerTop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
					</svg>
				</div>
				<div className={styles.aboutLeft}>
					<h2 className={styles.aboutTitle}>A little bit about me ...</h2>
					<p>
						I was first introduced to programming through competitive programming contests, which cultivated my interest in solving analytical problems. Since then, I have found immense interest in exploring new technologies and different applications of programming in web development, game development, trading and academic research. I find software exciting because of its versatility to a variety of fields. I have developed systems and scripts to automate workflows to support biology research, helping researchers better handle and visualize large datasets. I have also cultivated by web development skills through multiple extracurriculars in school, in close collaboration with students from a wide variety of fields.
					</p>
				</div>
				<div className={styles.aboutDividerBottom}>
					<svg data-name="aboutDividerBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
					</svg>
				</div>
			</div>
			<div className={styles.eventContainer}>
				<h2>Sample Projects</h2>
				<div className={styles.eventRight + ' ' + styles.animate}>
					{
						Portfolio.slice(0, 2).map((project: Project, index: number) =>
							<PortfolioCard project={project} id={index} key={index} />
						)
					}
				</div>
				<Link to='/portfolio#' title='View my full portfolio'>
					<button role='button'>View my full portfolio</button>
				</Link>

				<div className={styles.eventDividerBottom}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
					</svg>
				</div>
			</div>

			<div className={styles.contactContainer}>
				<h2 className={styles.contactTitle}>Contact</h2>
				<p>Reach out to me!</p>
				<a href='https://www.linkedin.com/in/cheng-l-h-83037a213'>
					<svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512">
						<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
					</svg> Connect with me over LinkedIn
				</a>
				<br />
				<p className={styles.contactEmail}>
					Email me at william [dot] huang1212 [at] gmail [dot] com
				</p>
			</div>
			<Footer />
		</div>
	)
}

export default App