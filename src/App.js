import './App.css';
import axios from 'axios';
import Card from './componets/Card';
import { useState, useEffect } from 'react';
import Header from './componets/Header';

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1',
        {
          method: 'GET',
          headers: {
            'X-API-KEY': 'e554be46-768b-46a0-b699-f1cbc44e8722',
            'Content-Type': 'application/json',
          },
        }
      );
      setData(res.data.films);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data[0]);

  return (
    <div className="App">
      <Header />
      <ul className="app_cards">
        {data.map((item) => (
          <li className="cards" key={item.id}>
            <Card
              name={item.nameRu}
              image={item.posterUrlPreview}
              year={item.year}
              rating={item.rating}
              genre={item.genres[0].genre}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
