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
  color: #e0e1dd;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const HomeComponent = () => {
  const [transactions, updateTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  // Load transactions from local storage on mount
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) {
      updateTransactions(savedTransactions);
      calcBalance(savedTransactions); // Calculate balance for loaded transactions
    }
  }, []);

  // Save transactions to local storage and update balance when transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    calcBalance(transactions);
  }, [transactions]);

  const addTransaction = (payload) => {
    const updatedTransactions = [...transactions, payload];
    updateTransactions(updatedTransactions);
  };

  const calcBalance = (transactionList) => {
    let exp = 0;
    let inc = 0;
    transactionList.forEach((payload) => {
      payload.type === "EXPENSE"
        ? (exp += payload.amount)
        : (inc += payload.amount);
    });
    setExpense(exp);
    setIncome(inc);
  };

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
