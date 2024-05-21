import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from './useFetch';
import { Rating } from '@mui/material';

export default function DetailsPage() {
    const { id } = useParams();
    const { data, loading } = useFetch('https://api.themoviedb.org/3/movie/' + id)

    return (
        <div>
            {
                loading ? <h1>Loading...</h1>
                    : <div className='movie-details-container'>
                        <div>
                            <img width={'100%'} src={"https://image.tmdb.org/t/p/original/" + data?.poster_path} />
                        </div>
                        <div>
                            <h1>{data?.title}</h1>
                            <h3>{data?.genres?.map(x => x.name)?.join(', ')}</h3>
                            <h2>{getTime(data?.runtime)}</h2>
                            <h3>Avg Vote: {data?.vote_average}</h3>
                            <Rating name="read-only" max={10} value={data?.vote_average} readOnly />
                            <p>
                                ({data?.vote_count}) People Voted
                            </p>
                            <p>{data?.overview}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

function getTime(time) {
    let hours = parseInt(time / 60);
    let minutes = time % 60
    return `${hours}h ${minutes}m`;
}
