import { useRef, useState } from "react";
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData,setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = `https://pixabay.com/api/?key=32865172-3ab177f8a6a0f2feebc70ba0d&q=${ref.current.value}&image_type=photo`;
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      })
  };

  return (
    <div className="container">
      <h1>
        <img src = "./image/logo.png" alt = ""/>
      </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type = "text" placeholder="キーワード入力" ref={ref} />
          <input type = "submit" value = "検索"/>
        </form>
        <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
