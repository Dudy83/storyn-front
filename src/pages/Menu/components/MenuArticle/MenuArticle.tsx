import React, { FC } from 'react';
import { MenuArticleModel } from './MenuArticleModel';
import './MenuArticle.scss';

interface MenuArticleProps {
  data: MenuArticleModel
}

const MenuArticle: FC<MenuArticleProps> = ({ data: { title, currency, description, price, story } }) => (
  <div className="MenuArticle">
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
    <p className="ArticlePrice">
      {price} <span>{currency}</span>
    </p>
  </div>
);

export default MenuArticle;
