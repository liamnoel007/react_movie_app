import './App.css';
import axios from 'axios';
import Card from './componets/Card';
import { useState, useEffect } from 'react';
import Header from './componets/Header';

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get('https://rickandmortyapi.com/api/character');
      setData(res.data.results);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data[0]);

  return (
    <div className="App">
      <Header />
      <ul className="app_cards">
        {data.map((item) => (
          <li className="cards" key={item.id}>
            <Card
              name={item.name}
              image={item.image}
              year={item.year}
              rating={item.species}
              // genre={item[index].genres[0]}?
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
