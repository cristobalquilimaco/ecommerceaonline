import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/styles/header.css';
import FilterByPrice from '../Home/FilterByPrice';
import FilterCategory from '../Home/FilterCategory';

const Header = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleClickToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleClickToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='header__nav'>
      <h1>
        <Link to='/'>E-commerce</Link>
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