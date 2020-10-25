import React from 'react'
import styled from 'styled-components'



const Square = styled.div`
    border: .5rem solid black;
    width: 40%;
    font-size: .8rem;
    margin: 2rem;
    background-color:black;
`

const Img = styled.img`
    margin: 10px;
    width:60%;
    height:60%;

`

function Cards(props){

console.log(props)




    return (
        
        <Square>
            <h1>{props.name}</h1>
            <h4>Status: {props.status}</h4>
            <h4>Species: {props.species}</h4>
            <h5>Location: {props.location}</h5>
            <Img alt= {`Rick and Morty pictures`} src={props.image}/>
        </Square>
        



    )
}

export default Cards