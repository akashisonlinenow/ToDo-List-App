import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {

    const [inputList, setInputList] = useState(""); //usestate is a hook function that allows u to have state variables in functional components. u pass the initial state to this function, and it returns a variable with the current state value
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

     const deleteItems = (id) => {
        console.log("Deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }


    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input type='text' placeholder="Add a Item" 
                    value={inputList}
                    onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/* <li> {inputList} </li> */}

                        {Items.map( (itemval, index) => {
                            return <ToDoLists 
                            key={index}
                            id={index}
                            text={itemval} 
                            onSelect = {deleteItems}
                            />;     //here text key id is a props     {/* return <li> {itemval} </li>; */}
                        } )}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;