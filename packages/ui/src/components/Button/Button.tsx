import clsx from 'clsx';

import styles from './styles.module.scss'

import { BaseButton } from './BaseButton'

export type Props<C extends BaseButton.Type = 'button'> =
  BaseButton.Props<C> & {
    disabled?: boolean
    variant?: 'contained'
    size?: 'small' | 'medium' | 'large'
  }

export default function Button<C extends BaseButton.Type = 'button'>({
  variant = 'contained',
  size = 'small',
  disabled = false,
  ...props
}: Props<C>) {
    return (
      <BaseButton.Button<C> 
        className={clsx(styles.button, styles[variant], styles[size])} 
        {...(props as BaseButton.Props<C>)}
      />
    );
}