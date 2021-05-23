import React, { useEffect, useState } from "react";
import martianCustomersData from "./martianCustomers";
import cleanMartianData from "../utils/cleanMartianData";

const MartianList = () => {

  const [martianCustomers, setMartianCustomers] = useState([]);

  useEffect(() => {
    let cleanCustomerData = cleanMartianData(martianCustomersData);
    setMartianCustomers(cleanCustomerData);
  }, [])
  
  return(
    <> 
      <ul>
      {martianCustomers.map((customer, index) => {
        return(
          <li key={index}>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
          </li>
        )
      })}

      </ul>
    </>
  )
}


export default MartianList;