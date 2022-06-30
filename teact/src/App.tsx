import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <button onClick={() => {axios.post('http://15.165.158.22:7272/teeeeest', {userID: '1'})
          .then((result) => {console.log(result.data)}
          ).catch((err) => {console.log(err)})}}>POST</button>
      </>
    </div>
  );
}

export default App;
