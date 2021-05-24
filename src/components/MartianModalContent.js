import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MartianModalContent = ({ martianCustomers, currentCustomer }) => {
  const customer = martianCustomers[currentCustomer];
  const [newBudget, setNewBudget] = useState(customer.budget);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Styling
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const modifyBudget = (event) => {
    event.preventDefault();
    customer.budget = newBudget;
    setShowSuccessAlert(true);
  };

  return (
    <>
      <div style={modalStyle} className={classes.paper}>
        {showSuccessAlert ? (
          <Alert onClose={() => setShowSuccessAlert(false)}>
            The budget has been updated! Shall we get a martian dog?{" "}
          </Alert>
        ) : (
          <> </>
        )}

        <h1 id='title'>Welcome {customer.name}</h1>
        <div id='description'>
          <form id='budgetForm' onSubmit={modifyBudget}>
            <Input
              color='primary'
              defaultValue={newBudget}
              onChange={(e) => {
                setNewBudget(e.target.value);
              }}></Input>

            <Button type='submit' variant='contained' color='primary'>
              Change Budget
            </Button>
          </form>
          <p>Date of first purchase: {customer.date_of_first_purchase}</p>

          <h3></h3>
          <p>Total budget: {customer.budget}</p>
          <p>Budget spent: {customer.budget_spent}</p>
          <p>Budget left: {customer.budget - customer.budget_spent}</p>
        </div>
      </div>
    </>
  );
};

export default MartianModalContent;
