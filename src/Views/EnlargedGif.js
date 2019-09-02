import React, { useEffect, useState, useRef } from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  margin: 40px auto;
  position: relative;
  border: none;
  border-radius: 8px;
  background-color: rgba(242, 242, 242, 0.8);
  width: 50%;
  padding: 50px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #91c1e5;
  border: none;
  font-size 40px;
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
  color: #91c1e5;
  background-color: transparent;
  border: none;
  resize: none;
`;

require('dotenv').config();
const key = process.env.REACT_APP_API_KEY;


export default function Enlarge(props) {
  const [gif, setGif] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/' + props.location.state.id + '?api_key=' + key)
      .then(res => res.json())
      .then(data => setGif([data.data]))
  })

  function runRedirect(e) {
    e.preventDefault();
    setRedirect(true);
  }

  return (
    <>
      <Container id="enlarged-gif">
        <CloseBtn onClick={runRedirect}><i className="fas fa-times"></i></CloseBtn>
        {redirect ? <Redirect to='/'/> : null}
        {gif && gif.map ( (gif, index) => {
        return <div key={index}>
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
          <img  src={gif.images.original.url} alt={gif.title}></img>
        </div>
        })}
      </Container>
    </>
  )
}