import {useState} from "react";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ModalWork = (props) => {

    function isOpen(isOpen) {
        if (isOpen)
            return ("show");
        else
            return (" ");
    }

    return (
        <div className={"modal-container " + isOpen(props.show)}>
            <div className="modal">
                <h1 className={"text-4xl text-white font-bold"}>{props.data.title}</h1>
                <div className={"carousel"}>
                    <Carousel >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <button onClick={props.close}>Cerrar</button>
            </div>
        </div>
    );
}

export default ModalWork;