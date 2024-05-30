import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  //useState returns array with current state element and Function to update it as an array.
  const [movies, setMovies] = useState();

  // get all movies
  const getMovies = async () => {

    try
    {
      const response = await api.get("/api/v1/movies");

      console.log(response.data);
      
      setMovies(response.data);
    } 
    catch (error) 
    {
      console.error(error);
    }

  }
  // so getMovies compoent is called when the component is loaded
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
