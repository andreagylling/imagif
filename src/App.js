import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from './Views/Home';
import EnlargedGif from './Views/EnlargedGif';


const Main = styled.div`
  text-align: center;
  font-family: 'Manjari', sans-serif;
`;

export default function App() {

  return (
    <BrowserRouter>
      <Main>
        <Route exact path='/' component={Home}/>
        <Route exact path='/link' component={EnlargedGif}/>
      </Main>
    </BrowserRouter>
  );
}
