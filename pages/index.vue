<template>
  <div class="c-pageGame">
    <div class="c-pageGame_title">
      <h1>{{ title }}</h1>
    </div>
    <div class="c-pageGame_container">
      <GameGuess />
      <GameStand />
    </div>
    <GameWord ref="gameWordComponent" :word="gameWord" @incorrect-guess="handleIncorrectGuess" @game-won="handleGameWon" />
    <GameModal :show="showModal" @keep-playing="resetGame" />
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue} from 'nuxt-property-decorator';

import GameGuess from '~/components/GameGuess.vue';
import GameModal from '~/components/GameModal.vue';
import GameStand from '~/components/GameStand.vue';
import GameWord from '~/components/GameWord.vue';
import { wordsShort } from '~/constants/words-short.js';

@Component({
  components: {
    GameGuess,
    GameModal,
    GameStand,
    GameWord
  }
})
export default class PageGame extends Vue {
  public gameWord: string = '';
  public wrongLetter: boolean = false;
  public showModal: boolean = false;

  $refs!: {
    gameWordComponent: GameWord
  }

  @Getter('getCurrentScore')
  public currentScore!: number;

  get title () {
    return 'Welcome to Hangman!';
  }

  get incorrectMessage () {
    return 'WRONG!';
  }

  getRandomIndex (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  chooseWord () {
    const i = this.getRandomIndex(0, wordsShort.length);
    this.gameWord = wordsShort[i];
    if (!this.gameWord) {
      debugger;
    }
    this.$store.dispatch('setGameWord', this.gameWord);
  }

  handleGameEnded () {
    this.$store.dispatch('incrementGamesPlayed');
    this.showModal = true;
    this.$refs?.gameWordComponent?.$refs?.guessInput?.blur();
  }

  handleGameWon () {
    this.$store.dispatch('incrementGamesWon');
    this.handleGameEnded();
  }

  handleIncorrectGuess () {
    this.$store.dispatch('incrementCurrentScore');
    if (this.currentScore >= 6) {
      // game was lost
      this.handleGameEnded();
    }
  }

  resetGame () {
    this.showModal = false;
    this.$store.dispatch('resetCurrentScore');
    this.$store.dispatch('clearGuessedLetters');
    this.$store.dispatch('resetSolution');
    this.$refs?.gameWordComponent?.$refs?.guessInput?.focus();
    this.chooseWord();
  }

  // mounted hook instead of created so it doesn't run twice (server and client side)
  mounted () {
    this.chooseWord();
  }
}
</script>

<style lang="scss">
body, h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

body {
  background-color: beige;
  font-family: system-ui;
}

.u-hidden {
  display: none;
}

.c-pageGame {
  display: flex;
  flex-direction: column;
  grid-gap: 48px;

  &_title {
    min-height: 75px;
    background-color: darkgreen;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
  }

  &_container {
    display: flex;
    grid-gap: 24px;
    justify-content: space-around;
  }

  &_incorrect {
    position: absolute;
    top: 50%;
    left: 50%;
    color: red;
    font-size: 128px;
    font-weight: bold;
    transform: translate(-50%, -50%);

    &.grow {
      animation: growth 1s;
    }
  }

  @keyframes growth {
    0% {
      font-size: 0;
    }

    100% {
      font-size: 128px;
    }
  }
}
</style>
