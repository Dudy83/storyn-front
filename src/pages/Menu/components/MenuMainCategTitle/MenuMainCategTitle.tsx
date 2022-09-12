import React, { FC } from 'react';
import { MenuMainCategTitleModel } from './MenuMainCategTitleModel';
import './MenuMainCategTitle.scss';

interface MenuMainCategTitleProps {
  data: MenuMainCategTitleModel
}

const MenuMainCategTitle: FC<MenuMainCategTitleProps> = ({ data: { title } }) => (
  <>
    {title && <h2 className="MenuMainCategTitle">
      {title}
    </h2>}
  </>
);

export default MenuMainCategTitle;
