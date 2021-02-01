import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Lottie from 'react-lottie'

import loadingAnimation from '../../lotties/loading-animation.json'
import Widget from '../../components/Widget';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import Button from '../../components/Button';
import AlternativesForm from '../../components/AlternativesForm';
import BackLinkArrow from "../../components/BackLinkArrow";

const P = styled.p`
  margin-bottom: 0px;
  padding-bottom: 0px;
`

function ResultWidget({ results, widgetStyle, name, questions }) {
  const countRightAnswers = results.filter((x) => x).length
  const success = name ? `Parabéns, ${name}! Você é um verdadeiro conhecedor da saga!` : `Parabéns! Você é um verdadeiro conhecedor da saga!`
  const failure = name ? `Que pena, ${name}! Não foi dessa vez!` : `Que pena! Não foi dessa vez!`
  
  return (
    <Widget style={ widgetStyle ? widgetStyle : {}}>
      <Widget.Header style={{ textAlign: "center" }}>
        {countRightAnswers >= 5 ? success : failure}
      </Widget.Header>

      <Widget.Content>
        <p style={{ textAlign: "center" }}>{`Você acertou ${countRightAnswers} perguntas`}</p>
        <ul>
          {questions.map((question, index) => (
            <Widget.Topic
            data-answer={results[index]} 
            key={`result__${index}`}
            as={motion.a}
            transition={{ duration: 0.1 }}
            whileHover={{ x: "-2%", y: "-2%" }}
            whileTap={ { scale: 0.95} }
            >
              {`${index+1}ª Pergunta: ${question.title}`}
            </Widget.Topic>
          ))}

        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  const defaultOptions = {
    loop: true,
      autoplay: true,
      animationData: loadingAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
  }

  return (
    <Widget style={{ backgroundColor: "transparent", padding: 0, margin: 0 }}>
      <Widget.Content>
        <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
          />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit, addResult, widgetStyle
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget style={ widgetStyle ? widgetStyle : {}}>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm onSubmit={(event) => {
          event.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 3 * 1000);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const AlternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                key={alternativeId}
                as={motion.label}
                transition={{ duration: 0.1 }}
                whileHover={{ x: "-2%", y: "-2%" }}
                whileTap={ { scale: 0.95} }
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && AlternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {` ${alternative}`}
              </Widget.Topic>
            );
          })}

          <div style={{ margin: 0, padding: 0, textAlign: "center" }}>
            {isQuestionSubmited && isCorrect && <P>Você acertou!</P>}
            {isQuestionSubmited && !isCorrect && <P>Você errou!</P>}
          </div>

          <Button type="submit" disabled={!hasAlternativeSelected || isQuestionSubmited}>
            Confirmar
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
  LOADING: 'LOADING',
};

export default function QuizPage({ externalQuestions, externalBg, widgetStyle, name }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            widgetStyle={widgetStyle}
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={currentQuestion}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget questions={externalQuestions} widgetStyle={widgetStyle} results={results} name={name}/>}
      </QuizContainer>
    </QuizBackground>
  );
}

QuizPage.defaultProps = {
  widgetStyle: false,
  name: false
}