<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapState([
        'loggingIn',
        'loginError',
        'loginSuccessful'
      ])
    },
    methods: {
      ...mapActions([
        'doLogin'
      ]),
      loginSubmit() {
        this.doLogin({
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>