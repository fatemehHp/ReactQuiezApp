import React, { createContext, useEffect, useReducer } from "react";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import "./app.css";
import Loading from "./component/Loading/Loading";
import Errore from "./component/Errore/Errore";
import StartScreen from "./component/StartScreen/StartScreen";
import Question from "./component/Question/Question";
import Progress from "./component/Progress/Progress";
const initialState = {
  question: [],
  status: "loading",
  indexActiveQuestion: 14,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "ready" };
    case "dataFeild":
      return { ...state, question: action.payload, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "nextQuestion":
      return {
        ...state,
        indexActiveQuestion: state.indexActiveQuestion + 1,
        answer: null,
      };
    case "selectItem":
      const isCorrect = state.question[state.indexActiveQuestion].correctOption;
      return {
        ...state,
        answer: action.payload,
        points:
          isCorrect === action.payload
            ? state.points + state.question[state.indexActiveQuestion].points
            : state.points,
      };
    default:
      return;
  }
}
export const StateContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { question, status, indexActiveQuestion, answer,points } = state;
  const totalQuestion = question.length;
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
      <Header>
     
      </Header>
      <StateContext.Provider
        value={{
          question,
          status,
          dispatch,
          totalQuestion,
          indexActiveQuestion,
          answer,
          points
        }}
      >
        <Main>
   <Progress />

          {status === "loading" && <Loading />}
          {status === "error" && <Errore />}
          {status === "ready" && <StartScreen />}
          {status === "active" && <Question />}
        </Main>
      </StateContext.Provider>
    </>
  );
};

export default App;
