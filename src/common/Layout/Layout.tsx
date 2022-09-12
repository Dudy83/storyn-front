import React, { FC, Fragment } from 'react';
import './Layout.scss';

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => (
  <div className="Layout">
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  </div>
);

export default Layout;
