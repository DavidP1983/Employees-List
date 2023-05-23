import EmployeesListItem from "../employees-list-item/employees-list-item";
import ErrorPanel from "../error-panel/error-panel";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeInputSalary }) => {

    const dataList = data.map(item => {

        if (isEmpty(item)) return false;

        const { id, ...itemProps } = item;
        // return <EmployeesListItem name={name} salary={salary} key={i}/>
        return <EmployeesListItem {...itemProps} 
        key={id} 
        onDelete={() => onDelete(id)} 
        onToggleProp={(e) => onToggleProp(e ,id, e.currentTarget.getAttribute('data-attr'))}
        onChangeInputSalary={onChangeInputSalary}/>
    });


    function isEmpty(obj) {
        for (let key in obj) return false;
        return true;
    }


    return (
        <ul className="app-list list-group">
            {dataList.length === 0 ? <ErrorPanel/>: dataList}
        </ul>
    )
};

export default EmployeesList; 