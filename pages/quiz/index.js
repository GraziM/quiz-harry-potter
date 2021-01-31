import React from 'react';
import db from '../../db.json';

import QuizScreen from '../../src/screens/Quiz'


export default function QuizIndex(){
  return(
    <QuizScreen 
      externalQuestions={db.questions}
      externalBg={db.bg}
      widgetStyle={{ border: "1px solid #FFFFFF" }}
    />
  )
}
