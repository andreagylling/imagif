import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: -10px;
  padding: 20px;
  background-color: #91c1e5;
`;

const Input = styled.input`
  width: 25%;
  height: 20%;
  font-family: inherit;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid #91c1e5;
  border-radius: 8px;
  background-color: #F2F2E8;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1em;
  font-family: inherit;
  font-weight: bold;
  color: #F2F2E8;
  background-color: #91c1e5;
  border: none;
  margin-top: 30px;
`;

const RandomBtn = styled.button`
  font-size: 1em;
  font-family: inherit;
  font-weight: bold;
  color: #F2F2E8;
  background-color: #91c1e5;
  margin: 10px;
  padding: 20px;
  border: 1px solid #F2F2E8;
`;


export default function Search(props) {
  return (
    <>
      <Form>
        <RandomBtn onClick={props.onRndmClick}>Get random gif</RandomBtn>
        <RandomBtn onClick={props.onTrendClick}>Get trending gifs</RandomBtn>
        <br/>
        <Input id="search" className="search-field" type="text" />
        <Button className="search-btn" onClick={props.onClick}>Search</Button>
      </Form>
    </>
  )
}