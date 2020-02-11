import React from 'react'
import Header from './header'
import {
  Container
} from 'reactstrap';

function Layout(props) {
  return(
    <div>
      <Header />
      <Container>
        {props.children}
      </Container>
    </div>
  );
}

export default Layout;