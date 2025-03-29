import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
  font-family: "Sora", sans-serif;
  font-size: 18px;
  width: 100%;
  max-width: 400px;
  gap: 10px;
  font-weight: 600;

  & input {
    padding: 11px;
    border: 1px solid #ccc;
    border-radius: 15px;
    font-size: 18px;
    // width: 100%;
    // max-width: 400px;
    margin-top: 10px;

    transition: border 0.2s ease-in-out;
    background-color: #e6e8e9;
    outline: none;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
      font-style: italic;

      opacity: 0.7;
    }
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  width: 100%;
  max-width: 400px;
  margin-top: 25px;

  font-size: 18px;
  border: 1px solid white;
  border-radius: 4px;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-left: 4px solid ${(props) => (props.isExpense ? "red" : " green")};
`;

const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
      <span>₹{props.payload.amount}</span>
      <span>{props.payload.desc}</span>
    </Cell>
  );
};

const ActivityComp = (props) => {
  return (
    <Container>
      Activity
      <input placeholder="Search" />
      {props.transactions?.length
        ? props.transactions.map((payload) => (
            <TransactionCell payload={payload} />
          ))
        : ""}
    </Container>
  );
};

export default ActivityComp;
