import React from "react";
import { useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Card style={{
          padding: 20,
          width: 400
        }}>
          <Typography variant="h4">Welcome to the counter game!</Typography>
          <Buttons />
        </Card>
      </div>
    </RecoilRoot>
  );
}

function Buttons() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Increase />
      <CountComponent />
      <Decrease />
    </div>
  );
}

function Increase() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </Button>
    </div>
  );
}

function Decrease() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </Button>
    </div>
  );
}

function CountComponent() {
  const count = useRecoilValue(countState);
  return <Typography variant="h5">
    {count}
  </Typography>
}

const countState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default App;
