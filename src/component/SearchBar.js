import React from 'react';

class SearchBar extends React.Component{
    state = {term:''}


    searchBarHandler = (e) => {
        this.setState({term:e.target.value})
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <label>Search Video Clip here</label>
                    <input type="text" onChange={this.searchBarHandler} />
                </form>
            </div>
        )
    }
}

export default SearchBar;