import React, { FC, Fragment, useEffect, useState } from 'react';
import Accordion from '../Accordion/Accordion';
import MenuArticles from '../MenuArticles/MenuArticles';
import './CategoryAccordion.scss';
import { CategoryAccordionModel } from './CategoryAccordionModel';

interface CategoryAccordionProps {
  data: CategoryAccordionModel
}



const CategoryAccordion: FC<CategoryAccordionProps> = ({ data: { category } }) => {
  const [activeCategory, setActiveCategory] = useState<any>();
  const [breadcrumb, setBreadcrumb] = useState<any>([]);

  useEffect(() => setActiveCategory(category), []);

  const handleNext = (next: any) => {
    const level = [...breadcrumb, activeCategory];
    setBreadcrumb(level);
    setActiveCategory(next);
  }

  // call createTree only after click to prevent rendering nested list for nothing
  // Transfert click direct on accordions compoent
  const createTree = (categ: any) => categ.children.length > 0 ? (
    <>
      {categ.children.map((subcateg: any, i: number) => (
        <Accordion key={i} title={subcateg.name} onClick={() => handleNext(subcateg)}>
          {createTree(subcateg)}
        </Accordion>
      ))}
    </>
  ) : (categ.articles.length > 0 && <MenuArticles data={{ articles: categ.articles }} />);

  return (
    <>
      {activeCategory &&
        <Accordion
          title={activeCategory.name}
          breadcrumb={breadcrumb}
          backTo={setActiveCategory}
          cleanBreadcrumb={setBreadcrumb}
        >
          {createTree(activeCategory)}
        </Accordion>}
    </>
  )
};

export default CategoryAccordion;


