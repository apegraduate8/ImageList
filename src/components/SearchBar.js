import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputchange(event) {
        // handle input changes
    }

    // this should be an arrow function so the we keep a reference to "this"
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
