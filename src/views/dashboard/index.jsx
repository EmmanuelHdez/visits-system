import { Heading } from "../../components/Heading"
import HomeIcon from '@mui/icons-material/Home';
import { useState, useContext } from 'react';




export function Dashboard() {
    const [list, setList] = useState([]);

    const addItemToList = (item) => {
        setList([...list, item]);
    };

    const deleteItemFromList = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    return (
        <div>
        <h1>Add or Remove Items From List</h1>
        <ChildComponent addItemToList={addItemToList} />
        <DisplayListComponent list={list} deleteItemFromList={deleteItemFromList} />
        </div>
    );
}



function ChildComponent(props) {
    const [itemName, setItemName] = useState("");
  
    const handleInputChange = (event) => {
      setItemName(event.target.value);
    };
    
    console.log(itemName)
    

    const handleAddButtonClick = () => {
      if (itemName !== "") {
        props.addItemToList({ id: Date.now(), name: itemName });
        setItemName("");
      }
    };
  
    return (
      <div>
        <div>
          <input type="text" value={itemName} onChange={handleInputChange} />
          <button onClick={handleAddButtonClick}>Add</button>
        </div>
      </div>
    );
}

function DisplayListComponent(props) {
    return (
      <div>
        {props.list.map((item, index) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => props.deleteItemFromList(index)}>Delete</button>
          </div>
        ))}
      </div>
    );
}

  



