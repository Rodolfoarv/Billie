import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

import martianCustomersData from "./martianCustomersData";
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
    <div>
      <Grid container spacing={3} className="grid" >
        {martianCustomers.map((customer, index) => {
          return (
            <Grid item xs={4}  key={index}>
              <Card className='martianCard'>
                <CardActionArea>
                  <CardMedia
                    className='martianMedia'
                    image={customer.image}
                    title={customer.name}
                  />
                  <CardContent >
                    <Typography gutterBottom variant='h5' component='h2'>
                      {customer.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Date of first purchase: {customer.date_of_first_purchase}
                    </Typography>

                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Total budget: {customer.budget}
                    </Typography>

                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Budget spent: {customer.budget_spent}
                    </Typography>

                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Budget left: {customer.budget - customer.budget_spent}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size='large'
                    color='primary'
                    variant='contained'
                    className='editBudgetButton'
                    fullWidth='true'
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedCustomer(index);
                    }}>
                    Edit Budget
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        <MartianModalContent
          martianCustomers={martianCustomers}
          currentCustomer={selectedCustomer}
        />
      </Modal>
    </div>
  );
};

export default MartianList;
