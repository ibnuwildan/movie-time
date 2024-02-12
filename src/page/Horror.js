import React,{ useState, useEffect }from "react";
import axios from 'axios';
import NavbarComponent from "../component/Navbar";
import { Card, CardText } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";

const HorrorPage = () => {
    const [dramaMovies, setDramaMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
      fetchDramaMovies();
    }, []);

    const fetchDramaMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '43c54ebefa7865f82c66a2a5f2685426',
              with_genres: 27, 
            },
          }
        );
        setDramaMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching drama movies:', error);
      }
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(!searchQuery) {
        fetchDramaMovies();
        return;
      }
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '43c54ebefa7865f82c66a2a5f2685426',
            query: searchQuery,
          },
        });
        setDramaMovies(response.data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
     };

      // Fungsi untuk mengubah format tanggal
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };

    return(
        <div>
            <NavbarComponent
            handleSubmit = {handleSubmit}
            handleSearchChange= {handleSearchChange}
            searchQuery= {searchQuery} 
            />
        {/* <h2 className="text-center">Horror Movies</h2> */}
        <div className="justify-content-center d-flex flex-wrap py-5">
          {dramaMovies.map((movie) => (
            <Card className='card-movie m-3 bg-light' style={{ width: '24rem', borderColor: "transparent" }} key={movie.id}>
                 <div style={{ position: 'relative' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', backgroundColor: "teal",padding: "10px", borderRadius: "20px" }}>
                <FcLike /><span className='fw-bold'> {movie.vote_average}</span>
                    </div>
                 </div>
                <Card.Body className='p-0 px-2'>
                      {/* <Card.Text> {movie.overview} </Card.Text> */}
                    <Card.Title className='text-center pt-2' style={{fontSize: "24px"}}>{movie.title}</Card.Title>
                    <CardText className='py-0'>
                    <p><span className='fw-bold'>Date :</span> {formatDate(movie.release_date)}</p>
                    </CardText>
                </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    )
}

export default HorrorPage