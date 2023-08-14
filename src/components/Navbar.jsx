import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa' 
import {CgProfile} from 'react-icons/cg' 
import { useStateProvider } from '../utils/StateProvider';

export default function Navbar() {
  const [{userInfo}]=useStateProvider();
  return (
    <Container>
      <div className='search_bar'>
        <FaSearch/>
        <input type='text' placeholder='Artists, songs, or podcasts'/>
      </div>
      <div className='avatar'>
        <CgProfile/>
        <span>{userInfo?.username}</span>

      </div>
    </Container>
  )
}

const Container=styled.div`

display:flex;
justify-content:space-between;
align-items:center;
padding:2rem;
height:15vh;
position:sticky;
top:0;
transition:0.3s ease-in-out;
.search_bar{
  background-color:white;
  width:30%;
  padding:0.4rem 1rem;
  border-radius:2rem;
  display:flex;
  align-items:center;
  gap:0.5rem;
  input{
    border:none;
    height:2rem;
    width:100%;
    &:focus{
      outline:none;
    }
  }
}
.avatar{
  background-color:black;
  color:white;
  padding:0.3rem 0.4rem;
  padding-right:1rem;
  border-radius:2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  span{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.5rem;
    text-decoration:none;
    color:white;
    font-weight:bold;
    svg{
      font-size:1.3rem;
      background-color:#282828;
      padding:0.2rem;
      border-radius:1rem;
      color:#c7c5c5;

    }
  }
  
  
  }

`;
