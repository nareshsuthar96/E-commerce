import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white ' style={{ backgroundColor: 'black' }}  >
      <MDBContainer className='pt-4'>
        <section className='mb-4' >
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-blue m-1'
            href='https://www.facebook.com/'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' style={{fontSize:"18px"}} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-blue m-1'
            href='https://twitter.com/?lang=en'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' style={{fontSize:"18px"}} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-blue m-1'
            href='https://www.google.com/'
            role='button'
          >
            <MDBIcon fab className='fa-google' style={{fontSize:"18px"}} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-blue m-1'
            href='https://www.instagram.com/'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' style={{fontSize:"18px"}}/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-blue m-1'
            href='https://in.linkedin.com/'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' style={{fontSize:"18px"}}/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-blue m-1'
            href='https://github.com/'
            role='button'
          >
            <MDBIcon fab className='fa-github' style={{fontSize:"18px"}}/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-white p-3' style={{ backgroundColor: 'grey' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://e-commerceweb-lake.vercel.app/'>
           <span>    e-commerceweb </span>
        </a>
      </div>
    </MDBFooter>
  );
}