import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from './app-info/app-info';
import SearchPanel from './search-panel/search-panel';
import AppFilter from './app-filter/app-filter';
import EmployeesList from './employees-list/employees-list';
import EmployeesAddForm from './employees-add-form/employees-add-form';


import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        let storage;
        if (localStorage.getItem('data')) {
            storage = JSON.parse(localStorage.getItem('data'))
        } else {
            storage = [
                { name: 'Jhon C.', salary: 800, increase: false, like: false, id: 1 },
                { name: 'Alex M.', salary: 1000, increase: false, like: false, id: 2 },
                { name: 'Carl W.', salary: 12000, increase: false, like: false, id: 3 }
            ]
        }
        // this.id = uuidv4().slice(0, -28);
        this.state = {
            data: storage,
            searchEmp: '',
            filterEmp: 'all'
        }
    }

    //Delete item
    onDeleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(elem => elem.id !== id)

        }))
    }

    //add item
    onPost = (name, salary) => {
        const newItems = {
            name,
            salary,
            increase: false,
            like: false,
            id: uuidv4().slice(0, -28)
        };
        this.setState(({ data }) => {
            //   data.push({name, salary, increase: false, like: false, id: this.id});
            return {
                data: [...data, newItems]
                // data: [...data]
            }
        })
    }

    //toggle increase, like
    onToggleProp = (e, id, prop) => {
        
        if (e.which === 65 || e.which > 65 || e.which === 9 || e.which === 16 || e.which === 18) {
            return;
        }

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))




    }

    //search employees
    getEmp = (searchEmp) => {
        this.setState({ searchEmp })
    }

    findEmployee = (data, searchEmp) => {
        if (searchEmp.length === 0) {
            return data;
        }
        return data.filter(item => {
            return item.name.toLowerCase().indexOf(searchEmp) > -1
        })
    }


    //filter
    getFilter = (filterEmp) => {
        this.setState({ filterEmp })
    }

    filteredEmp(data, filterEmp) {
        const newData = data.filter(item => {
            switch (filterEmp) {
                case 'promo':
                    return item.like;
                case 'salary':
                    return item.salary > 1000;
                default:
                    return item;
            }
        })
        return newData;
    }
    

    //change input salary
    onChangeInputSalary = (salary, name) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.name === name) {
                    return { ...item, salary }
                }
                return item;
            })
        }))

    }


    render() {
        const { data, searchEmp, filterEmp } = this.state;


        const allEmployees = data.length;
        // const gettingPrime = data.filter(prime => prime.increase === true).length;
        const gettingPrime = data.filter(prime => prime.increase).length;
        const filteredData = this.findEmployee(this.filteredEmp(data, filterEmp), searchEmp);

        localStorage.setItem('data', JSON.stringify(filteredData));

        return (
            <div className="app">
                <AppInfo
                    allEmployees={allEmployees}
                    gettingPrime={gettingPrime} />

                <div className="search-panel">
                    <SearchPanel getEmp={this.getEmp} />
                    <AppFilter
                        filterEmp={filterEmp}
                        getFilter={this.getFilter} />
                </div>
                <EmployeesList
                    data={filteredData}
                    onDelete={this.onDeleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeInputSalary={this.onChangeInputSalary} />
                <EmployeesAddForm onPost={this.onPost} />
            </div>
        )
    };
}


export default App;