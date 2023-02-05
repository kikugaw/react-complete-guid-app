import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {    
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message:"Please enter a valid name and age (non-empty- values)."
      });
      return
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message:"Please enter a valid age (>0)."
      });
      return
    }

    props.onAddUser(enteredUserName, enteredAge);
      setEnteredUserName("");
      setEnteredAge("")    
  };

  const userNameCHangeHandler = event => {     
    setEnteredUserName(event.target.value)
  };

  const ageCHangeHandler = event => {     
    setEnteredAge(event.target.value)
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={ error.title} message={error.message} onConform={errorHandler} />}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" >Username</label>
        <input type="text" id="username" onChange={userNameCHangeHandler} value={enteredUserName}></input>
        <label htmlFor="age" >Age(Years) </label>
        <input type="number" id="age" onChange={ageCHangeHandler} value={enteredAge}></input>
        <Button type="submit">Add User</Button>
      </form>
      </Card>
      </div>
  );
};

export default AddUser;
