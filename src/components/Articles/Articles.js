import React from 'react';
import Article from './Article';
import dataJSON from "./images.json";

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [
            ],
            currentScore: 0,
            bestScore: 0
        };
    }

    componentDidMount () {
        this.loadImages();
    }
    
    loadImages = () => {
        const articles = [...dataJSON];
    
        this.setState({articles: articles});
    }

    resetArticles = () => {
        // reset the clicked state of each article
        let newArticles = this.state.articles.map( article => {
            article.wasClicked = false;
            return article;
        });
        return(newArticles);
    }

    clickImage = (id) => {
        // find the image clicked
        console.log(`clicked: ${id}`);
        let currentScore = this.state.currentScore;
        let bestScore = this.state.bestScore;
        let gameOver = false;
        // Set state to clicked
        let newArticles = this.state.articles.map( article => {
            if (article.id === id) {
                if (!article.wasClicked) {
                    article.wasClicked = true;
                    currentScore += 1;
                    if (currentScore > bestScore) {
                        bestScore = currentScore;
                    }
                } else {
                    currentScore = 0;
                    gameOver = true;
                }
            }
            return article;
        })

        if (gameOver) {
            newArticles = this.resetArticles();
        }
        
        newArticles.sort(() => Math.random() - 0.5);

        this.setState({articles: newArticles, currentScore: currentScore, bestScore: bestScore});
        
        this.props.updateScore({currentScore: currentScore, bestScore: bestScore});
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