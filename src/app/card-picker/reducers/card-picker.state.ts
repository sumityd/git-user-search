export interface CardPicker {
  cardData: null | undefined | Card[];
  error: null | undefined | string;
  message: null | undefined | string;
}

export const intialCardPickerState: CardPicker = {
  cardData: [],
  error: "",
  message: "",
};

export interface Card {
  Value: null | undefined | number;
  Suit: null | undefined | string;
}

export const intialCardState: Card = {
  Value: null,
  Suit: null,
};
