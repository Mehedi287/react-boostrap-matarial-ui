
import './App.css';
import Card from './Conponents/Card/Card';
import { useState, useEffect } from 'react';
import { ButtonGroup, Button, Spinner, Row } from 'react-bootstrap';
// const [items, setItems] = useState([])


function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=60ebc7ffe93a4ef6a218dc51b707a5d3')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }

    , [])

  return (
    <div className="App">
      {
        news.length === 0 ? <Spinner animation="border" /> :
          <Row className="g-4" xs={1} md={3} lg={4}>
            {
              news.map(nw => <Card news={nw}></Card>)
            }
          </Row>
      }






    </div>
  );
}

export default App;
