import Title from "./Title";
import Description from "./Description";
import Image from "./Image";
import img from "./image.jpg";
import "./Simple-react.css";


import React, { Component } from 'react';

class SimpleCard extends Component {
     render() {

        return (
            <div className="cardBody">
                
                <header className="simple-card">

                <Title title ="simple React card"/>

                <Description description="This is a react schematic, It contain title, description and image components." />
            </header>
            <Image imgUrl ={img}/>

            </div>
        );
    }
}
export default SimpleCard;   