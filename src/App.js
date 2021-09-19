import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <Mycomponent brand='MOBILE' price='54000'></Mycomponent>
      <Mycomponent brand='TV' price='74000'></Mycomponent>
      <Mycomponent brand='FRIZZ' price='90000'></Mycomponent>
    </div >
  );
}
function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>users Loaded: {users.length}</h1>{
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>Call Me : {props.phone}</p>
    </div>
  )
}
function Mycomponent(props) {
  const [points, setPoints] = useState(1)
  // console.log(props);
  const Mystyle = {
    backgroundColor: 'tomato',
    padding: '10px',
    margin: '3px',
    borderRadius: '10px 50px'
  }
  const handleAddPoints = () => {
    // console.log('clicked');
    const newPoints = points * 2;
    setPoints(newPoints)
  }
  return (
    <div style={Mystyle}>
      <h1>Sell Bazar.com</h1>
      <h3 style={{ fontWeight: 'bold', color: 'ButtonHighlight' }}>product: {props.brand}</h3>
      <h3 style={{ fontWeight: 'bold', color: 'ButtonHighlight' }}>price: {props.price}</h3>
      <h4>points: {points}</h4>
      <button onClick={handleAddPoints}>Add points</button>
    </div>
  );
}
export default App;
