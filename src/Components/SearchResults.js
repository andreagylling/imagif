import React, { useState, useRef } from 'react';
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

const RndmContainer = styled.div`

`;

const CopyBtn = styled.button`
  color: #F2F2E8;
  background-color: #91c1e5;
  font-size: 14px;
  font-weight: bold;
  font-family: inherit;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 20px;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  color: #F2F2E8;
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
`;

export default function SearchResults(props) {
  const [gifID, setGifID] = useState('');
  const [enlarge, setEnlarge] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

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
            {props.trending && props.trending.map((gif, index) => {
              return <Wrapper key={index}><GifGrid id={gif.id} url={gif.images.fixed_height.url} description={gif.title} /></Wrapper>
            })}
          </Container>
      }

      <RndmContainer>
        {props.random.length !== 0 && props.random.map((gif, index) => {
          return <div id={gif.id} className="random-gif-container" key={index}>
            {
              document.queryCommandSupported('copy') &&
              <div>
                <CopyBtn onClick={copyToClipboard}>Copy to clipboard</CopyBtn>
                {copySuccess}
              </div>
            }
            <form>
              <Textarea
                readOnly={true}
                ref={textAreaRef}
                value={gif.bitly_url}
              />
            </form>
            <img src={gif.images.original.url} alt={gif.title}></img>
          </div>
        })}
      </RndmContainer>
    </>
  )
}

