import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { useSelector , useDispatch} from 'react-redux';
import { AddToCart } from '../features/cartSlice';


export default function Card() {
    const iteams = useSelector((state)=>state.allcart.iteams)

    const dispatch = useDispatch()
  return (
    <MDBContainer >
        <MDBRow className='mb-3'  >
        { iteams.map((iteam)=>(
            <MDBCol size='md-3' className='mt-3'  >
        <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' >
        <MDBCardImage src={iteam.image} fluid alt='...' style={{height:"200px"}}  />
       
      </MDBRipple>
      <MDBCardBody >
        <MDBCardTitle>{iteam.title}</MDBCardTitle>
        <MDBCardText style={{height:"220px"}}>
          {iteam.description}
        </MDBCardText>

        <h5>Price :- ₹{iteam.price}</h5>
        <MDBBtn href='#' onClick={()=>dispatch(AddToCart(iteam))}>Add To Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </MDBCol>
        ))
        
        }
        </MDBRow>
    </MDBContainer>

    
  );
}