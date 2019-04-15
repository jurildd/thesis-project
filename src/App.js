import React, { Component } from 'react';
import ReactTable from "react-table";
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Repository from './components/Repository/';
import Repository2 from './components/Repository2/Repository2';
import Search from './components/Search/Search';
// import Filters from './components/Filters/Filters';
// import Upload from './components/Upload/Upload';
import './App.css';
import './components/Repository/index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'home',
      isSignedIn: false,
      input: '',
      searchInput: '',
      user: {
        id: '',
        name: '',
        email: '',
        joined: ''
      },
      dbInput: [],
      sort: {
        column: null,
        title: 'desc',
      }  
    };
    this.sortBy = this.sortBy.bind(this)
  }

  loadUser = (data) => {
    this.setState(
      {user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined
        }
      })
  }

  async componentDidMount() {
      const response = await fetch('http://localhost:3001/repository', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      this.setState({
        dbInput: await response.json()
      })
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({searchInput: this.state.input})
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})
    } else if(route === 'signin' || route ==='register') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  sortBy(column) {
    return (function (e) {
      let direction = this. state.sort.direction;
    
      if (this.state.sort.column === column) {
        // Change the sort direction if the same column is sorted.
        direction = this.state.sort.direction === 'asc' ? 'desc' : 'asc';
      }
      console.log(column)
      // Sort ascending.
      const sortedData = this.state.dbInput.sort((a, b) => {
        if(column === 'title'){
          // This sorts strings taking into consideration numbers in strings.
          const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
          return collator.compare(a.title, b.title);
        } 
        if(column === 'department'){
          // This sorts strings taking into consideration numbers in strings.
          const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
          return collator.compare(a.department, b.department);
        } 
        if(column === 'category'){
          // This sorts strings taking into consideration numbers in strings.
          const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
          return collator.compare(a.category, b.category);
        }
        if(column === 'author'){
          // This sorts strings taking into consideration numbers in strings.
          const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
          return collator.compare(a.author, b.author);
        }
        if(column === 'availability'){
          // This sorts strings taking into consideration numbers in strings.
          const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
          return collator.compare(a.availability, b.availability);
        }
  
        // else {
        //   return a.contractValue - b.contractValue;
        // }
      });

      // Reverse the order if direction is descending.
      if (direction === 'desc') {
        sortedData.reverse();
      }

      // Set the new state.
      this.setState({
        dbInput: sortedData,
        sort: {
          column,
          direction,
        }
      });
    }).bind(this); // Bind "this" again because the onSort function is returning another function.
  }

  setArrow = (column) => {
    let className = 'sort-direction';
    
    if (this.state.sort.column === column) {
      className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
    }
    
    return className;
  }

  render() {
    const {isSignedIn, route} = this.state
    return (
      <div className="App">
        {route === 'home' || route === 'signout' 
          ? <div> 
              <div>
                <Navigation 
                  isSignedIn={isSignedIn} 
                  onRouteChange={this.onRouteChange} 
                  name={this.state.user.name}
                />
              </div>
              {/* <div>
                <Search 
                  dbInput={this.state.dbInput} 
                  />
              </div> */}
              <div>
                {/* <Repository 
                  dbInput={this.state.dbInput} 
                  sortBy={this.sortBy}
                  setArrow={this.setArrow}
                /> */}
                <Repository2
                  dbInput={this.state.dbInput} 
                  sortBy={this.sortBy}
                  setArrow={this.setArrow}
                />
              </div>
              {
              /* <div></div> */
              /* <Filters/>
                <Upload/> */
              }
            </div>
            : (
              route === 'signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : (<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
            )
        }
      </div>
    );
  }
}

export default App;
