
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo} from '@fortawesome/free-solid-svg-icons';


import {
  Nav,
  NavItem,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Badge,
} from 'reactstrap';



function App() {

var color={color: '#f1c40f'};


  return (

    <div>
      
        <Nav
        >
          <NavItem>
            <img alt="logo" src="./logo.png" />
          </NavItem>
          <NavItem>
            Lasts Releases
          </NavItem>
          <NavItem>
            <Button color="primary">11 films</Button>
          </NavItem>
        </Nav>


        
          <Col xs="12" lg="6" xl="4">
            <Card>
              <img
                alt="Stars-Wars"
                src="./starwars.jpg"
                width="100%"
              />
              <CardBody>
                <CardText>
                  Like
                  <FontAwesomeIcon style={color} icon={faHeart} />
                </CardText>
                <CardText>
                  Nombre de vues
                  <FontAwesomeIcon icon={faVideo} />
                  <Badge color="primary">
                    2
                  </Badge>
                </CardText>
                <CardText>
                  Mon avis
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />

                  <ButtonGroup>
                    <Button>
                      -
                    </Button>
                    <Button>
                      +
                    </Button>
                  </ButtonGroup>
                </CardText>
                <CardText>
                  Moyenne
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />

                </CardText>
                <CardText>
                  Star Wars : L'Ascension de Skywalker
                </CardText>
                <CardText>
                  La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette episode.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          

      
    </div>
  );
}

export default App;
