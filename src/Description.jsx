import React, { Component } from 'react';

class Description extends Component  {
   constructor(props) {
       super(props)
   }
    render() {
        return(
            <div className="desscription">
                <p>
                    {this.props.description}
                </p>
            </div>
        );
    }
}
export default Description;
