import React, { FC, useEffect, useState } from 'react';
import './Menu.scss';
import { useParams } from "react-router-dom";
import API from '../../api';
import NotFound from '../../common/NotFound/NotFound';
import MenuTitle from './components/MenuTitle/MenuTitle';
import MenuStories from './components/MenuStories/MenuStories';
import MenuCategory from './components/MenuCategory/MenuCategory';
import MenuCategoryContent from './components/MenuCategoryContent/MenuCategoryContent';
import { getUrl } from '../../utils/helpers';

interface MenuProps {
  /**
   * @param load set this true when API response ended
   * @param hasMenu check if slug exists
   * @param menuStories menu data ordered in one level of categ and articles
   * @param menuContent menu data ordered in a nested list
   * @param menuTitle menu title
   */
}

const Menu: FC<MenuProps> = () => {
  let { id } = useParams();
  const [load, setLoad] = useState(false);
  const [hasMenu, setHasMenu] = useState<boolean>(false);
  const [menuStories, setMenuStories]: Array<any> = useState();
  const [menuContent, setMenuContent]: Array<any> = useState();
  const [menuTitle, setMenuTitle] = useState<string>('');
  const [showCategories, setShowCategories] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<any>(false);
  const [menuCategory, setMenuCategory] = useState<JSX.Element>();

  /**
   * Calls API menu endpoint and set all the variables needed in the menu
   */
  const getData = async () => {
    try {
      const res = await API.Menu.findById(id);
      orderData(res.data.content);
      setMenuTitle(res.data.name);
      setMenuContent(res.data.content);
      setActiveCategory(res.data.content[0]);
      setHasMenu(true);
    } catch (err: any) { // error handled if http status != 200
      setHasMenu(false);
    }

    setLoad(true);
  };

  /**
   * Map menu data into menuStories for stories component 
   * @param data
   */
  const orderData = (data: Array<any>) => {
    const categStories = data.map((categ: any) => ({
      name: categ.name,
      stories: categ.stories.filter((article: any) => article.story && article.story.content).map((article: any) => ({
        url: getUrl(article.story.content.url),
        type: article.story.isVideo ? 'video' : false,
        breadcrumb: article.breadcrumb,
        placeholder: article.story.content.placeholder,
        name: article.name
      }))
    }));

    setMenuStories(categStories);
  }

  /**
   * clicked category, set as active to show his data
   * @param categ
   */
  const handleShowCategories = (categ: any) => (setActiveCategory(categ), setShowCategories(!showCategories))

  useEffect(() => {
    getData();
  }, []);

  /**
   * map @component MenuCategory when menuContent is filled to prevent mapping data every time the view change
   */
  useEffect(() => {
    if (menuContent) {
      const categories = menuContent.map((categ: any, i: number) =>
        <MenuCategory
          key={i}
          hide={() => handleShowCategories(categ)}
          data={{
            category: categ,
          }}
        />
      );

      setMenuCategory(categories);
    }
  }, [menuContent])


  return (
    <>
      {load === true && (hasMenu === true ?
        <div className='Menu'>
          {(menuStories && menuContent && menuCategory) &&
            <>
              <header>
                {menuTitle && <MenuTitle data={{ title: menuTitle }} />}
                <MenuStories data={{ stories: menuStories }} />
              </header>
              <div className='MenuCategories'>
                {showCategories ? <>{menuCategory}</> : <MenuCategoryContent data={{ content: activeCategory, hide: handleShowCategories }} />}
              </div>
            </>
          }
        </div> : <NotFound></NotFound>)
      }
    </>
  )

};

export default Menu;
