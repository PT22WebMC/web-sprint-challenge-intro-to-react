// Write your Character component here
import React from "react";
import Cards from "./Cards";
import styled from "styled-components";

const Flexible = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
`;

function Character(props) {
  const { data } = props;

  console.log(props);

  return (
    <Flexible>
      {data.map((element, i) => {
        return <Cards key={i} character={element} />;
      })}
    </Flexible>
  );
}

export default Character;
