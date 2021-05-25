import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    margin:'auto',
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },

  modifyBudgetButton: {
    marginLeft: 30
  }


}));

const MartianModalContent = React.forwardRef(({ martianCustomers, currentCustomer }, ref) => {
  const customer = martianCustomers[currentCustomer];
  const [newBudget, setNewBudget] = useState(customer.budget);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); 

  // Styling
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const modifyBudget = (event) => {
    event.preventDefault();

    if (newBudget < 0){
      setAlertMessage("There are no negative numbers for us martians. (Budget should be positive)");
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      
    }else if (newBudget < customer.budget_spent){
      setAlertMessage("Your new budget cannot be less than what you have spent");
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }else{
      customer.budget = newBudget;
      setAlertMessage("The budget has been updated! Shall we get a martian dog?");
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
    }
  };

  return (
    <>
      <div style={modalStyle} className={classes.paper}>
        {showSuccessAlert ? (
          <Alert onClose={() => setShowSuccessAlert(false)} severity='success'>
            <h3>{alertMessage} </h3>
          </Alert>
        ) : (
          <> </>
        )}

        {showErrorAlert ? (
          <Alert onClose={() => setShowErrorAlert(false)} severity='error'>
            <h3>
              {alertMessage}
            </h3>
          </Alert>
        ) : (
          <> </>
        )}

        <h1 id='title'>Welcome {customer.name}</h1>
        <div id='description'>
          <form id='budgetForm' onSubmit={modifyBudget}>
            <Input
              name='budgetField'
              inputProps={{
                pattern: "[0-9]*",
              }}
              color='primary'
              value={newBudget}
              type='number'
              onChange={(e) => {
                setNewBudget(e.target.value);
              }}></Input>

            <Button type='submit' variant='contained' color='primary' className={classes.modifyBudgetButton}>
              Change Budget
            </Button>
          </form>
        </div>
      </div>
    </>
  );
});

export default MartianModalContent;
