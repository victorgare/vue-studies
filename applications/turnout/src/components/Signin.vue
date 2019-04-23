<template>
  <div class="from-inline">
    <h3>Sign In</h3>
    <div class="form-group">
      <input type="text" placeholder="email" class="form-control" v-model="email">
      <input type="password" placeholder="password" class="form-control" v-model="password">

      <button @click="singnIn" class="btn btn-primary">Sign In</button>
    </div>
    <hr>
    <router-link to="/signup">Not a user? Sign up</router-link>
    <hr>
    <p>{{error.message}}</p>
  </div>
</template>


<script>
import { firebaseApp } from "../firebaseApp";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    singnIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
