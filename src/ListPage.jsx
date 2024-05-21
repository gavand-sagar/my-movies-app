import React from 'react'
import MovieTile from './MovieTile';
import { useFetch } from './useFetch';
import Trending from './Trending';
import Upcoming from './Upcoming';
import TopRated from './TopRated';

export default function ListPage() {

    return (
        <div className="App">
            <Trending />
            <Upcoming/>
            <TopRated/>
        </div>
    );
}
