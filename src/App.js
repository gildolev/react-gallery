import react, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  debugger
  const albomsUrl = 'https://jsonplaceholder.typicode.com/albums';
  const albomUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';
  const [alboms, setAlboms] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(albomsUrl).then((response) => {
      setAlboms(response.data);
    });
  }, [])
  const handleSelectAlbom = (e) => {
    const albomId = e.target.value;
    axios.get(albomUrl + albomId).then((response) => {
      setImages(response.data);
    });
  }
  return (
    <>
      <div className="App">
        <h1>Select an album:</h1>
        <form >
          <select name="images" id="images" className="select" onChange={(e) => { handleSelectAlbom(e) }}>
            {alboms.length > 0 && alboms.map((albom, index) => (
              <option value={albom.id} key={index}>{albom.title}</option>
            ))}

          </select>
        </form>
        <div className='container'>
          {images.map((image, index) => (
            <span key={index} className='image' >
              <img src={image.thumbnailUrl} alt={image.title} />
            </span>
          ))}
        </div>
      </div>

    </>

  )
}

export default App;
