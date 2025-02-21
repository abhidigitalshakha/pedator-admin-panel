import React from 'react'
import searchlogo from "../assets/images/search.png"

const SearchBar = () => {
  return (
    <div className='border px-4 py-1 rounded-full border-[#377873] flex items-center'>
      <input type="text" placeholder='Search......' className='outline-0 pr-2' />
      <span>
        <img src={searchlogo} alt="search-logo" className='w-6' />
      </span>
    </div>
  )
}

export default SearchBar
