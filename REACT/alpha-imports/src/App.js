import './App.css';
import AppLayout from './layout';
import Routers from './routes';
import './style/style.css';

function App() {
  return (
    // <div className="App">
      <AppLayout>
        <Routers />
      </AppLayout>
    // </div>
  );
}

export default App;
