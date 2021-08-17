import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Users from './components/users'
import Loading from './components/Loading'
import Axios from 'axios';
import './App.css';

function App() {
  
  const [click, clicked] = useState(0); 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const getUsers = () => {
    
    setLoading(true)

    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        setData(response.data.data);
        setLoading(false)
      }
    )
  }
  
 
  useEffect(() => {
    click && getUsers();
  }, [click])

  return (
    <div className="App">
      <Navbar SetIsClicked={clicked}/>
      <div className='row'>
       {data&&data.map((val) => {
          return <Users first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar}/>
          
        })}
      </div>
      <Loading show={loading}/>
    </div>
  );
}

export default App;