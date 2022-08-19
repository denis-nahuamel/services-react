import './App.css';
import Header from './header';
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
