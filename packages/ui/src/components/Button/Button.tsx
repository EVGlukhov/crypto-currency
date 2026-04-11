import clsx from 'clsx';

import styles from './styles.module.scss'

import BaseButton, {
    type BaseButtonProps,
    type BaseButtonComponent,
} from './BaseButton'

export type Props<C extends BaseButtonComponent = 'button'> =
  BaseButtonProps<C> & {
    disabled?: boolean
    variant?: 'contained'
    size?: 'small' | 'medium' | 'large'
  }

export default function Button<C extends BaseButtonComponent = 'button'>({
  variant = 'contained',
  size = 'small',
  ...props
}: Props<C>) {
    return <BaseButton<C> className={clsx(styles.button, styles[variant], styles[size])} {...(props as BaseButtonProps<C>)} />
}