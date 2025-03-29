import styled from "styled-components";
import SummaryComp from "./SummaryComp";
import ActivityComp from "./ActivityComp";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Sora", sans-serif;
`;

const HomeComponent = () => {
  const [transactions, updateTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionA = [...transactions, payload];
    updateTransactions(transactionA);
  };

  const calcBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });
    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => calcBalance(), [transactions]);

  return (
    <Container>
      <SummaryComp
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <ActivityComp transactions={transactions} />
    </Container>
  );
};
export default HomeComponent;
