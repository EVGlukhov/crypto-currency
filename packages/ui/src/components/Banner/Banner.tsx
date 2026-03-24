import type { ReactElement } from 'react';
import styles from './styles.module.scss';

interface Props {
    instanceName: string;
}
export default function Banner({ instanceName }: Props): ReactElement {
    return <h1 className={styles.button}>Welcome to the {instanceName} portal</h1>;
}