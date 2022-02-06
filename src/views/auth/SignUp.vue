<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign Up Here</h3>
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending" disabled>Loading...</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignUp from "@/composables/useSignUp";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const { signUp, error, isPending } = useSignUp();

    const handleSubmit = async () => {
      const res = await signUp(email.value, password.value, displayName.value);
    };

    return { email, password, displayName, handleSubmit, isPending, error };
  },
};
</script>

<style>
</style>