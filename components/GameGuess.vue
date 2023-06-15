<template>
  <div class="c-gameGuesses">
    <h5>Guesses:</h5>
    <ul>
      <li v-for="letter in guessedLetters" :key="letter">{{  letter.toUpperCase() }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator';

@Component
export default class GameGuess extends Vue {
  @Getter('getGuessedLetters')
  guessedLetters!: string[]
}
</script>

<style lang="scss">
.c-gameGuesses {
  h5 {
    font-size: 24px;
  }

  ul {
    max-height: 250px;
    display: flex;
    flex-flow: column wrap;
    grid-gap: 0 48px;
  }

  li {
    font-size: 24px;
  }
}
</style>
