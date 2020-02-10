import React from 'react';
import {
  Card, CardImg, CardText, CardBody, Col
} from 'reactstrap';

const RecipeCard = ({ id, image, title, category, area, youtube }) => {
  function showRecipe() {
    window.location.assign("/recipe/" + id);
  }

  return (
    <Col xs="12" sm="6" md="6" lg="4" xl="3" style={{marginTop:20, marginBottom:20}}>
      <Card className="text-center p-0" style={{ cursor: 'pointer' }} onClick={showRecipe}>
        <CardImg top width="100%" className="rounded-top" src={image} alt={title} />
        <CardBody className="p-2">
          <CardText className="font-weight-bold">{title}</CardText>
          <CardText>{area}/{category}</CardText>
          <a href={youtube}>View on Youtube</a>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecipeCard;