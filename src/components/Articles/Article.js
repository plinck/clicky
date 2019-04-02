import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.favsClasses = 'material-icons';

        if (props.saved){
            this.favsClasses += ' red';
        }    
    }

    // Save this article to MongoDB
    clickArticle = (event) => {
        // Call node to save article
        if (this.props.wasClicked) {
            console.log(`Already clicked: ${this.props.id}`);
        }
        this.props.clickImage(this.props.id);
    }

    handleMouseOver = (e) => {
        console.log(e.target, e.pageX);
        e.currentTarget.className = 'material-icons red';
    }

    handleMouseOut = (e) => {
        console.log(e.target, e.pageX);
        e.currentTarget.className = this.favsClasses;
    }

    render() {      
        // decontruct props
        let { image } =  this.props;
        
        return ( 
            <div className="card">
                <div className="card-image">
                    <img onClick={this.clickArticle.bind(this)} className="materialboxed responsive-img" src={image} alt="" />
                </div>
            </div>
        );
    }
}

export default Article;