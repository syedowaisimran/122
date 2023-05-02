
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Router/home';
import store from './redux/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
<Provider>
  {store}
</Provider>
    </>
  );
}

export default App;
