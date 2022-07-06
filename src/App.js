import React, {useState} from 'react';
import UserList from './components/User/UserList/UserList';
import './App.css';
import InputUser from './components/User/InputUserItem/InputUser';
import Wrapper from './components/Helper/Wrapper';
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
    <Wrapper>
      <section id="userInput">
        <InputUser getInputInform={AddInputChangedHandler} />
      </section>
      <section id="userList">
        <UserList inform={userList}/>
      </section>
    </Wrapper>
  );
}

export default App;
