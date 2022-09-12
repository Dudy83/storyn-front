import React, { FC } from 'react';
import { MenuArticlesModel } from './MenuArticlesModel';
import MenuArticle from '../MenuArticle/MenuArticle';
import './MenuArticles.scss';

interface MenuArticlesProps {
  data: MenuArticlesModel
}

const MenuArticles: FC<MenuArticlesProps> = ({ data: { articles } }) => (
  <div className="MenuArticles">
    {articles && articles.map((article, i) =>
      <MenuArticle
        key={i}
        data={{
          title: article.name,
          currency: article.currency,
          description: article.description,
          price: article.price,
          story: article.story
        }}
      />)}
  </div>
);


export default MenuArticles;
