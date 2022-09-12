import React, { FC } from 'react';
import MenuMainCategTitle from '../MenuMainCategTitle/MenuMainCategTitle';
import './CategoryContentHeader.scss';
import { CategoryContentHeaderModel } from './CategoryContentHeaderModel';

interface CategoryContentHeaderProps {
  data: CategoryContentHeaderModel
}

const CategoryContentHeader: FC<CategoryContentHeaderProps> = ({ data: { title, hide } }) => (
  <div className="CategoryContentHeader">
    <button onClick={() => hide(false)}>
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <MenuMainCategTitle data={{ title: title }} />
  </div>
);

export default CategoryContentHeader;
