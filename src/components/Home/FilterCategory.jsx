import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProductsThunk } from '../../store/slices/products.slices';
import useFetch from '../../hooks/useFetch';
import '../Home/styles/filterCategory.css'

const FilterCategory = () => {
  const dispatch = useDispatch();

  const [showFilter, setShowFilter] = useState(false);

  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/categories`;
  const [categories, getAllCategories] = useFetch(url);

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleClickCategories = (id) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
    dispatch(getAllProductsThunk(url));
  };

  const handleClickToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk());
  };

  return (
    <div className='filter__category'>
      <button className='button__filter' onClick={handleClickToggleFilter}>
        {showFilter ? 'Hide categories' : 'Filter Categories'}
      </button>
      {showFilter && (
        <div className='filter__prod'>
          <ul className='filter__of__category'>
            <li className='categories__filter' onClick={handleClickAllProducts}>All Products</li>
            {categories?.map((category) => (
              <li className='categories__filter' onClick={() => handleClickCategories(category.id)} key={category.id}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterCategory;