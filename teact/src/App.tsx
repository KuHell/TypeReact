import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <button onClick={() => {axios.post('http://13.124.40.95:7272/createuserWallet/', {userID: 1})
          .then((result) => {console.log(result)}
          ).catch((err) => {console.log(err)})}}>POST</button>
      </>
    </div>
  );
}

export default App;
