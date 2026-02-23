declare module 'kpmp-common-components' {
  import { ReactNode, FC } from 'react';

  export interface NavBarProps {
    app?: string;
    comparatorOn?: string;
  }

  export interface NavFooterProps {
    app?: string;
  }

  export const NavBar: FC<NavBarProps>;
  export const NavFooter: FC<NavFooterProps>;
}