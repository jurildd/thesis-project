import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ReactComponent } from '*.svg';


// const RepoClick = ({match, dbInput}) => {
//     const data = props.dbInput
//     return (
        
//     );
// }


class RepoClick extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const id = this.props.match.params.id;
        const data = this.props.dbInput.id;
        return(
            <div>
                <p style={{paddingTop: '100px', marginTop: '0px'}}>{id}</p>
                {/* <p style={{paddingTop: '100px', marginTop: '0px'}}>{data}</p> */}
            </div>
        );
    }
}
export default RepoClick;