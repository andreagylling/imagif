import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../imagif.svg';
import Search from '../Components/Search';
import Footer from '../Components/Footer';
import SearchResults from '../Components/SearchResults';


const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 50%
`;


require('dotenv').config();
const key = process.env.REACT_APP_API_KEY;

export default function Home() {

  const [gifs, setGifs] = useState([]);

  async function fetchSearch(e) {
    e.preventDefault();
    let input = document.querySelector('#search');

    await fetch('https://api.giphy.com/v1/gifs/search?api_key=' + key + '&q=' + input.value + '&limit=30&offset=0&rating=G&lang=en')
      .then(res => res.json())
      .then(data => setGifs(data.data))
  }



  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>

      <Search onClick={fetchSearch} />
      <SearchResults gifs={gifs} />

      <Footer />
    </>
  );
}