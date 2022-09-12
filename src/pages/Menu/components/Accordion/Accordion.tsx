import React, { FC, useEffect, useState } from 'react';
import './Accordion.scss';
import { AccordionModel } from './AccordionModel';

interface AccordionProps {
  title: string,
  children?: React.ReactNode,
  breadcrumb?: any,
  onClick?: () => void,
  backTo?: any,
  cleanBreadcrumb?: any
}

const Accordion: FC<AccordionProps> = ({ title, children, breadcrumb, onClick, backTo, cleanBreadcrumb }) => {
  const [isOpen, setOpen] = useState(false);

  const navBack = (categ: any) => {
    const cleanCateg = breadcrumb.findIndex((clicked: any) => clicked.id == categ.id);
    cleanBreadcrumb(breadcrumb.splice(0, cleanCateg));
    backTo(categ);
  }

  useEffect(() => {
    if (!breadcrumb) setOpen(false);
  }, [title])

  return (
    <div className="accordion-wrapper">

      <div className='AccordionHeader'>
        {(breadcrumb && breadcrumb.length > 0) && <div className='Breadcrumb'>
          {breadcrumb.map((categ: any) => <p onClick={() => navBack(categ)}>{categ.name}</p>)}
        </div>}

        <div
          className={`w-full accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => (onClick && onClick(), setOpen(!isOpen))}
        >
          <p>{title}</p>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>

    </div>
  );
};

export default Accordion;
