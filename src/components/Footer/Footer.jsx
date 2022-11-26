import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../Footer/footer.css";

import { Link} from "react-router-dom";

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
                <Link to={{ pathname: "https://www.github.com/" }} target="_blank">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                {" "}
                <Link to={{ pathname: "https://www.linkedin.com/" }} target="_blank">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank" >
              
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
