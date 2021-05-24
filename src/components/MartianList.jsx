import React, { useEffect, useState } from "react";
import { Modal, Button } from "@material-ui/core";

import martianCustomersData from "./martianCustomers";
import cleanMartianData from "../utils/cleanMartianData";
import MartianModalContent from "./MartianModalContent";


const MartianList = () => {
  const [martianCustomers, setMartianCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({});

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
                setSelectedCustomer(index);
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
        <MartianModalContent martianCustomers={martianCustomers} currentCustomer={selectedCustomer} />
      </Modal>
    </>
  );
};

export default MartianList;
