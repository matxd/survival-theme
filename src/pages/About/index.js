import Banner from '../../components/Banner';
import Details from '../../components/Details';

import img from '../../assets/background-02.png';
import imgTwo from '../../assets/background-03.jpg';
import imgThree from '../../assets/background-04.jpg';

import { useState } from 'react';

const Sobre = () => {
  const descriptions = { one: 'Não há marcadores de mapa, missões diárias ou placares para ajudar a criar a sua história. Há apenas a Chernorússia: 230 km² de um país pós-soviético afetado por um vírus desconhecido que transformou a maior parte de sua população em infectados furiosos. Lembre-se que a morte é permanente na cruel Chernorússia. Tudo que você tem ao reiniciar novamente são as memórias de seu último erro.',
  two: 'Não adianta só se preocupar com os infectados, há também a vida selvagem e os elementos da natureza. Evite matilhas de lobos e ursos coléricos, encontre abrigo para se proteger da chuva castigante e busque uma luz em meio à escuridão da noite. Você também vai ter que dominar mecânicas de sobrevivência complexas em relação a fome, sede, temperatura corporal e muito mais.', 
  three: 'Sempre deixe seu equipamento pronto. Remende roupas danificadas, crie itens improvisados e desbrave cidades quase fantasmagóricas em busca de recursos valiosos. Conserte um carro e o esconda em sua base secreta sob a proteção de armadilhas bem posicionadas. Adentre zonas contaminadas, se tiver coragem, e fique de olhos atentos em busca de espólios preciosos.' };

  const [text, setText] = useState('Seja bem vindo(a) ao Survival Theme');
  const changeText = () => { if(text) setText('Você está na página Sobre') }

  setTimeout(() => {
    changeText()
  }, 2000)

  return (
    <>
      <main>
        <h1>{text}</h1>
        <Banner title='Esta é a sua história' image={img} description={descriptions.one} />
        <Details title='Sobrevivendo à Chernorússia' image={imgTwo} description={descriptions.two} />
        <Details title='Acumule espólios' image={imgThree} description={descriptions.three} changeClass={true} />
      </main>
    </>
  )
};

export default Sobre;