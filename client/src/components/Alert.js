import { AppContext } from '../context/appContext'
import { useContext } from 'react';
const Alert = () => {
    const {alertType , alertText} = useContext(AppContext)
    return <div className={`alert alert-${alertType}`}>{alertText}</div>;
  };
  
  export default Alert;