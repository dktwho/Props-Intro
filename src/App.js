import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      UserList :
      <br />
      <br />
      <User name='Bill' spec='js' />
      <User name='Ted' spec='java' />
      <User name='John' spec='ruby' />

    </div>
  );
}

export default App;
