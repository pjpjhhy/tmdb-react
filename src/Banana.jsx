import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Pagination from "react-js-pagination";
import "./Paging.css"
import CircularProgressBar from "./CircularProgressBar"
import { Link } from 'react-router-dom';

export default function Banana() {

const[lists, setLists] = useState();
const[page,setPage] = useState(1);


  useEffect(()=>{

    const url = `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${page}`;
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
      console.log(json)
      setLists(json)
    })
    .catch(err => console.error('error:' + err));
  },[page])

  const handlePageChange = (page) =>{
    setPage(page)
  }

  return (
    <Layout>
      <div className='w-full flex flex-col items-center justify-center py-16 '>
        <div className='w-[1000px] flex flex-wrap gap-4'>
          {/* item */}
          {lists?.results?.map((list)=>(
          <div key={list.id} className='w-[180px] h-[340px] bg-blue-100 overflow-hidden rounded-lg shadow-xl'>
            {/* top: image */}
            <div className='w-full h-[250px] flex justify-center items-center '>
                {list.poster_path ? (
                <Link to={`/info/${list.id}`} state={'movie'} key={list.id}>
                <img
                  className='w-full h-full object-cover'
                  src={`https://image.tmdb.org/t/p/original${list.poster_path}`}
                  alt="movie"
                />
              </Link>
                ) : (
                <p className=' font-bold'>해당 이미지가 없습니다.</p>
                )}
            </div>
            {/* bottom: info */}
            <div className='relative w-full h-[90px] text-black pt-4 px-2'>
              <h2 className='font-bold text-lg'>{list.title.substr(0,20)}</h2>
              <p className='text-sm'>{list.release_date}</p>
              {/* like  */}
              <div className='absolute -top-6 left-1'>
                <CircularProgressBar rate={Math.floor(list.vote_average*10)}/>
              </div>
            </div>
          </div>

          ))}
        </div>
        {/* pagination */}
            <div className='w-full'>
                <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={lists?.total_pages}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                />
            </div>
      </div>
    
    </Layout>
  )
}
