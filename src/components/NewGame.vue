<template>
<div class="frame" id="test">
  <h2>New Game Wizard</h2>
  <section>
    <div class="input-group" v-for="player of players" v-bind:key="player.name">
      <label>Player name:</label>
      <input class="player-name" type="text" v-on:change="playerName" v-model="player.name">
      <button v-on:click="deletePlayer(player.name)">x</button>
    </div>
  </section>

  <section>
    <button v-on:click="addPlayer">+ Create player</button>
  </section>

  <!-- <section hidden id="save-and-generate">
    <button v-on:click="saveAndGenerate">Save and Generate Game</button>
  </section> -->
</div>
</template>

<script>
import api from '@/api'

export default {
  name: 'new-game',
  data() {
    return {
      players: [],
    }
  },
  async mounted() {
    this.syncPlayerList();
  },
  methods: {
    async syncPlayerList() {
      this.players = await api.getPlayers();
    },
    addPlayer() {
      this.players.push({});
    },
    async deletePlayer(id) {
      await api.deletePlayer(id);
      await this.syncPlayerList();
    },
    playerName(evt) {
      let players = Array.from(document.querySelectorAll('input.player-name'));
      let allFilledIn = players.every((el) => el.value.length > 0);
      if (allFilledIn) {
        document.getElementById('save-and-generate').hidden = false;
      }
    },
    saveAndGenerate(evt) {
      let players = Array.from(document.querySelectorAll('input.player-name'));
      for (const player of players) {
        let name = player.value;
        let playerData = {
          name, 
          // personCard: '',
          // placeCard: '',
          // toolCard: '',
        };
        this.players.push(playerData);
        api.createPlayer(playerData);
      }
    },
  }
}
</script>

<style>
section {
  margin: 1rem auto;
}
</style>