import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Request from '../../Appointment/Request';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";



function Footer() {
  return (
    <MDBFooter bgColor='light'  className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
   
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SaarHealthCare
              </h6>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan, tellus non porttitor efficitur, nisl leo vulputate erat, nec sollicitudin nisl nisi eget elit.
              </p>
            </MDBCol>       
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Link</h6>
              <p>
              <Link to='/appointment' element={<Request/>}>Request Appointment </Link>
              </p>
              <li style={{fontSize: '2rem'}}>
              <a
                href="https://www.facebook.com/saarhealthcare/"
                target="_blank">
                <FaFacebookSquare className="facebook" />
              </a>
           
            
              <a
                href="https://www.instagram.com/saarhealthcare/"
                target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
           
              <a
                href="https://www.youtube.com/@saarhealthcare2279"
                target="_blank">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                214 sun gravitas,Shyamal CrossRoad,Ahmedabad
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                saarhealthcare94@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 95865 98461
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

   
    </MDBFooter>
  );
}
export default Footer;