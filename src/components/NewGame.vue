<template>
<div class="frame" id="test">
  <h2>New Game Wizard</h2>
  <section>
    <label for="num-players">Number of players:</label>
    <input type="number" name="num-players" id="num-players" v-on:change="updateNumPlayers" v-bind:value="numPlayers">
  </section>

  <section>
    <div class="input-group" v-for="item of Array(numPlayers).keys()" v-bind:key="item">
      <label v-bind:for="'player-name-' + (item+1)">Player {{ item + 1 }} name:</label>
      <input class="player-name" type="text" v-bind:id="'player-name-' + (item+1)" v-on:change="playerName">
    </div>
  </section>

  <section hidden id="save-and-generate">
    <button v-on:click="saveAndGenerate">Save and Generate Game</button>
  </section>
</div>
</template>

<script>
export default {
  name: 'new-game',
  data() {
    return {
      numPlayers: 0,
      players: [],
    }
  },
  methods: {
    updateNumPlayers(evt) {
      this.numPlayers = +evt.target.value;
    },
    playerName(evt) {
      let players = Array.from(document.querySelectorAll('input.player-name'));
      let allFilledIn = players.every((el) => el.value.length > 0);
      if (allFilledIn) {
        document.getElementById('save-and-generate').hidden = false;
      }
    },
    saveAndGenerate(evt) {
      console.log('Saving');
      console.log(this.$store.state.count);
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    }
  }
}
</script>

<style>
section {
  margin: 1rem auto;
}
</style>