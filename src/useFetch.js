import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    function load() {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlkYzlhMjA2MzdmZjY0YWIwOGQ3MmU4NzZkZTM4MCIsInN1YiI6IjY1NTMyMDY4NjdiNjEzNDVjY2FkZTEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6wWg8vfXcNCyX7GebqtFEAo_0iHk31Eqf5pWaT8sJ0' }
        };
        setLoading(true)
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setData(json)
                setLoading(false)
            })
            .catch(err => console.error('error:' + err));
    }

    useEffect(() => {
        load()
    }, [url])


    return { data, loading }

}