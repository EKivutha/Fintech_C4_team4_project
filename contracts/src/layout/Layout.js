import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import {CssBaseline} from "@material-ui/core";

import Header from "./header.js";




const Layout = ({ children, noNavbar }) => (
  <Container fluid>
    <Row>
      <CssBaseline/>
      <Header />
        <Col
          className="main-content p-0"
          lg={{ size: 0, offset: 0 }}
          md={{ size: 0, offset: 0 }}
          sm="12"
          tag="main"
        >
          {!noNavbar && <Header />}
          {children}
          
        </Col>
        
    </Row>
  </Container>
);

Layout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

Layout.defaultProps = {
  noNavbar: false,

};

export default Layout;