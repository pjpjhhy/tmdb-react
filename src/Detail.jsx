import React, { useEffect, useState } from 'react'
import Layout from './Layout'



export default function Detail() {
    
    const[lists, setLists] = useState([]);
    const[page,setPage] = useState(1);

    const handleLoadMore = () => {
        const nextPage = page +1;
        setPage(nextPage)
        fetchData(nextPage)
    }
    
    useEffect(()=>{
        fetchData()
    },[])

const fetchData = (pageNumber = 1) => {
    const url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageNumber}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGVhN2YwZmQwZTBhMTZlNTUzYzQ3NTUwZDI5MzhlZSIsInN1YiI6IjY1OTc2NTZkODY5ZTc1NmUzYTA3MGZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0A0DXU6o1sit_bwx7Mc27sfDCmZelg-vr-komSAdnuI'
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => {
        setLists(prev => [...prev, ...json.results]);
        console.log(json)
    })
    .catch(err => console.error('error:' + err));
}

  return (
    <Layout>
    <div className='w-full flex flex-col items-center justify-center py-16 '>
        <div className='w-[1000px] flex flex-wrap text-black gap-4'>
          {/* item */}
          {lists?.map((list)=>(
          <div key={list.id} className='w-[180px] h-[345px] bg-blue-100 overflow-hidden rounded-lg shadow-xl'>
            {/* top: image */}
            <div className='w-full h-[250px] flex justify-center items-center '>
                {list.profile_path ? (
                <img
                  className='w-full h-full object-cover'
                  src={`https://image.tmdb.org/t/p/original${list.profile_path}`}
                  alt="movie"
                />
                ) : (
                <p className=' font-bold'>해당 이미지가 없습니다.</p>
                )}
            </div>
            {/* bottom: info */}
            <div className='relative w-full px-2'>
              <h2 className='font-bold w-[185px] h-[25px] pt-1'>{list.name.substr(0,20)}</h2>
              <p className='text-sm pt-2'>
                {list.known_for.slice(0, 3).map((item, index, array) => (
                <span key={index}>
                {item.original_title || item.name}
                {index < 2 && ', '}
                </span>
                ))}
                {list.known_for.length > 2 && '...'}
              </p>
              
            </div>
          </div>

          ))}
                {/* Load more */}
                <div 
                onClick={handleLoadMore}
                className='w-[97%] py-2 bg-[#01b4e4] text-white font-semibold hover:text-black text-center cursor-pointer'>
                    Load More
                </div>
            </div>
    </div>
  </Layout>
  )
}
