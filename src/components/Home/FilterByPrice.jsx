import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../Home/styles/filterByPrices.css'

const FilterByPrice = ({ setFromTo }) => {

  const {reset, register, handleSubmit} = useForm()
  const [showFilter, setShowFilter] = useState(true);

  const submit = data => {
    setFromTo(data)
    reset({
      from: '',
      to: ''
    })
  }

  return (
    <div className='filter__prices'>
      <button className='btn__filter__price' onClick={() => setShowFilter(!showFilter)}>
        {showFilter ? 'Hide Price' : 'Filter Price '}
      </button>
      {showFilter && (
        <form className='search__by__price' onSubmit={handleSubmit(submit)}>
          <div className='label__price'>
            <label htmlFor="from">From</label>
            <input {...register('from')} type="number" id='from' />
          </div>
          <div className='label__to'>
            <label className='label__of_to' htmlFor="to">To</label>
            <input {...register('to')} type="number" id='to' />
          </div>
          <button className='filter__price'>Filter Price</button>
        </form>
      )}
    </div>
  )
}

export default FilterByPrice