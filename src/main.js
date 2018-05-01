// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import safe from 'safe-regex'
require('./assets/sass/main.scss')

Vue.config.productionTip = false
Vue.component('testRegEx', {
  template: `
  <div>
    <div class="field">
      <div class="control" >
        <input class="input" :style="styles.inputField" v-model="newText" type="text" placeholder="Check Your RegEx">
        <a class="button" @click="checkRegEx" :style="styles.button">Check</a>
      </div>
    </div>
      <article :class="isSuccess" v-if="isShown" :style="styles.regExMessageBox">
          <div class="message-header" >
            <p>{{ regExMessageTitle }}</p>
            <button class="delete" aria-label="delete" @click="isShown = false"></button>
          </div>
          <div class="message-body">
            {{ regExMessage }}
          </div>
      </article>
</div>
  `,
  data () {
    return {
      newText: '',
      isSuccess: '',
      regExMessageTitle: '',
      regExMessage: '',
      isShown: false,
      styles: {
        button: {
          'background-color': '#00aeef',
          padding: '10px',
          'max-width': '150px',
          'margin-top': '25px',
          display: ['-webkit-box', '-ms-flexbox', 'flex']
        },
        inputField: {
          padding: '10px',
          'max-width': '250px',
          display: ['-webkit-box', '-ms-flexbox', 'flex']
        },
        regExMessageBox: {
          'max-width': '600px'
        }
      }
    }
  },
  methods: {
    checkRegEx () {
      if (typeof this.newText !== 'string') return alert('Please Enter Correct RegEx')

      var regex
      regex = this.newText
      var ok = safe(regex)
      if (ok) {
        this.isSuccess = 'message is-success'
        this.isShown = true
        this.regExMessageTitle = 'Success'
        this.regExMessage = 'This RegEx is safe for use: ' + this.newText
      } else {
        this.isSuccess = 'message is-danger'
        this.isShown = true
        this.regExMessageTitle = 'WARNING!!'
        this.regExMessage = 'WARNING! POTENTIAL RISK IF THIS REGEX IS IMPLEMENTED: ' + this.newText
      }
      this.newText = ''
    }
  }
})

Vue.component('resultTitle', {
  template: `
    <div>
      <section :class="heroStyle">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ heroText }}
          </h1>
          <h2 class="subtitle">
           {{ heroSubtext }}
          </h2>
        </div>
      </div>
    </section>
    </div>
  `,
  data () {
    return {
      heroStyle: 'hero',
      heroText: 'Check Your RegEx',
      heroSubtext: ''
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
