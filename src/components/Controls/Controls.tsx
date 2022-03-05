import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateType, cardType, personAtrType, starshipAtrType } from '../../js/store/reducer';
import { setCardType, setPersonAttribute, setStarshipAttribute } from '../../js/store/actions';
import { config } from '../../js/config';

export const Controls = () => {
  const dispatch = useDispatch();

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
      <button className='controls__button'>Play</button>
    </div>
  );
};
