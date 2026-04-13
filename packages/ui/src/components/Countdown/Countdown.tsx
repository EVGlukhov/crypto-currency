import type { ReactElement } from 'react';
import clsx from 'clsx';
import { Typography } from '@ui/components';

import styles from './styles.module.scss';

type Props = {
    timestamp: Date;
    className?: string;
}

export default function Countdown({ timestamp, className }: Props): ReactElement {
    return (
        <div className={clsx(styles.countdown, className)}>
            <Typography>{timestamp.toDateString()}</Typography>
        </div>
    )
}