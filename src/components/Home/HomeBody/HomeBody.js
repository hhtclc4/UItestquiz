import React from 'react'
import './HomeBody.scss'

class HomeBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="home-body-container">
                <div className="home-body-cover">
                    <img src={require("../images/cover.jpg")} alt="cover" />
                    <div className="home-body-text">
                        <p>Create your quiz and share to everyone </p>
                    </div>
                    <button className="home-body-btn">
                        Get beginning
                    </button>
                </div>
            </div>
        );
    }
}

export default HomeBody;