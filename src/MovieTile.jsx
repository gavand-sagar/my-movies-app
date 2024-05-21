import { Skeleton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export function MovieSkeleton() {
    return <div className='movie-tile'>
        <div className='img-div'>
            <Skeleton height={'100%'} width={'200px'} />
        </div>
        <h2 className='title'><Skeleton height={'20px'} width={'100px'} /></h2>
        <div className='release-date'><Skeleton height={'20px'} width={'100px'} /></div>
    </div>
}



export default function MovieTile({ movie_name, banner, release_date, id }) {
    return (
        <Link to={'/details/' + id}>
            <div className='movie-tile'>
                <div className='img-div'>
                    <img height={'100%'} src={"https://image.tmdb.org/t/p/original" + banner} />
                </div>
                <h2 className='title'>{movie_name}</h2>
                <div className='release-date'>{release_date}</div>
            </div>
        </Link>
    )
}
