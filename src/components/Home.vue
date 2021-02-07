<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/corona.png')"
          class="my-3"
          contain
          height="160"
        />
      </v-col>

      <v-col class="mb-4">
        <h2 class="display-1 font-weight-bold mb-3">CoronaTalks</h2>
        <p class="subheading font-weight-regular">Cari tahu seberapa banyak yang Anda ketahui tentang COVID-19, bagikan skor dengan teman, dan Stay Safe</p>
        <router-link to="/question/1">
          <v-btn x-large rounded color="success">Start game</v-btn>
        </router-link>
      </v-col>

    </v-row>
    <span class="credentials">Powered by <a href="https://growise.pro" target="_blank">Growise</a></span>
  </v-container>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>
