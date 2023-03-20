import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const Data = () => {
    //let url = "https://image.tmdb.org/t/p/w500";

    // let poster_image = 'https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg';
    // let b_path = 'https://image.tmdb.org/t/p/w500/AqhA7GXDEaP1spOWih195YzSPem.jpg';

    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);

    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&api_key=88dca10e37b71e7211952b4e1cf14063`)
            .then(response => response.json())
            .then(data => {//console.log(data)
             setData(data.results)})
            .catch(error => console.error(error));
    
    if (!data) {
        return <p className='text-center'>Loading...</p>;
    }

    const pageDec=()=>{
        console.log('back clicked');
        let count=page;
        if(count>1)
        {
            count=count-1;

        }
        console.log(count);
        setPage(count);
    }
    const pageInc=()=>{
        console.log('next clicked');
        let count=page;
        count=count+1;
        console.log(count);
        setPage(count);
    }
    //console.log(data);

    return (
        <>
            <div className='pl-4 text-white relative text-3xl -top-14 font-normal'>
                <h1>Trending </h1>
            </div>
            <div className='movie-cards grid grid-cols-2 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 gap-x-2 gap-y-2 z-0 px-4'>
                {data.map((e) => {
                    return (
                        <MovieCard key={e.id} poster_path={e.poster_path} title={e.title} rel_date={e.release_date} overview={e.overview} />
                    );
                })}

            </div>
            <div className='flex justify-between mt-10 '>
                <Button  variant="contained" onClick={pageDec}>Back</Button>
                <Button className='' variant="contained" onClick={pageInc}>Next</Button>

            </div>
        </>
    )
}

export default Data
