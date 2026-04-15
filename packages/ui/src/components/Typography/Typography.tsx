import type { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export namespace NSTypography {
    export type Color = 
        | 'inherit'
        | 'white'
        | 'black'
        | 'snow'
        | 'cinder'
        | 'grey'
        | 'ash'
        | 'seashell'
        | 'milk'
        | 'platinum'
        | 'dark'
        | 'smoke'
        | 'desert'
        | 'oil'
        | 'cloud'
        | 'carbon';

    export type Variant =
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "lead"
        | "paragraph"
        | "small";

    export interface Props {
        className?: string;
        color?: Color;
        variant?: Variant;
        children: ReactNode;
        as?: string;
    }
}

export default function Typography({ className, children }: NSTypography.Props): ReactElement {
    return (
        <div className={clsx(styles.typography, className)}>{children}</div>
    );
}