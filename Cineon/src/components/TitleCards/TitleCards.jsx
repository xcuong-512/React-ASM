import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category, searchTerm }) => {

    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState("");
    const cardsRef = useRef();

    // ...


    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDBjNzIxOGQ2NGMzODY5N2JhMWYwMjBiYjMyYjgzYSIsIm5iZiI6MTc2MjI5MzU4My41NjksInN1YiI6IjY5MGE3NzRmMzMwODc0ZjVkZTRiY2Q2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJvku5Ai6Y_jYZvQ51fZ-BytECC-ixA3JOwKLCLyOZY'
            }
        };
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(res => {
                if (!res.ok) throw new Error("Lỗi tải dữ liệu phim");
                return res.json();
            })
            .then(res => {
                setApiData(res.results || []);
                setError("");
            })
            .catch(() => {
                setError("Không thể tải dữ liệu phim. Vui lòng thử lại sau.");
                setApiData([]);
            });
        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [category])

    // Lọc phim theo searchTerm nếu có
    const filteredData = searchTerm
        ? apiData.filter(card =>
            (card.original_title || card.name || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        )
        : apiData;

    const handleImgError = (e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/240x135?text=No+Image";
    };

    return (
        <div className='titlecards'>
            <h2>{title ? title : "Popular on Cineon"}</h2>
            {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
            <div className="card-list" ref={cardsRef}>
                {filteredData.length === 0 && !error && (
                    <div style={{ color: '#aaa', padding: '20px' }}>Không tìm thấy phim phù hợp.</div>
                )}
                {filteredData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" onError={handleImgError} />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards
