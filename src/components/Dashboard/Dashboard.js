import React from 'react';
import Articles from '../Articles/Articles';

class Dashboard extends React.Component {
    state = {
        currentScore: 0,
        bestScore: 0
    }

    updateScore = (scoreObj) => {
        const currentScore = scoreObj.currentScore;
        const bestScore = scoreObj.bestScore;

        this.setState({currentScore: currentScore, bestScore: bestScore});
        
    }
    render() {
        return ( 
            <div>
                <div className="row">
                    <div className="col s8 m8 l8">
                        <div className="card">
                            <div className="card-content">
                                <span className="flow-text card-title">Dashboard - Welcome {this.props.name}</span>
                                <p>Click image to guess</p>
                                <p>try not to guess the same one twice</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m4 l4">
                        <div className="card">
                            <div className="card-content">
                                <span className="flow-text card-title">Score</span>
                                <p>Current Score: {this.state.currentScore} </p>
                                <p>Best Score: {this.state.bestScore} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12 l12">
                        <Articles updateScore={this.updateScore}/>     
                    </div> 
                </div>
            </div>
        );
    }
}

export default Dashboard;