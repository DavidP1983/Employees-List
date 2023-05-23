import './app-filter.css';

const AppFilter = ({filterEmp, getFilter}) => {

    const  btn = [
        {active: 'all', text: 'All employees'},
        {active: 'promo', text: 'Promotion'},
        {active: 'salary', text: 'Salary more than 1000$'}
        
    ];

    const createBtn = btn.map((item, i) => {
        const {active, text} = item;
        const activeClass = active === filterEmp ? 'btn-light': 'btn-outline-light'
        return <button className={`btn ${activeClass}`} type="button" key={i}  onClick={() => getFilter(active)}>{text}</button>
    })
    return (
        <div className="btn-group">
            {createBtn}
        </div>
    )
};

export default AppFilter;