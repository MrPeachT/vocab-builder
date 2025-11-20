<template>
  <div>
    <h2 class="ui header">Word Detail</h2>

    <div class="ui segment" v-if="word">
      <p><strong>English:</strong> {{ word.english }}</p>
      <p><strong>German:</strong> {{ word.german }}</p>
      <p><strong>Vietnamese:</strong> {{ word.vietnamese }}</p>

      <router-link :to="{ name: 'edit', params: { id: word._id } }"
                   class="ui button primary">
        Edit
      </router-link>

      <router-link to="/words" class="ui button">
        Back to List
      </router-link>

      <button class="ui red button" @click="deleteWord">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { api } from "../helpers/helpers";

export default {
  name: "Show",
  data() {
    return {
      word: null,
    };
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  },
  methods: {
    async deleteWord() {
      if (confirm("Are you sure?")) {
        await api.deleteWord(this.word._id);
        this.$router.push("/words");
      }
    }
  }
};
</script>