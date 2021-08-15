import logo from './logo.svg';
import './App.css';

const Clothes = (props) => {
  console.log(props) //Giá trị của props
  return (
    <div>
      <h1>{props.children}</h1>
      <ul>
          <li><b>Tên:</b> {props.name}</li>
          <li><b>Loại:</b> {props.type}</li>
          <li><b>Màu:</b>  {props.color}</li>
          <li><b>Kích cỡ:</b>  {props.size}</li>
      </ul>
      <hr></hr>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Clothes name="áo" type="áo ba lỗ" color="trắng" size="M">Clothes 1</Clothes>
      <Clothes name="váy" type="váy ngắn" color="hồng" size="M">Clothes 2</Clothes>
      <Clothes name="áo" type="áo phông" color="trắng" size="M">Clothes 3</Clothes>
      <Clothes name="quần" type="quần jean" color="xanhnước biển" size="M">Clothes 4</Clothes>
    </div>
  );
}

export default App;