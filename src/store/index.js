import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {
      isOpen: false,
      isStarted: false,
      progress: null,
      currentQuestion: 1
    },
    questions: [
      {
        id: 0,
        question: 'COVID-19 pertama kali dimulai di Korea Selatan',
        answer: false,
        image: 'https://awsimages.detik.net.id/visual/2020/04/03/c4ac2442-bc17-4785-8032-24ebf2c81421_169.jpeg?w=360&q=90',
        givenAnswer: null,
        disabled: false,
        source: 'https://www.ecdc.europa.eu/en/novel-coronavirus-china/questions-answers',
        score: null
      },
      {
        id: 1,
        question: 'Sudah ada lebih dari 1.000.000 kasus COVID-19 yang diketahui di indonesia',
        answer: true,
        image: 'https://corona.jakarta.go.id/storage/article/dinamika-data-kasus-covid-5f3391252ea98.jpeg',
        givenAnswer: null,
        disabled: false,
        source: 'https://covid19.go.id/peta-sebaran',
        score: null
      },
      {
        id: 2,
        question: 'Anda Akan terinfeksi COVID-19 jika minum bir Corona',
        answer: false,
        image : 'https://awsimages.detik.net.id/community/media/visual/2020/01/31/15a4ce44-0cd9-49bd-beab-59f040b2bac3_169.jpeg?w=700&q=90',
        givenAnswer: null,
        disabled: true,
        source: 'https://www.tribunnews.com/internasional/2020/01/30/virus-corona-tak-ada-hubungannya-dengan-bir-corona',
        score: null
      },
      {
        id: 3,
        question: 'Coronavirus dapat ditularkan oleh nyamuk',
        answer: false,
        image : 'https://asset.kompas.com/crops/ki1ZTzaJtOH5ZG7lPAqXqqV8mfQ=/0x0:1000x667/780x390/data/photo/2017/10/09/1207334794.jpg',
        givenAnswer: null,
        disabled: true,
        source: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters',
        score: null
      },
      {
        id: 4,
        question: 'Sakit kepala parah adalah salah satu gejala utama COVID-19',
        answer: false,
        image : 'https://d1bpj0tv6vfxyp.cloudfront.net/jaga-kesehatan-tubuh-ini-3-perbedaan-pusing-dan-sakit-kepala-halodoc.jpg',
        givenAnswer: null,
        disabled: true,
        source: 'https://www.ecdc.europa.eu/en/novel-coronavirus-china/questions-answers',
        score: null
      },
      {
        id: 5,
        question: 'Virus Corona dapat bertahan dari salju dan dingin serta matahari dan kelembaban',
        answer: true,
        image:'https://image.freepik.com/free-photo/corona-virus-covid-19-that-built-by-molding-clay-painted-toy-car-truck-was-running-through-snow-field-christmas-tree-natural-landscape-background_34266-1383.jpg',
        givenAnswer: null,
        disabled: true,
        source: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters',
        score: null
      },
      {
        id: 6,
        question: 'Virus corona manusia dapat tetap menular di permukaan benda mati hingga 9 hari',
        answer: true,
        image :'https://awsimages.detik.net.id/community/media/visual/2020/03/14/12ba0d27-c601-4072-828b-f0e929db6d85.jpeg?w=700&q=90',
        givenAnswer: null,
        disabled: true,
        source: 'https://www.journalofhospitalinfection.com/article/S0195-6701(20)30046-3/fulltext',
        score: null
      },
      {
        id: 7,
        question: 'Salah satu gejala COVID-19 adalah hilangnya indera penciuman dan perasa',
        answer: true,
        image :'https://d324bm9stwnv8c.cloudfront.net/artikel/20180525065951.65362838530.png',
        givenAnswer: null,
        disabled: true,
        source: 'https://www.nytimes.com/2020/03/22/health/coronavirus-symptoms-smell-taste.html',
        score: null
      },
      {
        id: 8,
        question: 'Karena wabah COVID-19, emisi karbon China turun 150 metrik ton',
        answer: true,
        image :'https://co2club.ro/www/wp-content/uploads/2019/12/20190322PHT32344-bl-1080x675.jpg',
        givenAnswer: null,
        disabled: true,
        source: 'https://www.nytimes.com/2020/02/26/climate/nyt-climate-newsletter-coronavirus.html',
        score: null  
      },
      {
        id: 9,
        question: 'Para ilmuwan telah membuat vaksin melawan COVID-19',
        answer: false,
        image : 'https://image.freepik.com/free-vector/corona-virus-covid-19-vaccine-injection-vaccine-bottle-illustration_42417-77.jpg',
        givenAnswer: null,
        disabled: true,
        source: 'https://www.ecdc.europa.eu/en/novel-coronavirus-china/questions-answers',
        score: null  
      },
    ],
  },
  getters: {
    getQuestion: state => {
      return state.questions;
    }
  },
  mutations: {
    ENABLE_QUESTION (state, id) {
      let questionIndex = state.questions.findIndex(item => item.id === id)
      state.questions[questionIndex].disabled = false
    },
    STORE_QUESTION_ANSWER (state, {id, answer}) {
      let questionIndex = state.questions.findIndex(item => item.id === id)
      state.questions[questionIndex].givenAnswer = answer;
      if (state.questions[questionIndex].answer == state.questions[questionIndex].givenAnswer) {
        state.questions[questionIndex].score = 1;
      } else {
        state.questions[questionIndex].score = 0;
      }
    }
  },
})
