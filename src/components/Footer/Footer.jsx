import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../Footer/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Restaurant Timitar</h5>
              <p>
                Here you can find everything you are looking for, fast food or drinks, coffee...
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Saturday - Thursday</span>
                <p>06:00 - 23:00</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday </span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p><b>Location:</b> Hassan 2 Av, Guelmim, Morocco</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span> +212 6 12 34 56 78</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>saidboussif256@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022  All Rights
              Reserved. Created By SAID BOUSSIF
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0"><b> Follow:</b> </p>
               <span>
               <a href="https://github.com/ISNTIC-2021/" target="_blank" rel="noreferrer"> <i class="ri-github-line"></i></a>
                  
              </span>
              <span>
              <a href="http://www.linkedin.com/in/said-boussif" target="_blank" rel="noreferrer"> <i class="ri-linkedin-line"></i></a>

                  
              </span>
              <span>
                <a href="https://www.facebook.com/profile.php?id=100010889835226" target="_blank" rel="noreferrer"> <i class="ri-facebook-line"></i></a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
