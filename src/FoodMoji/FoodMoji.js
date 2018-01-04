import React, {Component} from 'react';

class FoodMoji extends Component {

    constructor(props) {
        super(props);

        this.state = {
            xPos: 0,
            yPos: 0,
            rotDeg: 0
        }

    }

    render() {
        return (
            <div>
                <p className="food-moji" style={{WebkitTransform: `translateX(${this.xPos}px) translateY(${this.yPos}px) rotateZ(${this.rotDeg}deg)`}}>{this.props.food}</p>
            </div>
        );
    }
}

export default FoodMoji;