import {
  createElement,
  type Attributes,
  type CSSProperties,
  type ComponentType,
  type ComponentPropsWithRef,
  type JSX,
} from 'react'

export namespace NSBaseButton {
  export type Type =
  | keyof JSX.IntrinsicElements
  | ComponentType<any>;

  export type BaseProps<C extends Type = 'button'> = {
    component?: C
    className?: string
    style?: CSSProperties
  } & Attributes

  export type Props<C extends Type = 'button'> =
    C extends keyof JSX.IntrinsicElements
      ? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
      : C extends ComponentType<infer P>
      ? P extends ComponentPropsWithRef<any>
        ? Omit<P, keyof BaseProps<C>> & BaseProps<C>
        : never
      : never

  export function Button<C extends Type = 'button'>({
    component = 'button',
    children,
    ...props
  }: Props<C>) {
    return createElement(component, props, children)
  }
}