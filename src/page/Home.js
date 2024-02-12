import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardText, Modal, Button } from 'react-bootstrap';
import CarouselHome from '../component/Carousel';
import NavbarComponent from '../component/Navbar';
import { FcLike } from "react-icons/fc";

const HomePage = () => {
   
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [show, setShow] = useState(false);

    useEffect(() => {
      fetchPopularMovies();
    }, []);

    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '43c54ebefa7865f82c66a2a5f2685426',
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!searchQuery) {
          // Jika input pencarian kosong, kembalikan daftar film ke popular movies
          fetchPopularMovies();
          return;
        }
        try {
          const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: '43c54ebefa7865f82c66a2a5f2685426',
              query: searchQuery,
            },
          });
          setMovies(response.data.results);
        } catch (error) {
          console.error('Error searching movies:', error);
        }
      };
      
      const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };

      const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setShow(true);
      };

      const handleCloseModal = () => {
        setShow(false);
      };
          // Fungsi untuk mengubah format tanggal
          const formatDate = (dateString) => {
            const date = new Date(dateString);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return date.toLocaleDateString('en-US', options);
          };

    return (
      <div className=''>
      <NavbarComponent  
      handleSubmit = {handleSubmit}
      handleSearchChange= {handleSearchChange}
      searchQuery= {searchQuery}
      />
      <CarouselHome />
        <div className="justify-content-center d-flex flex-wrap">
        {movies.map((movie) => (
              <Card 
              className='card-movie m-3 bg-light' 
              style={{ width: '24rem', borderColor: "transparent" }} 
              key={movie.id}
              onClick={() => handleMovieClick(movie)}>
            <div style={{ position: 'relative' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <div style={{ position: 'absolute', top: '10px', left: '5px', color: 'white', backgroundColor: "teal", padding: "10px", borderRadius: "20px" }}>
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
        <Modal
        show={show}
        onHide={handleCloseModal}
        dialogClassName="modal-100w"
        size='xl'
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        {selectedMovie && (
            <div className='row'>
              <div className='col-md-4 text-center'>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} style={{width: "20rem"}}/> 
              </div>
              <div className='col-md-8 py-5 pe-5'>
              <h3 className='pb-3'>{selectedMovie.title}</h3>
              <p><span className='fw-bold'>Date :</span> {formatDate(selectedMovie.release_date)}</p>
              <p><span className='fw-bold'>Synopsis :</span> {selectedMovie.overview}</p>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      
    );
  };
export default HomePage