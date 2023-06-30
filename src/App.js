import { useState } from 'react';
// import './App.css';
// import Counter from './components/Counter';

function App() {

  const [name, setName] = useState("Tolga");
  const [age,setAge] = useState(32);
  const [friends , setFriends] = useState(["Kamil" , "Serkan"]);
  const [address , setAddress] = useState({title: "Ankara" , zip: "06588"});

  return (
    <div className="App">
     <h1>Merhaba ben {name} </h1>
     <h2>{age} yaşındayım😊</h2>

     <button onClick={()=>setName("Ahmet Selim") }>Change Name</button>
     <button onClick={()=>setAge(4) }>Change Age</button>

  <hr /> 

    <h2>Friends</h2>
    {friends.map((friend , index) =>(
      <div key={index}>{friend}</div>
    ))}
  <br />

  <button onClick={() => setFriends([...friends, "Halil"])}>Add New Friend</button>
  <hr />

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />

      <button onClick={() => setAddress({title: "Stokholm" , zip: "103 16"})}>
      Change the Address
      </button>

      <hr />

      {/* <Counter /> */}

    </div>
  );
}

export default App;
