import React from 'react'
const Card = ({data}) => {
  return (
    <div className='flex max-w-[350px] flex-1 flex-col shadow-md gap-8 p-4 rounded-lg border border-gray-200 bg-white'>
      <h2 className='text-2xl md:text-4xl font-semibold text-[#108e88]'>{data.title}</h2>
      <div className='flex flex-row items-center justify-between '>
        <span className='text-2xl md:text-4xl text-[#108e88] font-bold'>{data.count}</span>
        <span>
            <img src={data.cardImage} alt="card-image" />
        </span>
      </div>
    </div>
  )
}

export default Card
