import Project from '../../models/Project';
import { Layout } from '../../components/Layout/Layout';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { Portfolio } from '../../data/PortfolioData';
import { MultiValue } from 'react-select'
import styles from './Portfolio.module.css'
import { useMemo, useState } from 'react';
import PortfolioFilter from '../../components/PortfolioFilter/PortfolioFilter';

type ProjectEntry = Project & { id: number }

export default () => {

    const data : Array<ProjectEntry> = Portfolio.map((entry, i) => ({ ...entry, id: i}));

    const stackOptions = useMemo(() => {
        const stacks = data.map(project => project.stack).flat(1);
        const stackSet = new Set(stacks); 
        return Array.from(stackSet).map(item => ({ value: item.toLowerCase(), label: item })).sort((a, b) => a.label.localeCompare(b.label))
    }, []) 

    const languageOptions = useMemo(() => {
        const languages = data.map(project => project.languages).flat(1);
        const languageSet = new Set(languages);
        return Array.from(languageSet).map(item => ({ value: item.toLowerCase(), label: item })).sort((a, b) => a.label.localeCompare(b.label))
    }, [])

    const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
    const [selectedLangs, setSelectedLangs] = useState<string[]>([]);

    const createHandler = (dispatch: React.Dispatch<React.SetStateAction<string[]>>) => {
        const selectNew = (newValue: MultiValue<{ value: string, label: string }>) => {
            dispatch(newValue.map(item => item.value))
        }
        return selectNew;
    }

    const visible: Array<ProjectEntry> = data.filter((value: Project) => {
        return (selectedStacks.length === 0 || selectedStacks.every(term => value.stack.map(s => s.toLowerCase()).includes(term))) &&
        (selectedLangs.length === 0 || selectedLangs.every(term => value.languages.map(s => s.toLowerCase()).includes(term)))
    })

    return(
        <Layout>
            <h2 className={styles.title} id='projects'>Portfolio</h2>
            <span className={styles.selectContainer}>
                <div className={styles.selectComponent}>
                    <span>Technology</span>
                    <PortfolioFilter
                        options={stackOptions}
                        onChange={createHandler(setSelectedStacks)}
                        placeholder='Node.js, AWS, Docker...'
                    />
                </div>
                <div className={styles.selectComponent}>
                    <span>Language</span>
                    <PortfolioFilter
                        options={languageOptions}
                        onChange={createHandler(setSelectedLangs)}
                        placeholder='JS, Python, Java...'
                    />
                </div>
            </span>
            <div className={styles.grid}>
                {
                    visible.map((project: ProjectEntry) => 
                        <PortfolioCard project={project} id={project.id} key={project.id}/>
                    )
                }
            </div>
        </Layout>
    )
}