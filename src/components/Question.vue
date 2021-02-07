<template>
  <div class="question__container">
    <h3 class="text-center question-title">Question {{this.$route.params.id}}</h3>
    <p class="text-center mt-3 question">{{ getQuestion[routeParams].question }}</p>
    <v-card
    class="mx-auto"
    shaped
    elevation="11"
    max-width="350"
    height="400">
    <img :src="`${getQuestion[routeParams].image}`" width=350px height=220px>
    <v-card-title>
      Pilih jawaban yang menurut anda benar!
    </v-card-title>
    <div class="button__container">
      <v-btn class="submit-button" @click="submitQuestion(routeParams, true);" rounded x-large color="green white--text">Benar</v-btn>
      <v-btn class="submit-button" @click="submitQuestion(routeParams, false);" rounded x-large color="red white--text">Salah</v-btn>
    </div>
    </v-card>
    <a :href="`${getQuestion[routeParams].source}`" target="_blank">
      <v-btn text class="mt-5 caption">Lihat Sumber <v-icon >mdi-open-in-new</v-icon></v-btn>
    </a>
    <img src="@/assets/tick.png" class="icon tick" alt="tick" />
    <img src="@/assets/cross.png" class="icon cross" alt="cross" />
    <router-link to="/">
          <v-btn x-large rounded color="primary">Back to Home</v-btn>
        </router-link>
  </div>
</template>

<script>
import router from '@/router';

export default {
  data() {
    return {
      questionId: this.$route.params.id
    }
  },
  computed: {
    getQuestion() {
      return this.$store.getters.getQuestion
    },
    routeParams() {
      return parseInt(this.$route.params.id) - 1;
    },
    nextQuestion() {     
      let questionAmmount = this.$store.getters.getQuestion.length;
      let nextQuestionId = parseInt(this.$route.params.id) + 1;

      if (nextQuestionId > questionAmmount) {
        return '/game/score';
      } else {
        return `/game/question/${nextQuestionId}`;
      }
    }
  },
  methods: {
    submitQuestion (id, answer) {

      // Store the given answer in Vuex
      this.$store.commit('STORE_QUESTION_ANSWER', {id, answer}) // passing id of the next question

      // Declare variables
      let questionAmount = this.$store.getters.getQuestion.length;
      let goodAnswer = this.$store.getters.getQuestion[id].answer;
      let givenAnswer = this.$store.getters.getQuestion[id].givenAnswer;
      let submitButtons = document.querySelectorAll('.submit-button')
      let nextQuestion = id + 2;

       // Disabling buttons for 600ms to allow all animations to happen
      submitButtons.forEach(button => {
        button.disabled = true;
      });

      setTimeout(() => {
        submitButtons.forEach(button => {
          button.disabled = false;
        });
      }, 600)

      // Give visual feedback based on the given answer
      if (goodAnswer == givenAnswer) {
        document.querySelector('.tick').classList.add('animate')
        setTimeout(() => {
          document.querySelector('.tick').classList.remove('animate')
        }, 600)
      } else {
        document.querySelector('.cross').classList.add('animate')
        setTimeout(() => {
          document.querySelector('.cross').classList.remove('animate')
        }, 600)
      }
    
      // Go to next question, or to score when the game is done
      if (nextQuestion == questionAmount + 1) {
        setTimeout(function(){
          router.push('/score');
        }, 600)
      } else {
        setTimeout(function(){
          router.push(`/question/${nextQuestion}`)
        }, 600)
      }

      // Enable next question, or stop enabling when last question is done
      if (this.$route.params.id == questionAmount) {
        return false;
      }
      this.$store.commit('ENABLE_QUESTION', id + 1)

    }
  }
}
</script>

<style lang="scss">
.question__container {
  position: relative;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i {
    top: -1;
    margin-left: 0.5rem;
  }
}
.question {
  font-size: 1.5rem;
}
.back-button {
  position: absolute;
  top: 15px;
  left: 15px;
}
.button__container {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.question-title {
  text-transform: uppercase;
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90vw;
  height: auto;
  transform: translateX(-50%) translateY(-50%) scale(0);
  pointer-events: none;
}
.animate {
  animation: 0.6s forwards scale-up;
}
@keyframes scale-up {
  from {
    transform: translateX(-50%) translateY(-50%) scale(0);
    opacity: 1;
  }
  to {
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 0;
  }
}
</style>
