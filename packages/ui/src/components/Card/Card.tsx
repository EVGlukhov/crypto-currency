import Button from '../Button/Button';
import styles from './styles.module.scss'

interface Props {
    bid: number;
    name: string;
    timestamp: Date;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    size: 'small' | 'medium' | 'large';
}

export default function Card({ name, bid, timestamp, onClick, size }: Props) {
    return (
        <div className={styles.card}>
            <h6>{name}</h6>
            <p>{bid}</p>
            <p>{timestamp.toLocaleString()}</p>
            <Button variant="contained" size={size} onClick={onClick}>Place bid</Button>
        </div>
    )
}