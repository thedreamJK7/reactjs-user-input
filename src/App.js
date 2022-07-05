import React, {useState} from 'react';
import UserList from './components/User/UserList/UserList';
import './App.css';
import InputUser from './components/User/InputUserItem/InputUser' 
function App() {
  const [userList, setUserList] = useState([
    {name: "Cristiano Ronaldo", age: 37},
    {name: "Lionel Messi", age: 35}
  ]);
  
  const AddInputChangedHandler = (EnteredName, EnteredAge) => {
    setUserList(prevInput => {
      const updateInput = [...prevInput];
      updateInput.unshift({name: EnteredName, age: EnteredAge});
      return updateInput;
    });
  }

  return (
    <div>
      <section id="userInput">
        <InputUser getInputInform={AddInputChangedHandler} />
      </section>
      <section id="userList">
        <UserList inform={userList}/>
      </section>
    </div>
  );
}

export default App;
