<template>
<div class="frame">
  <h2>New Game Wizard</h2>
  <div>
    <label for="num-players">Number of players:</label>
    <input type="number" name="num-players" id="num-players" v-on:change="updateNumPlayers">
  </div>

  <div v-if="numPlayers != null">
    <div v-for="item of Array(numPlayers).keys()" v-bind:key="item">
      <label v-bind:for="'player-name-' + (item+1)">Player {{ item + 1 }} name:</label>
      <input type="text" v-bind:id="'player-name-' + (item+1)" v-on:change="playerName">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'new-game',
  data() {
    return {
      numPlayers: null,
    }
  },
  methods: {
    updateNumPlayers(evt) {
      this.numPlayers = +evt.target.value;
    },
    playerName(evt) {
      console.log(evt.target.value);
    }
  }
}
</script>

<style>

</style>