import logo from './logo.svg';
import './App.css';
import Header from './header';
import CardService from './components/card';
import AddService from './components/add-service';
import ListAllServices from './components/list-all-services';
import ServicesPage from './pages/services-page';

function App() {
  return (
        <div className='d-flex flex-column'>
        <Header />
        <ServicesPage />
        </div>
  );
}

export default App;
