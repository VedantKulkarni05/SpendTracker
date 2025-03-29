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
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addTransaction = (payload) => {
    const transactionA = [...transactions, payload];
    updateTransactions(transactionA);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "EXPENSE" ? (exp += t.amount) : (inc += t.amount);
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <Container>
      <SummaryComp
        addTransaction={addTransaction}
        income={income}
        expense={expense}
      />
      <ActivityComp transactions={transactions} />
    </Container>
  );
};
export default HomeComponent;
