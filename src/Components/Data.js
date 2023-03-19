import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const Data = () => {
    let url = "https://image.tmdb.org/t/p/w500";

    let poster_image = 'https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg';
    let b_path = 'https://image.tmdb.org/t/p/w500/AqhA7GXDEaP1spOWih195YzSPem.jpg';

    const [data, setData] = useState(null);


    // i used useeffect to avoid re-rendering of the component
    useEffect(() => {
        // Fetch the data and update the state
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=true&page=3&api_key=88dca10e37b71e7211952b4e1cf14063')
            .then(response => response.json())
            .then(data => setData(data.results))
            .catch(error => console.error(error));
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }
    console.log(data);

    return (
        <>
            <div className='pl-6'>
                Contrary to popular belief,sdnfklc wko v vkq ekad vkoa vkdfa vkoq vkoqe ao vqe jo vej vj e ejoq v Lorem Ipsum is not simply random text. It has roots in a piecknsdf sj dj njodsv sjo vjod fvjod fvjodf vdnjov sdjo vsjo
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 gap-x-2 gap-y-2 z-0 '>
                {data.map((e) => {
                    //console.log("hey there");
                    //console.log(e.title);
                    return (
                        <MovieCard key={e.id} poster_path={e.poster_path} title={e.title} rel_date={e.release_date} overview={e.overview} />
                    );
                })}

            </div>
        </>
    )
}

export default Data
