import { Component } from 'react';

import './search-panel.scss';


class SearchPanel extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         name: ''
      }
   }

   onSearchEmp = (e) => {
      const name = e.target.value;
      this.setState({name})
      this.props.getEmp(name);
   }
   // onSearchEmp = (e) => {
   //    this.props.getEmp(e.target.value);
   // }

   render() {
      const { name } = this.state;
      return (
         <input type="text" 
         className="form-control search-input"
         placeholder="Find an employee"
         onChange={this.onSearchEmp}
         value={name}/>
      )
   }
 
};

export default SearchPanel;