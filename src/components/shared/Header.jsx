import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Home/styles/header.css';
import FilterByPrice from '../Home/FilterByPrice';
import FilterCategory from '../Home/FilterCategory';
import imgstore from "/public/quilistore.png";

const Header = ({ inputValue, onChangeInput }) => {
    const [showFilter, setShowFilter] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleClickToggleFilter = () => {
        setShowFilter(!showFilter);
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
        <header className='header__nav bg-light mb-4 bg-white'>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link to='/'>
                        <img className='logo_store' src={imgstore} alt="Store Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={showMenu} aria-label="Toggle navigation" onClick={() => setShowMenu(!showMenu)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/purchases" className="nav-link">Purchases</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">Cart</Link>
                            </li>
                            <li onClick={handleClickToggleFilter} className="nav-item nav__filter">
                                <i className='bx bx-filter-alt icon__filter'></i>
                            </li>
                        </ul>
                        {showFilter && (
                            <div className='filter__menu'>
                                <FilterCategory />
                                <FilterByPrice />
                            </div>
                        )}
                        <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); }}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={inputValue}
                                onChange={(e) => onChangeInput(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
