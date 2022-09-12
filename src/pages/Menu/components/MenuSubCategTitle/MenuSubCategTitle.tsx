import React, { FC } from 'react';
import { MenuSubCategTitleModel } from './MenuSubCategTitleModel';
import './MenuSubCategTitle.scss';

interface MenuSubCategTitleProps {
  data: MenuSubCategTitleModel
}

const MenuSubCategTitle: FC<MenuSubCategTitleProps> = ({data: {title}}) => (
  <div className="MenuSubCategTitle ">
    {title}
  </div>
);

export default MenuSubCategTitle;
