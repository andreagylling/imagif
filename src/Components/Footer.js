import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100px;
    margin: 0 auto;
`;

const Img = styled.img`
    margin-top: 40px;
`;

export default function Footer(){
    return (
        <Div>
            <Img src="/giphy.png" alt="Powered by GIPHY"></Img>
        </Div>
    )
}