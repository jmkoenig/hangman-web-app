<template>
  <div class="c-gameModal" :class="{ 'u-hidden': !show }">
    <div class="c-gameModal_overlay"></div>
    <div class="c-gameModal_modal">
      <h3>Keep playing?</h3>
      <div>
        <span>Word was: {{ gameWord.toUpperCase() }}</span>
        <span>Games played: {{ gamesPlayed }}</span>
        <span>Games won: {{ gamesWon }}</span>
      </div>
      <button name="keepPlaying" type="button" @click="keepPlaying" @keyup.enter="keepPlaying">Yes</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class GameModal extends Vue {
  @Prop({ default: false, type: Boolean })
  public show!: boolean;

  @Getter('getGamesPlayed')
  gamesPlayed!: number;

  @Getter('getGamesWon')
  gamesWon!: number;

  @Getter('getGameWord')
  gameWord!: string;

  keepPlaying () {
    this.$emit('keep-playing');
  }
}
</script>

<style lang="scss">
.c-gameModal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &_overlay {
    position: relative;
    background-color: black;
    opacity: 50%;
    width: 100%;
    height: 100%;
  }

  &_modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 300px;
    background-color: darkgreen;
    box-shadow: 5px 5px 10px 1px black;
    color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 16px 0;

    span {
      display: block;
    }
  }
}
</style>
