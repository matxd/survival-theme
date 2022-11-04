import styles from './Inicio.module.css';
import posts from '../../json/posts.json';

import Banner from '../../components/Banner';
import PostCard from '../../components/PostCard';

import img from '../../assets/background.jpg';

import { useState } from 'react';

const Inicio = () => {
  const descriptions = { one: 'Quanto você aguenta em um mundo pós-apocalíptico? Uma terra arrasada por "zumbis" infectados, onde você compete com outros sobreviventes por recursos limitados. Você vai ajudar estranhos em sua luta? Ou evitará traições como um lobo solitário? Esse é o DayZ.' };
  
  const [text, setText] = useState('Seja bem vindo(a) ao Survival Theme');
  const changeText = () => { if(text) setText('Você está na página de Início') }

  setTimeout(() => {
    changeText()
  }, 2000)

  return (
    <>
      <main>
        <h1>{text}</h1>
        <Banner title='DayZ' description={descriptions.one} image={img} />
        <ul className={styles.posts}>
          {posts.map((post) => ( <li key={post.id}><PostCard post={post} /></li> ))}
        </ul>
      </main>
    </>
  );
};

export default Inicio;