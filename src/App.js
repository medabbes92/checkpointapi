
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './UserList';
import axios from 'axios';

function App() {
  const [user, setUser] = useState([])
  // const getusers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setUser(data)).catch(err=>console.log(err))
  // }


  const getusers= async() => {
    try { const res= await axios.get("https://jsonplaceholder.typicode.com/users")
    setUser(res.data)
      
    } catch (error) { console.log(error)
      
    }

  }
  useEffect(() => {
    getusers()

  }, [])
  

  return (
    <div className="App">
     <UserList user={user}/>
     
    </div>
  );
}

export default App;
