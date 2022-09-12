import React, { FC } from 'react';
import { MenuCategoryModel } from './MenuCategoryModel';
import './MenuCategory.scss';
import ProgressiveImage from '../../../../common/ProgressiveImage/ProgressiveImage';
import { getUrl } from '../../../../utils/helpers';

interface MenuCategoryProps {
  data: MenuCategoryModel,
  hide: () => void
}

const MenuCategory: FC<MenuCategoryProps> = ({ data: { category }, hide }) => (
  <>
    {category &&
      <a
        onClick={hide}
        className='MenuCategory'
      >
        {/* <img src={category.cover.placeholder} alt={category.cover.id} /> */}
        {category.cover && <ProgressiveImage src={getUrl(category.cover.url)} placeholderSrc={category.cover.placeholder} />}
        {category.name && <h3>{category.name}</h3>}
        <span>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    }
  </>);

export default MenuCategory;
