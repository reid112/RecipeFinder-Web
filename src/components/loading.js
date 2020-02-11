import React from 'react';
import {
    Row, Col, Spinner
} from 'reactstrap';

const Loading = () => {
  return (
    <Row style={{margin: 100}}>
        <Col xs="12" className="text-center">
            <Spinner color="danger"/>
        </Col>
    </Row>
  );
}

export default Loading;