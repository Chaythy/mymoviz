import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Card, CardBody, CardText, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons'

function Movie(props) {
    const [likeMovie, setLikeMovie] = useState(false);
    const [watchMovie, setWatchMovie] = useState(false);
    const [countWatchMovie, setCountWatchMovie] = useState(0);
    const [myRatingMovie, setMyRatingMovie] = useState(0);


    const handleLikeClick = () => {
        setLikeMovie(!likeMovie)


    }

    const handleWatchMovieClick = () => {
        setWatchMovie(true);
        setCountWatchMovie(countWatchMovie + 1)

    }

    const handleMyRatingPlus = () => {
        setMyRatingMovie(myRatingMovie + 1)
    }

    const handleMyRatingMinus = () => {
        setMyRatingMovie(myRatingMovie - 1)
    }



    return (
        <Col xs="12" lg="6" xl="4" style={{ marginBottom: 16 }}>
            <Card>
                <img
                    alt="Stars-Wars"
                    src={props.movieImg}
                    width="100%"
                />
                <CardBody>
                    <CardText>
                        Like
                        <FontAwesomeIcon
                            style={{
                                color: likeMovie ? '#f1c40f' : 'black',
                                cursor: 'pointer',
                            }}
                            icon={faHeart}
                            onClick={handleLikeClick}
                        />
                    </CardText>
                    <CardText>
                        Nombre de vues
                        <FontAwesomeIcon
                            style={{
                                color: watchMovie ? '#f1c40f' : 'black',
                                cursor: 'pointer',
                                margin: '0 5px',
                            }}
                            icon={faVideo}
                            onClick={handleWatchMovieClick}
                        />

                        <Badge color="primary">
                            {countWatchMovie}
                        </Badge>
                    </CardText>
                    <CardText>
                        Mon avis :
                        {[...Array(10)].map((_, index)=> {
                            return <FontAwesomeIcon style={{color: index < myRatingMovie ? '#f1c40f' : "black"}} icon={faStar}/>
                        })

                    }


                        <ButtonGroup>
                            <Button onClick={handleMyRatingMinus}>
                                -
                            </Button>
                            <Button onClick={handleMyRatingPlus}>
                                +
                            </Button>
                        </ButtonGroup>
                    </CardText>
                    <CardText>
                        Moyenne :
                        {[...Array(10)].map(()=> {
                            return <FontAwesomeIcon icon={faStar}/>
                        })

                        }

                        ({props.globalCountRating})

                    </CardText>
                    <CardText>
                        {props.movieName}
                    </CardText>
                    <CardText>
                        {props.movieDesc}

                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Movie