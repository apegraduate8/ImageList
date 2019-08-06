import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const gridAutoRowsVal = 10;
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / gridAutoRowsVal);

        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image;

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={ description } src={ urls.regular }/>
            </div>
        );
    }
}

export default ImageCard;

// React refs: Gives access to a single DOM element
// Create refs in the constructor, assign them to instance vars,
// then pass them to a particular JSX element as props
