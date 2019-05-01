import React from 'react';
import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super();
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 50)});
    }

    render() {
        

        return (
            <div className='f5 pa3'>
                <div className='center'>
                        <div className='cmt6'>
                            <input className='pa3 w-50 center round shadow-5 header f7-m'type='text'/>
                        </div>
                    
                </div>
            </div>
        );
    }
}
export default Search;