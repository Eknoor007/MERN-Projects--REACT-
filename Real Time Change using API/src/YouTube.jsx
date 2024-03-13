import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function YouTube() {
    const [videos, setvideo] = useState([]);

    //Using useEffect to call API
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAl9nA5SEBQGuNm8qSKTab-7ttBra0dE2g&part=snippet&type=video&q=GodOfWarRagnarok'
                )
                setvideo(response.data.items)
            }
            catch (error) {
                console.error("Error Error Error", error)
            }
        }
        fetchdata()
    }, [])
    return (
        <>
            <ul>
                {
                    videos.map(value => {
                        return <li>{value.snippet.title}
                            <img
                                src={value.snippet.thumbnails.default.url}
                                alt={value.snippet.title} />
                        </li>
                    })
                }
            </ul>
        </>
    )
}
