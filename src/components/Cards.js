import React from "react";
import styled from "styled-components";

const Square = styled.div`
  border: 0.5rem solid black;
  width: 40%;
  font-size: 0.8rem;
  margin: 2rem;
  background-color: black;
`;

const Img = styled.img`
  margin: 10px;
  width: 60%;
  height: 60%;
`;

function Cards(props) {
  const { name, status, species, location, image } = props.character;
  console.log(props);

  return (
    <Square>
      <h1>{name}</h1>
      <h4>Status: {status}</h4>
      <h4>Species: {species}</h4>
      <h5>Location: {location.name}</h5>
      <Img alt={name} src={image} />
    </Square>
  );
}

export default Cards;
