import styles from './styles.module.scss'

interface Props {
    bid: number;
    name: string;
    timestamp: Date;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Card({ name }: Props) {
    return (
        <div className={styles.card}>
            <h6>{name}</h6>
        </div>
    )
}