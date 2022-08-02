import { useState } from 'react';
import './App.css';
import { Layout } from 'antd';

import HeaderNav from './components/Header';
import CardCounter from './components/CardCounter';
import SnapOutput from './components/SnapOutput';
import CardPlaces from './components/CardPlaces';
import ButtonOrResult from './components/ButtonOrResult';
import FooterNav from './components/Footer';

import { apiCall } from './logic/apiCall';
import { checkAndSetSnap } from './logic/checkAndSetSnap';


const App = () => {
  const [deckMetaData, setDeckMetaData] = useState({
    deck_id: "new",
    remaining: 52
  })
  const [cards, setCards] = useState([])
  const [valueMatches, setValueMatches] = useState(0)
  const [suitMatches, setSuitMatches] = useState(0)
  const [snap, setSnap] = useState({
    snap: false,
    type: ""
  })


  const handleCheckAndSetSnap = (card1, card2) => {
    checkAndSetSnap(card1, card2, suitMatches, valueMatches, setSuitMatches, setValueMatches, setSnap)
  }

  const drawCard = () => {
    apiCall(deckMetaData, cards, setCards, setDeckMetaData, handleCheckAndSetSnap)
  }

  return (
    <Layout style={{background: "url('https://images.pexels.com/photos/2508565/pexels-photo-2508565.jpeg?cs=srgb&dl=pexels-dids-2508565.jpg&fm=jpg')", backgroundSize: "cover", backgroundPosition: 2}}>
      <HeaderNav />
      <CardCounter deckMetaData={deckMetaData}/>
      <SnapOutput snap={snap} />
      <CardPlaces snap={snap} cards={cards}/>
      <ButtonOrResult deckMetaData={deckMetaData} drawCard={drawCard} valueMatches={valueMatches} suitMatches={suitMatches}/>
      <FooterNav />
    </Layout>
  );
}

export default App;
