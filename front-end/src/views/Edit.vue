<template>
  <div>
    <h2 class="ui header">Edit Word</h2>
    <WordForm v-if="word"
              :word="word"
              :isEdit="true"
              @submit="updateWord" />
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
import WordForm from "../components/WordForm.vue";

export default {
  name: "Edit",
  components: { WordForm },
  data() {
    return {
      word: null,
    };
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  },
  methods: {
    async updateWord(data) {
      await api.updateWord(this.$route.params.id, data);
      this.$router.push("/words");
    }
  }
};
</script>