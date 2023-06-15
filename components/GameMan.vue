<template>
  <div class="c-gameMan">
    <div class="c-gameMan_head" :class="{ 'u-hidden': !showHead }"></div>
    <div class="c-gameMan_torso" :class="{ 'u-hidden': !showTorso }"></div>
    <div class="c-gameMan_arm left" :class="{ 'u-hidden': !showLeftArm }"></div>
    <div class="c-gameMan_arm right" :class="{ 'u-hidden': !showRightArm }"></div>
    <div class="c-gameMan_leg left" :class="{ 'u-hidden': !showLeftLeg }"></div>
    <div class="c-gameMan_leg right" :class="{ 'u-hidden': !showRightLeg }"></div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator';

@Component
export default class GameMan extends Vue {
  @Getter('getCurrentScore')
  public currentScore!: number;

  get showHead () {
    return this.currentScore >= 1;
  }

  get showTorso () {
    return this.currentScore >= 2;
  }
  
  get showLeftArm () {
    return this.currentScore >= 3;
  }
  
  get showRightArm () {
    return this.currentScore >= 4;
  }
  
  get showLeftLeg () {
    return this.currentScore >= 5;
  }
  
  get showRightLeg () {
    return this.currentScore >= 6;
  }
}
</script>

<style lang="scss">
.c-gameMan {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  // line it up with the top of the stand
  top: 59px;
  left: -73%;

  &_torso, &_arm, &_leg {
    background-color: darkgreen;
  }

  &_head {
    width: 40px;
    height: 40px;
    border: 8px solid darkgreen;
    border-radius: 100%;
  }

  &_torso {
    width: 10px;
    height: 64px;
  }

  &_arm {
    width: 10px;
    height: 48px;
    position: absolute;
    top: 40%;

    &.left {
      transform: rotate(-55deg);
      left: 0;
    }

    &.right {
      transform: rotate(55deg);
      right: 0;
    }
  }

  &_leg {
    width: 10px;
    height: 48px;
    position: absolute;
    top: 90%;

    &.left {
      transform: rotate(225deg);
      left: 0;
    }

    &.right {
      transform: rotate(135deg);
      right: 0;
    }
  }
}
</style>
