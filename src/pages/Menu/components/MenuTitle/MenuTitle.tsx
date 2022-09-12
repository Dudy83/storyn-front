import React, { FC } from 'react';
import { MenuTitleModel } from './MenuTitleModel';
import './MenuTitle.scss';

interface MenuTitleProps {
  data: MenuTitleModel
}

const MenuTitle: FC<MenuTitleProps> = ({ data: { title } }) => (
  <>
    {title && <div className="MenuTitle">
      <h1>{title}</h1>
    </div>}
  </>
);

export default MenuTitle;
