import React, { useEffect, useState } from "react";
import martianCustomersData from "./martianCustomers";

const MartianList = () => {

  const [martianCustomers, setMartianCustomers] = useState([]);
  console.log(martianCustomers);

  useEffect(() => {
    setMartianCustomers(martianCustomersData);
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