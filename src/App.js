import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const products ={
  name:"phone", model:"11proMax", price: 45000, color:"black"
}
  const pragraphStyle ={
    color:'yellow',
    backgroundColor: 'red'
  
  }

  const players = [
    {name:"sakib", score:"5000"},

    {name:"Mortoza", score:"7500"},
    {name:"Tamim", score:"10000"}
  ];


function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUser></ExternalUser>

{/*       
{
  players.map(player => <Person name={player.name} score={player.score} ></Person>)
} */}

      {/* <Person name="Taskin" degignation= "Pessure"></Person>
      
      <Person name="Mashrafie" degignation= "Captain"></Person>
      
      <Person name="Sakib" degignation= "All Rounder"></Person>
      
      <Person name = "Mushfique" degignation="Run Machine"></Person> */}

      {/* <Friend name = "Rakib" profession = "Reactjs Developer"></Friend>
      <Friend name = "Sojib" profession = "Busnessman"></Friend>
      <Friend name = "Jony" profession = "Network Engineear"> </Friend>
       */}
      
    </div>
  );
}

function Person(props) {
  return (
    <div className='myperson'>
      <h1>Name:{props.name} </h1>
      <p>Score:{props.score}</p>
    </div>
  
  ) 
  
}

function Friend (props){
  return (
    <div className='friend'> 
      <h3>Name:{props.name}</h3>
      <p>Profession:{props.profession}</p>
    </div>

  )
}

function Counter(){
  const [count, setCount ]=useState(55);
  const increseCount = () =>  setCount(count + 1);
  const decreseCount = () => setCount(count - 1);
  return (
    <div>
    <h3>Count:{count}</h3>
    <button onClick={increseCount}>Increase</button>
    <button onClick={decreseCount}>Decrese</button>
    </div>
  )
}

function ExternalUser () {
  const [users, setUser ] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h2>External User</h2>
      
      {
        users.map(user => <User name={user.name} email={user.email} address= {user.address} phone={user.phone}></User>)
      }
    </div>
  )
}

function User (props) {
  return(
    <div className='user'><h3>Name:{props.name}</h3>
    <p>Email:{props.email}</p>
    <p>Address:{props.address.city}</p>
    <p>Phone:{props.phone}</p>
    </div>
  )

}

export default App;
