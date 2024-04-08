import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBIcon
  
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function Navbar() {
  const {cart , totalQuantity}= useSelector((state)=>state.allcart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])
  return (
    <MDBNavbar light bgColor='black' className='mt-2' >
      <MDBContainer fluid>
        <MDBNavbarBrand><MDBIcon fab icon="accusoft"  style={{fontSize:"35px",color:"white"}} className='NavIcon' /></MDBNavbarBrand>
        <MDBBtn color='light' rippleColor='dark'>
        <Link to='/'> <MDBIcon fas icon="grip-vertical" />  All Product Data</Link>
        
      </MDBBtn>
      <MDBBtn color='light'>
      <Link to='/shoppingCart'><MDBIcon fas icon="cart-arrow-down"/> Cart({totalQuantity})</Link>
        
      </MDBBtn>
       
      </MDBContainer>
    </MDBNavbar>
  );
}