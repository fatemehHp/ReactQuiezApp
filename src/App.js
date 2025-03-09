import React, { useEffect, useReducer } from "react";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import "./app.css";
import Loading from "./component/Loading/Loading";
import Errore from "./component/Errore/Errore";
import StartScreen from "./component/StartScreen/StartScreen";
const initialState = {
  question: [],
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "ready" };
    case "dataFeild":
      return { ...state, question: action.payload, status: "error" };
    default:
      return;
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { question, status } = state;
  const totalQuestion=question.length
  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/questions");
        if (!response.ok) {
          throw new Error("not found");
        }
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFeild" });
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Errore />}
        {status === "ready" && <StartScreen totalQuestion={totalQuestion} />}
      </Main>
    </>
  );
};

export default App;
