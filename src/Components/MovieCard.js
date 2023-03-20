import React from 'react'

const MovieCard = (props) => {
    let url = "https://image.tmdb.org/t/p/w500";
    let {key,poster_path,title,rel_date,overview}=props;

    return (
        <>
            <div className="xl:w-52 lg:w-48 rounded overflow-hidden shadow-lg border-gray-200 text-white bg-black ">
                <img className="xl:w-52 xl:h-72 lg:w-52 sm:h-58" src={`${url}${poster_path}`} alt="movie poster image" />
                <div className="p-2">
                    <div className="font-bold text-md mb-4">{title}</div>
                <div className="text-sm mb-2 relative bottom-1 text-slate-400">Released Date : {rel_date}</div>
                </div>
            </div>
        </>
    )
}

export default MovieCard
