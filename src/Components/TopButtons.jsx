import React from 'react'

function TopButtons() {
    const cities=[
        {
            id:1,
        title:'Pretoria'
        },
         {id:2,
            title:'joburg'
        }, {
            id:3,
            title:'durban'
        }, 
        {
            id:4,
            title:'polokwane'
        }, 
        {
            id:5,
            title:'cape town'
        },
    ]
  return (
  <div className='flex items-center justify-around my-6'>
    {cities.map((city) =>(

        <button key={city.id} className="text-white text-lg font-medium">
            {city.title}
            </button>
    ))}
   </div>
  );
}

export default TopButtons;