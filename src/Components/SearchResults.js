import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import GifGrid from './GifGrid';

const Wrapper = styled.div`

`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  grid-gap: 10px;
  margin: 20px;
  &:hover ${Wrapper} {
    cursor: pointer;
  }
  
`;

export default function SearchResults(props) {
  const [gifID, setGifID] = useState('');
  const [enlarge, setEnlarge] = useState(false);


  function enlargeGif(e) {
    e.preventDefault();
    setGifID(e.target.id);
    setEnlarge(true);
  }

  return (
    <>
      {
        enlarge ? <Redirect to={{
          pathname: '/link',
          state: { id: gifID }
        }}
        /> :
        
          <Container onClick={enlargeGif} >
            {props.gifs && props.gifs.map((gif, index) => {
              return <Wrapper key={index}><GifGrid id={gif.id} url={gif.images.fixed_height.url} description={gif.title} /></Wrapper>
            })}
          </Container>
        
      }
    </>
  )
}

