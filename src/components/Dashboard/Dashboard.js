import React from 'react';
import Articles from '../Articles/Articles';

class Dashboard extends React.Component {
    render() {
        return ( 
            <div>
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card">
                            <div className="card-content">
                                <span className="flow-text card-title">Dashboard - Welcome {this.props.name}</span>
                                <p>Click image to guess</p>
                                <p>try not to guess the same one twice</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12 l12">
                        <Articles />     
                    </div> 
                </div>
            </div>
        );
    }
}

export default Dashboard;