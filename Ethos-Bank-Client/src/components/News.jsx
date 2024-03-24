import React from 'react'
import { useState,useEffect } from 'react'

function News() {

  const [news, setnews] = useState({})
  const card = ()=>{
    return(
        <div className='h-full min-w-[33.333%]'>
            <div className='h-full w-[80%] mx-auto bg-blue-600 rounded-3xl'>

            </div>
        </div>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_NEWS_API);
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setnews({pages:data.totalResults})
            
          } else {
            console.error('Failed to fetch data:', response.status);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
    //   fetchData();
  }, [])
  

  const nextNews = ()=>{
    const parent = document.getElementById('cardContainer')
    parent.style.transform = `translateX(-33%)`;
  }

  const prevNews = ()=>{
    const parent = document.getElementById('cardContainer')
    parent.style.transform = `translateX(33%)`;
  }

  return (
    <div className="w-full h-[70%] bg-red-600 relative overflow-hidden">
        <div className='w-full h-full bg-transparent flex justify-between text-5xl font-light text-black absolute z-10'>
            <div className='h-full w-[2%] flex items-center justify-center'>
                <button className='hover:text-blue-600' onClick={prevNews}>&lt;</button>
            </div>
            <div className='h-full w-[2%] flex items-center justify-center'>
                <button className=' hover:text-blue-600' onClick={nextNews}>&gt;</button>
            </div>
        </div>
        <div id='cardContainer' className='w-full h-full flex items-center justify-between relative'>

        {card()}
        {card()}
        {card()}
        {card()}
        {card()}
        {card()}
        </div>
    </div>
  )
}

export default News
