import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Home/styles/header.css';
import FilterByPrice from '../Home/FilterByPrice';
import FilterCategory from '../Home/FilterCategory';
import imgstore from "/public/quilistore.png"

const Header = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClickToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleClickToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        (showMenu && !event.target.classList.contains('list__icon__menu') && !event.target.classList.contains('bx-menu')) ||
        (showFilter && !event.target.classList.contains('icon__filter') && !event.target.classList.contains('filter__menu'))
      ) {
        setShowMenu(false);
        setShowFilter(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };


  }, [showMenu, showFilter]);

  
  return (
    <header className='header__nav'>
      <h1>
        <Link to='/'><img className='logo_store' src={imgstore} alt="" /></Link>
      </h1>
      <nav className='nav__menu'>
      <i className='bx bx-filter-alt icon__filter' onClick={handleClickToggleFilter}></i>

{showFilter && (
  <div className='filter__menu'>
    <FilterCategory />
    <FilterByPrice />
  </div>
)}
        <i className='bx bx-menu' onClick={handleClickToggleMenu}></i>
        {showMenu && (
          <ul className='list__icon__menu'>
                        <li>
              <Link to='/'>
              <i class='bx bx-home-smile' ></i>
              </Link>
            </li>
            <li>
              <Link to='/login'>
                <i className='bx bxs-user-circle'></i>
              </Link>
            </li>
            <li>
              <Link to='/Register'><i className='bx bx-edit'></i></Link>
            </li>
            <li>
              <Link to='/purchases'><i className='bx bx-shopping-bag'></i></Link>
            </li>
            <li>
              <Link to='/cart'><i className='bx bx-cart'></i></Link>
            </li>

          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;