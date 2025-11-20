<template>
  <div>
    <h2 class="ui header">Add New Word</h2>
    <WordForm :word="{ english: '', german: '', vietnamese: '' }"
              @submit="createWord" />
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
import WordForm from "../components/WordForm.vue";

export default {
  name: "NewWord",
  components: { WordForm },
  methods: {
    async createWord(data) {
      await api.createWord(data);
      this.$router.push("/words");
    }
  }
};
</script>