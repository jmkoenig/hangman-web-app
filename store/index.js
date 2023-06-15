export const state = () => ({
  currentScore: 0,
  gamesPlayed: 0,
  gamesWon: 0,
  gameWord: '',
  guessedLetters: [],
  solution: '?????'
});

export const getters = {
  getCurrentScore (state) {
    return state.currentScore;
  },

  getGamesPlayed (state) {
    return state.gamesPlayed;
  },

  getGamesWon (state) {
    return state.gamesWon;
  },

  getGameWord (state) {
    return state.gameWord;
  },

  getGuessedLetters (state) {
    return state.guessedLetters;
  },

  getSolution (state) {
    return state.solution;
  }
};

export const mutations = {
  addToGuessedLetters (state, letter) {
    state.guessedLetters.push(letter);
  },

  clearGuessedLetters (state) {
    state.guessedLetters = [];
  },

  incrementCurrentScore (state) {
    state.currentScore++;
  },

  incrementGamesPlayed (state) {
    state.gamesPlayed++;
  },

  incrementGamesWon (state) {
    state.gamesWon++;
  },

  resetCurrentScore (state) {
    state.currentScore = 0;
  },

  resetGameWord (state) {
    state.gameWord = '';
  },
  
  resetSolution (state) {
    state.solution = '?????';
  },

  setGameWord (state, word) {
    state.gameWord = word;
  },

  setSolution (state, word) {
    state.solution = word;
  }
};

export const actions = {
  addToGuessedLetters (context, letter) {
    context.commit('addToGuessedLetters', letter);
  },

  clearGuessedLetters (context) {
    context.commit('clearGuessedLetters');
  },

  incrementCurrentScore (context) {
    context.commit('incrementCurrentScore');
  },

  incrementGamesPlayed (context) {
    context.commit('incrementGamesPlayed');
  },

  incrementGamesWon (context) {
    context.commit('incrementGamesWon');
  },

  resetCurrentScore (context) {
    context.commit('resetCurrentScore');
  },

  resetGameWord (context) {
    context.commit('resetGameWord');
  },

  resetSolution (context) {
    context.commit('resetSolution');
  },

  setGameWord (context, word) {
    context.commit('setGameWord', word);
  },

  setSolution (context, word) {
    context.commit('setSolution', word);
  }
}
