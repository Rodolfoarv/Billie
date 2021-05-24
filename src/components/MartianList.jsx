import React, { useEffect, useState } from "react";
import martianCustomersData from "./martianCustomers";
import cleanMartianData from "../utils/cleanMartianData";
import { makeStyles } from "@material-ui/core/styles";

import { Modal, Button } from "@material-ui/core";

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

const MartianList = () => {
  const [martianCustomers, setMartianCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  console.log(martianCustomers);
  console.log(isModalOpen);

  useEffect(() => {
    let cleanCustomerData = cleanMartianData(martianCustomersData);
    setMartianCustomers(cleanCustomerData);
  }, []);

  return (
    <>
      {martianCustomers.map((customer, index) => {
        return (
          <div key={index}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                setIsModalOpen(true);
              }}>
              {customer.name}
            </Button>
          </div>
        );
      })}

      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        <div style={modalStyle} className={classes.paper}>
          <h2 id='simple-modal-title'>Text in a modal</h2>
          <p id='simple-modal-description'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default MartianList;
