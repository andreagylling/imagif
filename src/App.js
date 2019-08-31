import React, {useState} from 'react';
import logo from './imagif.svg';
import Search from './Components/Search';
import GifGrid from './Components/GifGrid';
import Footer from './Components/Footer';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
  font-family: 'Manjari', sans-serif;
`;

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

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    grid-gap: 10px;
    margin: 20px;    
`;

require('dotenv').config();
const key = process.env.REACT_APP_API_KEY;

export default function App() {

  const [gifs, setGifs] = useState([]);

  async function fetchSearch (e){
    e.preventDefault();
    let input = document.querySelector('#search');

    await fetch('https://api.giphy.com/v1/gifs/search?api_key='+ key +'&q='+ input.value +'&limit=30&offset=0&rating=G&lang=en')
    .then(res => res.json())
    .then(data => setGifs(data.data))
  }

  return (
    <AppDiv>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Search onClick={fetchSearch}/>
      <Container>
        {gifs && gifs.map((gif, index) => {
          return <GifGrid key={index} url={gif.images.fixed_height.url} description={gif.title}/>
        })}
      </Container>
      <Footer/>
    </AppDiv>
  );
}
