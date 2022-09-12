import React, { FC, Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Accordion from '../Accordion/Accordion';
import CategoryAccordion from '../CategoryAccordion/CategoryAccordion';
import CategoryContentHeader from '../CategoryContentHeader/CategoryContentHeader';
import MenuArticles from '../MenuArticles/MenuArticles';
import MenuMainCategTitle from '../MenuMainCategTitle/MenuMainCategTitle';
import './MenuCategoryContent.scss';
import { MenuCategoryContentModel } from './MenuCategoryContentModel';
// import Accordion from '../Accordion'

interface MenuCategoryContentProps {
  data: MenuCategoryContentModel
}

const MenuCategoryContent: FC<MenuCategoryContentProps> = ({ data: { content, hide } }) => (
  <div className="MenuCategoryContent">
    {content && <>
      <CategoryContentHeader data={{ title: content.name, hide: hide }} />
      {content.children.length > 0 ?
        content.children.map((subcateg: any, i: number) => <CategoryAccordion key={i} data={{ category: subcateg }} />) :
        (content.articles.length > 0 && <MenuArticles data={{ articles: content.articles }} />)}

    </>}
  </div>
);

export default MenuCategoryContent;
