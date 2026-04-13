import {
  createElement,
  type Attributes,
  type CSSProperties,
  type ComponentType,
  type ComponentPropsWithRef,
  type JSX,
} from 'react'

export namespace BaseButton {
  export type Type =
  | keyof JSX.IntrinsicElements
  | ComponentType<any>;

  type BaseProps<C extends Type = 'button'> = {
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

    export function Button<C extends BaseButton.Type = 'button'>({
      component = 'button',
      children,
      ...props
    }: BaseButton.Props<C>) {
      return createElement(component, props, children)
    }
}