import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Harry Potter Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('submitou :)');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(event) => setName(event.target.value)}
                placeholder="Diz aí o seu nome para jogar :)"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {name === "" ? "Jogar" : `Olá, ${name}! Bora jogar?`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Veja também esses quizes feitos durante a Imersão React:</p>

            <ul>
            {db.external.map((linkExterno) => {
              const [projectName, githubUser] = linkExterno.replace("https://", '').replace(".vercel.app/", "").split('.')
              return (
              <li key={linkExterno}>
                <Widget.Topic 
                  as={Link}
                  href={`/quiz/${projectName}___${githubUser}`}
                >
                  {githubUser}/{projectName}
                </Widget.Topic>
              </li>
            )})}
            </ul>

          </Widget.Content>
        </Widget>
        <Footer 
          as={motion.footer}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"        
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/GraziM" />
    </QuizBackground>
  );
}
