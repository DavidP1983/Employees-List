import './app-info.scss';

const AppInfo = ({allEmployees, gettingPrime}) => {
    return (
        <div className="app-info">
            <h1>Accounting employees in the company</h1>
            <h2>Total number of employees: {allEmployees}</h2>
            <h2>The award is received: {gettingPrime}</h2>
        </div>
    )
};


export default AppInfo;