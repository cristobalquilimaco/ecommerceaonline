import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../components/Home/CardProduct';
import './home.css';
import FilterByPrice from '../components/Home/FilterByPrice';
import FilterCategory from '../components/Home/FilterCategory';
import Banner from '../components/banners/Banner';

const Home = ({ inputValue }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const { productsGlobal } = useSelector(state => state);

  const productFilter = productsGlobal?.filter(prod => 
    prod.title.toLowerCase().includes(inputValue)
  ).filter(prod => {
    const from = +fromTo.from;
    const to = +fromTo.to;
    const price = +prod.price;
    if (from && to) {
      return from <= price && price <= to;
    }
    if (from && !to) {
      return from <= price;
    }
    if (!from && to) {
      return price <= to;
    }
    return true;
  });

  return (
    <>
      <div className='search__product__info'>
        <Banner />
        <div className='filter__btn_home'>
            <FilterCategory />
            <FilterByPrice setFromTo={setFromTo} />
          </div>
        <div className='card__products'>
          {
            productFilter?.map(prod => (
              <div key={prod.id} className='prod_filter'>
                <CardProduct
                  key={prod.id}
                  prod={prod}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Home;
