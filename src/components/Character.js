// Write your Character component here
import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'

const Flexible = styled.div`

    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    color:white;
  
    `
function Character(props){
    
   const {data} = props;
    
console.log(props)

    

    return (

        <Flexible>

        {data.map((element, i)=>{
             return ( <Cards key = {i} name={element.name} status={element.status} species = {element.species} image = {element.image} location={element.location.name} />)
        })}
        </Flexible>
        
        )

}


export default Character