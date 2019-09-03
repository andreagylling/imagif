import React, { useState } from 'react';
import Search from '../Components/Search';
import Footer from '../Components/Footer';
import SearchResults from '../Components/SearchResults';
import Header from '../Components/Header';

require('dotenv').config();
const key = process.env.REACT_APP_API_KEY;

export default function Home() {

  const [gifs, setGifs] = useState([]);
  const [random, setRandom] = useState([]);
  const [trending, setTrending] = useState([]);

  async function fetchSearch(e) {
    e.preventDefault();
    let input = document.querySelector('#search');

    await fetch('https://api.giphy.com/v1/gifs/search?api_key=' + key + '&q=' + input.value + '&limit=30&offset=0&rating=G&lang=en')
      .then(res => res.json())
      .then(data => setGifs(data.data))
  }

  async function fetchRandom(e) {
    e.preventDefault();
    let input = document.querySelector('#search');
    await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + key + '&tag=' + input.value)
      .then(res => res.json())
      .then(data => setRandom([data.data]))
  }

  async function fetchTrending(e) {
    e.preventDefault();
    await fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + key + '&limit=30')
    .then(res => res.json())
    .then(data => setTrending(data.data))
  }

  return (
    <>
      <Header />

      <Search onClick={fetchSearch} onRndmClick={fetchRandom} onTrendClick={fetchTrending} />
      <SearchResults gifs={gifs} random={random} trending={trending} />

      <Footer />
    </>
  );
}