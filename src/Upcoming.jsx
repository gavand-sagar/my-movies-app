import React, { useState } from 'react'
import MovieTile, { MovieSkeleton } from './MovieTile';
import { useFetch } from './useFetch';


export default function Upcoming() {

    let [page, setPage] = useState(1)
    let { data, loading } = useFetch('https://api.themoviedb.org/3/movie/upcoming?page=' + page)

    return (
        <div className="App">
            <h1 className='section-heading'>Upcoming  Page : {page}</h1>
            <button onClick={() => setPage(page + 1)}>Next page</button>
            {
                loading ?
                    [1, 2, 3, 4, 4, 5, 6, 7, 8, 1, 2, 3, 4, 4, 5, 6, 7, 8,].map(x => <MovieSkeleton />)
                    : data?.results.map(x => <MovieTile key={x.id} id={x.id} movie_name={x.title} release_date={x.release_date} banner={x.poster_path} />)
            }
        </div>
    );
}
