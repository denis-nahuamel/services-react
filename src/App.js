import logo from './logo.svg';
import './App.css';
import Header from './header';
import CardService from './components/card';
import AddService from './components/add-service';
import ListAllServices from './components/list-all-services';
import ServicesPage from './pages/services-page';
import { useState } from 'react';

function App() {
  const [type, setType] = useState("nocategory")
  const handleType = (value)=>{
    setType(value)
  }
  return (
        <div className='d-flex flex-column'>
        <Header onHandleType={handleType}/>
        <ServicesPage onSetType={type}/>
        </div>
  );
}

export default App;
