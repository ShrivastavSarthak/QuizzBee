// import { Button } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Fillup from "./fillUp";
import "./home.css";
import Category from "./category";
import Result from "./Result"
const Home = () => {
  const [quiz, setQuiz] = useState([]);//store the quiz questions
  const [currentQuestion, setCurrentQuestion] = useState(0); //itrate the question
  const [score, setScore] = useState(0);//track the score
  const [valid, setVadilt] = useState(false)//it will check the data passed from the Fillup component
  const [isvisible, setIsVisible] = useState(false) //enable the the categories
  const [timer, setTimer] = useState(10); //setting the timer to 10 seconds
  const [startTimer, setStartTimer] = useState(false)
  const [hide, setHide] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [correstAns, setCorrestAns] = useState(0)
  const [wrongAns, setWrongAns] = useState(0)
  const [isLoading,setIsLoading]= useState(true)
  const [correctAns,isCorrectAns] = useState(false)
  
  const handleQuestions = (ques) => {
    setQuiz(ques)
    setStartTimer(true)
    setVadilt(false)
    setHide(true)
    // setIsVisible(false)
    setIsLoading(false)
  }

  useEffect(() => {
    const countDown = setInterval(() => {
      if (startTimer) {

        setTimer(prevTimer => {
          if (prevTimer <= 1) {
            setCurrentQuestion(prevTimer => prevTimer + 1);
            setTimer(10)
            // clearInterval(countDown)
          }

          return prevTimer - 1
        })
      }
    }, 1000)

    return () => clearInterval(countDown)
  }, [startTimer])

  // console.log(timer);
  // console.log(quiz);
  const handleAnsClick = (answer) => {
    const currentQuestionObj = quiz[currentQuestion];
    if (answer === currentQuestionObj.correct_answer) {
      setScore(score + 1);
      alert('Correct answer')
      setCorrestAns(correstAns+1)
    } else {
      alert("wrong answer");
      setWrongAns(wrongAns+1)
    }
    setCurrentQuestion(currentQuestion + 1);
    console.log(currentQuestion);
    setTimer(10)
    if(currentQuestion==9){
      setShowResult(true)
    }
    // setQuizCompleted(true)
  };

  const handleDataFromChile = (data) => {
    setVadilt(data)
    setIsVisible(true)
  }
  // console.log(valid);

  

  return (
    <Fragment>
      <center>
        <h1>Welcome to the QuizzBee</h1>
        <h2>Here you will test your </h2>
        <h2>Gernal knowledge</h2>
        <hr />
        <div hidden={hide}>
          <Fillup className="my-4 "
            sendDataToHome={handleDataFromChile}/>
        </div>
        <div hidden={!valid}>
          <Category className="my-4" sendQuestion={handleQuestions} />
        </div>
        
        {quiz.map((questions, index) => {
          if (index === currentQuestion) {
            return (
              <div
                hidden={!isvisible}
                className="card mx-1 my-5 p-2 mx-2 cardStyle"
                style={{ maxWidth: "40rem" }}
                key={index}
              >
                <div className="timerArea position-absolute px-3 top-0 start-0">
                  <h6>Timer: {timer} sec</h6>
                </div>
                <div className="timerArea position-absolute px-3 top-0 end-0">
                  <h6>Score: {score}</h6>
                </div>
                <h5 className="mt-4 pt">
                  Q{index + 1}. {questions.question}{" "}
                </h5>
                <div className="form-check">
                  <div className="row mx-3 my-2">
                    <div className="col">
                      <button
                        className="button px-3 m-2"
                        onClick={() => {
                          handleAnsClick(questions.incorrect_answers[0]);
                        }}
                      >
                        {questions.incorrect_answers[0]}
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="button px-3 m-2"
                        onClick={() => {
                          handleAnsClick(questions.correct_answer);
                        }}
                      >
                        {questions.correct_answer}
                      </button>
                    </div>
                  </div>
                  <div className="row mx-3 my-2">
                    <div className="col">
                      <button
                        className="button px-3 m-2"
                        onClick={() => {
                          handleAnsClick(questions.incorrect_answers[1]);
                        }}
                      >
                        {questions.incorrect_answers[1]}
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="button px-3 m-2"
                        onClick={() => {
                          handleAnsClick(questions.incorrect_answers[2]);
                        }}
                      >
                        {questions.incorrect_answers[2]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {showResult && <Result score={score} correstAns={correstAns} wrongAns={wrongAns}/>}
      </center>
    </Fragment>
  );
};

export default Home;
