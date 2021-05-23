
const roundDecimals = (num) => {
  /*
  Function that rounds to german format
  */

  return Math.round((num + Number.EPSILON) * 100) / 100
}


const cleanMartianData = (martianCustomersData) => {
  /*
  Function in charge of cleaningMartianData

  Budgets should be displayed in the german format, with 2 decimals
  Budget should be with 2 decimals
  Budget spent should be with 2 decimals
  */

  for (let i = 0; i < martianCustomersData.length; i++) {
    const customer = martianCustomersData[i];
    customer.budget = roundDecimals(customer.budget);
    customer.budget_spent = roundDecimals(customer.budget_spent);
  }

  return martianCustomersData;

}

export default cleanMartianData;