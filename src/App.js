import logo from './logo.svg';
import './App.css';
import Header from './header';
import CardService from './components/card';
import AddService from './components/add-service';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './connection/firebase-config';

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<p>Cargando...</p>}>
        <AddService />
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default App;
