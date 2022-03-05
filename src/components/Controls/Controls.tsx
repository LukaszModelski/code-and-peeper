import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateType, cardType, personAtrType, starshipAtrType } from '../../js/store/reducer';
import { setCardType, setPersonAttribute, setStarshipAttribute, setPlayerCardId, setCard } from '../../js/store/actions';
import { config } from '../../js/config';
import { fetchPersonById, fetchStarshipById } from '../../js/api';
import { randFrom0ToX } from '../../js/utils';

export const Controls = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: stateType) => state.cards);
  const cardType = useSelector((state: stateType) => state.cardType);
  const personAtr = useSelector((state: stateType) => state.personAtr);
  const starshipAtr = useSelector((state: stateType) => state.starshipAtr);

  const handleCardTypeChange = (cardType: cardType): void => {
    dispatch(setCardType(cardType));
  };

  const handleAttributeChange = (attribute: personAtrType & starshipAtrType): void => {
    if (cardType === config.cardType.people) {
      dispatch(setPersonAttribute(attribute));
    }
    if (cardType === config.cardType.starships) {
      dispatch(setStarshipAttribute(attribute));
    }
  };

  const drawRandomCard = () => {
    const idRange = cardType === config.cardType.people ? config.apiPplCount : config.apiStarshipCount;
    return randFrom0ToX(idRange);
  };

  const handlePlayButton = async () => {
    // there are some missing enpoints (404) for starships. So I decided to try redraw new card up to 100 times.
    let retries = 100;
    let times = 2;
    while (times > 0 && retries > 0) {
      const cardId = drawRandomCard();
      if (!cards[cardType][cardId]) {
        const fetchCard = cardType === config.cardType.people ? fetchPersonById : fetchStarshipById;
        try {
          const card = await fetchCard(cardId);
          dispatch(setCard(card, cardId, cardType));
          dispatch(setPlayerCardId(times, cardId));
        } catch (e) {
          console.error(e);
          retries--;
          continue;
        }
      } else {
        dispatch(setPlayerCardId(times, cardId));
      }
      times--;
    }
  };

  const renderAtrButtons = () =>
    config.attributes[cardType].map((atr: personAtrType & starshipAtrType) => (
      <button
        key={`${cardType}-${atr}`}
        onClick={() => {
          handleAttributeChange(atr);
        }}
        className={`controls__button${atr === personAtr || atr === starshipAtr ? ' controls__button--active' : ''}`}
      >
        {atr}
      </button>
    ));

  return (
    <div className='controls'>
      <p>Play with:</p>
      <button
        className={`controls__button${cardType === config.cardType.people ? ' controls__button--active' : ''}`}
        onClick={() => {
          handleCardTypeChange(config.cardType.people);
        }}
      >
        People
      </button>
      <button
        className={`controls__button${cardType === config.cardType.starships ? ' controls__button--active' : ''}`}
        onClick={() => {
          handleCardTypeChange(config.cardType.starships);
        }}
      >
        Vehicles
      </button>
      <p>Compare:</p>
      {renderAtrButtons()}
      <hr />
      <button onClick={handlePlayButton} className='controls__button'>
        Play
      </button>
    </div>
  );
};
