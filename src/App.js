import React, {useState} from 'react';
import UserList from './components/User/UserList/UserList';
import './App.css';
import InputUser from './components/User/InputUserItem/InputUser' 
function App() {
  const [userList, setUserList] = useState([]);
  
  const AddInputChangedHandler = (EnteredName, EnteredAge) => {
    setUserList(prevInput => {
      const updateInput = [...prevInput];
      updateInput.unshift({
        name: EnteredName,
        age: EnteredAge,
        id: Math.round(Math.random() * 100)
      });
      return updateInput;
    });
  }
  console.log(userList);
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
