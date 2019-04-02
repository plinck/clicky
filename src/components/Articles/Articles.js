import React from 'react';
import Article from './Article';
import dataJSON from "./images.json";

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [
            ]
        };
    }

    componentDidMount () {
        this.loadImages();
    }
    
    loadImages = () => {
        const articles = [...dataJSON];
    
        this.setState({articles: articles});
    }

    clickImage = (id) => {
        // find the image clicked
        console.log(`clicked: ${id}`);
        // Set state to clicked
        let newArticles = this.state.articles.map( article => {
            if (article.id === id) {
                article.wasClicked = true;
            }
            return article;
          })

        this.setState({articles: newArticles});
    }
        
    render() {
        return (
            <div className="row">
            {this.state.articles.map((info, i) => {
                return(
                    <div key={info.id} className="col s12 m4 l3">
                        <Article
                        clickImage={this.clickImage.bind(info.id)}
                        id={info.id}
                        wasClicked={info.wasClicked}
                        image={info.image}
                        />
                    </div>
                    );
            })}
            </div>
        );
    }
}

export default Articles;