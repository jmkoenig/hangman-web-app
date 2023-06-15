<template>
  <div class="c-stand">
    <GameMan />
    <div class="c-stand_top"></div>
    <div class="c-stand_pole"></div>
    <div class="c-stand_base"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import GameMan from '~/components/GameMan.vue';

@Component({
  components: {
    GameMan
  }
})
export default class GameStand extends Vue {}
</script>

<style lang="scss">
.c-stand {
  display: flex;
  flex-direction: column;
  position: relative;

  &_hook, &_pole, &_base {
    background-color: saddlebrown;
  }

  &_hook {
    width: 12px;
    height: 48px;
  }

  &_top {
    width: 150px;
    height: 48px;
    border-left: 12px solid saddlebrown;
    border-top: 12px solid saddlebrown;
    position: absolute;
    right: 50%;
  }

  &_pole {
    width: 12px;
    height: 300px;
    align-self: center;
  }

  &_base {
    width: 150px;
    height: 12px;
  }
}
</style>
