import type { FunctionComponent, ReactNode } from 'react'
import styles from './Layout.module.css'
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

type LayoutWithProps = {
    children: ReactNode
}

export const Layout: FunctionComponent<LayoutWithProps> = (props) => {
    return(
        <>
            <Navbar/>
            <div className={styles.wrapper}>
                {props.children}
            </div>
            <Footer/>
        </>
    )
}