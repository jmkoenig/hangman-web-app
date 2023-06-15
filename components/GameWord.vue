<template>
  <div class="c-gameWord">
    <div class="c-gameWord_display">
      <h4 v-for="(letter, index) of solution" :key="index">{{ letter.toUpperCase() }}</h4>      
    </div>
    <form class="c-gameWord_input" @submit.prevent="processInput">
      <input ref="guessInput" type="text" pattern="^[A-Za-z]$" required title="Any single letter" v-model="userInput" />
      <input type="submit" />
    </form>
    <span :class="{'u-hidden': !letterGuessed }">{{ letterGuessedMessage }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class GameWord extends Vue {
  public userInput: string = '';
  public letterGuessed: boolean = false;

  $refs!: {
    guessInput: HTMLInputElement
  }

  @Prop({ default: null, type: String })
  public word!: string;

  @Getter('getCurrentScore')
  public currentScore!: number;

  @Getter('getGuessedLetters')
  public guessedLetters!: Array<string>;

  @Getter('getSolution')
  public solution!: string;

  get letterGuessedMessage () {
    return 'Letter was already guessed';
  }

  checkLetter () {
    if (this.word?.includes(this.userInput)) {
        [...this.word].forEach((letter, index) => {
          if (this.userInput === letter) {
            let newSolution = this.solution.substring(0, index) + letter + this.solution.substring(index + 1);
            this.$store.dispatch('setSolution', newSolution);
          }
        });
        this.checkWord();
      } else {
        this.$emit('incorrect-guess');
      }
  }

  checkWord () {
    if (!this.solution?.includes('?')) {
      this.$emit('game-won');
    }
  }

  processInput () {
    this.userInput = this.userInput.toLowerCase();
    this.letterGuessed = false;

    if (this.guessedLetters?.includes(this.userInput)) {
      this.letterGuessed = true;
    } else {
      this.$store.dispatch('addToGuessedLetters', this.userInput);
      this.checkLetter();
    }

    this.userInput = '';
  }
}
</script>

<style lang="scss">
.c-gameWord {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 16px 0;
  
  h4 {
    display: inline;
    border-bottom: 5px solid black;
    font-size: 32px;
    width: 30px;
    text-align: center;
  }

  &_display {
    display: flex;
    justify-content: center;
    grid-gap: 16px;
  }
}
</style>
