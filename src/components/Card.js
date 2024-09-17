import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { AddToCart } from "../features/cartSlice";

export default function Card() {
  const iteams = useSelector((state) => state.allcart.iteams);
  const [inputText, setInputText] = useState("");  // Initialized as empty string

  const dispatch = useDispatch();

  const inputhandler = (e) => {
    setInputText(e.target.value.toLowerCase());  // Fixed syntax here
  };

  return (
    <MDBContainer>
      <input
        type="search"
        className="form-control rounded mt-2"  // Changed `class` to `className`
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={inputhandler}
        value={inputText}  // Bind input text
      />
      <MDBRow className="mb-3">
        {iteams
          .filter((el) => el && el.title && el.title.toLowerCase().includes(inputText))  // Filter based on inputText
          .map((iteam) => (
            <MDBCol size="md-3" className="mt-3" key={iteam.id}> 
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={iteam.image}
                    fluid
                    alt={iteam.title}  // Use iteam title for alt text
                    style={{ height: "200px" }}
                  />
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{iteam.title}</MDBCardTitle>
                  <MDBCardText style={{ height: "220px" }}>
                    {iteam.description}
                  </MDBCardText>

                  <h5>Price: ₹{iteam.price}</h5>
                  <MDBBtn onClick={() => dispatch(AddToCart(iteam))}>
                    Add To Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
      </MDBRow>
    </MDBContainer>
  );
}
