import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import SignUpUser from './components/SignUpUser/SignUpUser';

function App() {
  return (
    <div className="App">
      {<AddProduct/>}
      {<SignUpUser/>}
    </div>
  );
}

export default App;
