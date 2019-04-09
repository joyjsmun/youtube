import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{

    searchTerm = (term) => {
        console.log(term);
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSearch = {this.searchTerm}/>
            </div>
        )
    }
}

export default App;