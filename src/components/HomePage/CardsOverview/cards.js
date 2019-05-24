const clubs = require.context("../../../assets/cards/clubs", false);
const diamonds = require.context("../../../assets/cards/diamonds", false);
const hearts = require.context("../../../assets/cards/hearts", false);
const spades = require.context("../../../assets/cards/spades", false);
const court = require.context("../../../assets/cards/court", false);

function importAll(cards) {
  let images = [];
  cards.keys().map((item, index) => {
    images.push(cards(item));
  });
  return images;
}

export const cards_clubs = importAll(clubs);
export const cards_diamonds = importAll(diamonds);
export const cards_hearts = importAll(hearts);
export const cards_spades = importAll(spades);
export const cards_court = importAll(court);
