import { Component } from 'react';

import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        const key = e.target.getAttribute('name');

        this.setState({
            [key]: e.target.value
        })
    }

    onPost = (e) => {
        e.preventDefault();
        const {salary, name} = this.state;
        const validName = name.match(/\d/g);
        if(!salary || !name || validName || name.length <= 3) {
            return;
        }
            this.props.onPost(name, salary);
            this.setState({
                name: '',
                salary: ''
            })
    }

    render() {
        const {name, salary} = this.state; 
        const styleField = {};
        if(name.match(/\d/g)) {
          styleField['border'] = '3px solid red';
            
        }
        return (
            <div className="app-add-form">
                <h3>Add new Employee</h3>
                <form className="add-form d-flex" onSubmit={(e) => this.onPost(e,name,salary)}> {/*  onSubmit={(e) => this.onPost(e,name,salary)} */}
                    
                    <input type="text" className="form-control new-post-label" 
                    placeholder="What's his name" 
                    onChange={this.onValueChange}
                    name="name"
                    value={name}
                    style={styleField}/>

                    <input type="number" 
                    className="form-control new-post-label" 
                    placeholder="Salary in $" 
                    onChange={this.onValueChange}
                    name="salary"
                    value={salary}/>

                    <button type="submit" className="btn btn-outline-light">Add employee</button>
                </form>
            </div>
        )
    }
   
};

export default EmployeesAddForm;