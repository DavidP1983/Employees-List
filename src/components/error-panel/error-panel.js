import './error-panel.css';

const ErrorPanel = () => {

    // let classes = 'list-group-error d-flex justify-content-center';
    // if(data.length === 0) {
    //    classes+=' error'
    // }

    return (
        <li className='list-group-error d-flex justify-content-center'>No employees to match</li>
    )
};

export default ErrorPanel;