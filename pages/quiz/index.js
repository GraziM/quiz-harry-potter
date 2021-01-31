import React from 'react';
import db from '../../db.json';

import QuizScreen from '../../src/screens/Quiz'


export default function QuizIndex({name}){
  return(
    <QuizScreen 
      externalQuestions={db.questions}
      externalBg={db.bg}
      widgetStyle={{ border: "1px solid #FFFFFF" }}
      name={name}
    />
  )
}

export async function getServerSideProps(context){
  const name = context.query.name;

  return {
    props: {
     name
    },
      
  };
}