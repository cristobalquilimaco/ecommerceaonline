
import { Link } from 'react-router-dom';
import '../Home/styles/header.css';
import imgstore from "/public/quilistore.png";

const Header = ({ inputValue, onChangeInput }) => {

    return (
        <header className='header__nav bg-light mb-4 bg-white'>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link to='/'>
                        <img className='logo_store' src={imgstore} alt="Store Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
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
                        </ul>
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
