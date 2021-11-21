import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Movie from './components/Movie'

import {
    Nav,
    NavItem,
    Button, Container,
    Row,
} from 'reactstrap'

const movie = {
    name: 'Star Wars',
    desc: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette episode.',
    img: './starwars.jpg',
    note: 6,
    vote: 7,
}

function App() {
    const movies = [
        {
            name: 'Star Wars',
            desc: 'La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette episode.',
            img: './starwars.jpg',
            note: 6,
            vote: 7,
        },

        {
            name: 'Malelique',
            desc: 'Blablabla.....',
            img: './maleficent.jpg',
            note: 4,
            vote: 9,
        },
        {
            name: 'Malelique',
            desc: 'Blablabla.....',
            img: './maleficent.jpg',
            note: 4,
            vote: 9,
        },
        {
            name: 'Malelique',
            desc: 'Blablabla.....',
            img: './maleficent.jpg',
            note: 4,
            vote: 9,
        }, {
            name: 'Malelique',
            desc: 'Blablabla.....',
            img: './maleficent.jpg',
            note: 4,
            vote: 9,
        },

    ]

    return (

        <div style={{backgroundColor: "#333333"}}>

            <Nav style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10
            }}>
                <NavItem>
                    <img alt="logo" src="./logo.png"/>
                </NavItem>
                <NavItem style={{color: "white"}}>
                    Lasts Releases
                </NavItem>
                <NavItem>
                    <Button color="primary">11 films</Button>
                </NavItem>
            </Nav>

            <Container>
                <Row>
                    {movies.map((movie, i) => {
                            return (
                                <Movie
                                    movieName={movie.name}
                                    movieDesc={movie.desc}
                                    movieImg={movie.img}
                                    globalRating={movie.note}
                                    globalCountRating={movie.vote}


                                />

                            )
                        },
                    )}
                </Row>
            </Container>


        </div>
    )
}

export default App
