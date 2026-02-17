import type React from 'react';

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface ElementClass extends React.Component<any> {
      render: () => React.ReactNode;
    }
    interface ElementAttributesProperty {
      props: Record<string, unknown>;
    }
    interface ElementChildrenAttribute {
      children: Record<string, unknown>;
    }
    interface IntrinsicAttributes extends React.Attributes {}
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}

export {};
