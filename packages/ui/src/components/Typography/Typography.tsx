import type { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

namespace Typography {
    export interface Props {
        className?: string;
        children: ReactNode;
    }
}


export default function Typography({ className, children }: Typography.Props): ReactElement {
    return (
        <div className={clsx(styles.typography, className)}>{children}</div>
    );
}