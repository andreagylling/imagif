import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 200px;
    height: 200px;
    box-shadow: 3px -2px 10px #5681a0;
`;

export default function GifGrid (props) {
    return (
        <div>
            <Img src={props.url} alt={props.description}></Img>
        </div>
    )
}