import clsx from 'clsx';
import { NSBaseButton } from './BaseButton'

import styles from './styles.module.scss'

export type Props<C extends NSBaseButton.Type = 'button'> =
  NSBaseButton.Props<C> & {
    disabled?: boolean
    variant?: 'contained'
    size?: 'small' | 'medium' | 'large'
  }

export default function Button<C extends NSBaseButton.Type = 'button'>({
  variant = 'contained',
  size = 'small',
  disabled = false,
  ...props
}: Props<C>) {
    return (
      <NSBaseButton.Button<C> 
        className={clsx(styles.button, styles[variant], styles[size])} 
        {...(props as NSBaseButton.Props<C>)}
      />
    );
}