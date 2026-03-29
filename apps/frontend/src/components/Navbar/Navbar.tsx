import type { ReactElement } from 'react';
import useSticky from '../../hooks/useSticky';
import styles from './styles.module.scss';

interface Props {
}

export function Navbar(props: Props): ReactElement {
    const { ref, isSticky } = useSticky();
    return (
        <div ref={ref} className={styles.navbar}>

        </div>
    )
}