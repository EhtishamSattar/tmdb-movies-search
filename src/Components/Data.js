import React from 'react'

const Data = () => {
    let url="https://image.tmdb.org/t/p/w500";

    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=true&page=3&api_key=88dca10e37b71e7211952b4e1cf14063')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            // Do something with the data here
           
        })
        .catch(error => console.error(error));

    return (
        <>
        <img src={`${url}/22z44LPkMyf5nyyXvv8qQLsbom.jpg`} alt="Example image" width="400" height="300"></img>
        </>
    )
}

export default Data
