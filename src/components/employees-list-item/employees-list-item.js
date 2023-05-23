import React, { Component } from 'react';

import './employees-list-item.css';



 class EmployeesListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            salary: ''
        }
        // this.toggleElem = React.createRef();
        
    }
    
    
    onChangeInputSalary = (e) => {
        const salary = +e.target.value.slice(0, -1);
        this.setState({salary});
        this.props.onChangeInputSalary(salary, e.currentTarget.getAttribute('data-attr'));
    }

    render() {
        const { name, salary, increase, like, onDelete, onToggleProp } = this.props;

        let classes = 'list-group-item d-flex justify-content-between';

        if(increase) {
            classes+= ' increase';
        }
        if(like) {
            classes+= ' like';
        }

        return (
            <li className={classes}>
                <span className="list-group-item-label" data-attr='like'  tabIndex="0"  onKeyDown={onToggleProp} onClick={onToggleProp} >{name}</span>
                <input type="text" 
                className="list-group-item-input" 
                onChange={this.onChangeInputSalary} 
                defaultValue={`${salary}$`}
                data-attr={name}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        data-attr='increase'
                        onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )    
    }   
};

export default EmployeesListItem;