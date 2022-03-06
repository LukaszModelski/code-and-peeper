import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateType, cardType, personAtrType, starshipAtrType } from '../../js/store/reducer';
import {
  setCardType,
  setAttribute,
  setPlayerCardId,
  setCard,
  clearPlayersCardId,
  increasePlayerScore,
  setWinner,
  clearWinner,
} from '../../js/store/actions';
import { config } from '../../js/config';
import { fetchPersonById, fetchStarshipById } from '../../js/api';
import { randFrom0ToX } from '../../js/utils';

export const Controls = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: stateType) => state.cards);
  const cardType = useSelector((state: stateType) => state.cardType);
  const attribute = useSelector((state: stateType) => state.attribute);
  const personAtr = useSelector((state: stateType) => state.attribute.people);
  const starshipAtr = useSelector((state: stateType) => state.attribute.starships);
  const player1cardId = useSelector((state: stateType) => state.player1.cardId);
  const player2cardId = useSelector((state: stateType) => state.player2.cardId);

  const handleCardTypeChange = (cardType: cardType): void => {
    dispatch(clearWinner());
    dispatch(clearPlayersCardId());
    dispatch(setCardType(cardType));
  };

  const handleAttributeChange = (attribute: personAtrType & starshipAtrType): void => {
    dispatch(setAttribute(attribute, cardType));
  };

  const drawRandomCard = () => {
    const idRange = cardType === config.cardType.people ? config.apiPplCount : config.apiStarshipCount;
    return randFrom0ToX(idRange);
  };

  const compareAttributes = () => {
    const attrToCompare = attribute[cardType];
    const player1Atr = parseFloat(cards[cardType][player1cardId][attrToCompare]);
    const player2Atr = parseFloat(cards[cardType][player2cardId][attrToCompare]);

    if (isNaN(player1Atr) || isNaN(player1Atr) || player1Atr === player2Atr) {
      return;
    }

    if (player1Atr > player2Atr) {
      dispatch(increasePlayerScore('player1'));
      dispatch(setWinner(1));
    } else {
      dispatch(increasePlayerScore('player2'));
      dispatch(setWinner(2));
    }
  };

  const handlePlayButton = async () => {
    dispatch(clearWinner());
    dispatch(clearPlayersCardId());
    let retries = 100; // there are some missing enpoints (404) for starships. So I decided to try redraw new card up to 100 times.
    let times = 2;
    while (times > 0 && retries > 0) {
      const cardId = drawRandomCard();
      if (!cards[cardType][cardId]) {
        const fetchCard = cardType === config.cardType.people ? fetchPersonById : fetchStarshipById;
        try {
          const data: any = await fetchCard(cardId);
          const card = data.data;
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

  useEffect(() => {
    if (player1cardId && player2cardId) {
      compareAttributes();
    }
  }, [player1cardId, player2cardId]);

  return (
    <div className='controls'>
      <div className="controls__block">
        <button onClick={handlePlayButton} className='controls__play-button'>
          Play
        </button>
      </div>
      <div className="controls__block">
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
      </div>
      <div className="controls__block">
        <p>Compare:</p>
        {renderAtrButtons()}
      </div>
    </div>
  );
};
