import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import './home.css';
import FilterByPrice from '../components/Home/FilterByPrice';
import FilterCategory from '../components/Home/FilterCategory';


const Home = () => {

  const [inputValue, setInputValue] = useState('')
  const [showFilters, setShowFilters] = useState(false);

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  })


  const { productsGlobal } = useSelector(state => state)
  const input = useRef()


  const handleChangeInput = () => {

    setInputValue(input.current.value.toLowerCase().trim())

  }

  const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    .filter(prod => {
      const from = +fromTo.from
      const to = +fromTo.to
      const price = +prod.price
      if (from && to) {
        return from <= price && price <= to
      }
      if (from && !to) {
        return from <= price
      }
      if (!from && to) {
        return price <= to
      }
      if (!from && !to) {
        return true
      }
    })

  return (
    <div className='search__product__info'>

      <div className='search__products'>
        <i className='bx bx-filter-alt' onClick={() => setShowFilters(!showFilters)}></i>
      </div>
      <div className='card__products_and_filters'>

        <div className='button__and__input'>
          <input className='input__search' ref={input} onChange={handleChangeInput} type="text" placeholder='search products' />
          <i onClick={handleChangeInput} className='bx bx-search-alt'></i>
        </div>



        <div className='card__products'>
        <div className='filters' style={{ display: showFilters ? 'block' : 'none' }}>
          <FilterCategory />
          <FilterByPrice setFromTo={setFromTo} />

        </div>
          {
            productFilter?.map(prod => (
              <div className='prod_filter'>
                <CardProduct
                key={prod.id}
                prod={prod}
              />
              </div>
              
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Home;