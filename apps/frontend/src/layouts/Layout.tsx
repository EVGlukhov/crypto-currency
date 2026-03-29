import type { ReactElement, ReactNode } from "react";
import styles from './styles.module.scss';
import { Navbar } from "../components/Navbar/Navbar";

interface Props {
    children: ReactNode
}


export default function     Layout({ children }: Props): ReactElement {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main>
                <Masthead />
                { children }
            </main>
        </div>
    )
}