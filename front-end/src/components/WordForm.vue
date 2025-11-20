<template>
  <form class="ui form" @submit.prevent="onSubmit">
    <div class="field">
      <label>English</label>
      <input type="text" v-model="localWord.english" />
    </div>

    <div class="field">
      <label>German</label>
      <input type="text" v-model="localWord.german" />
    </div>

    <div class="field">
      <label>Vietnamese</label>
      <input type="text" v-model="localWord.vietnamese" />
    </div>

    <div v-if="errors" class="ui red message">
      All fields are required.
    </div>

    <button class="ui primary button" type="submit">
      {{ isEdit ? "Update" : "Create" }}
    </button>
  </form>
</template>

<script>
export default {
  name: "WordForm",
  props: {
    word: {
      type: Object,
      required: false, 
    },
    isEdit: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      localWord: { ...this.word },
      errors: false,
    };
  },
  methods: {
    onSubmit() {
      if (
        !this.localWord.english ||
        !this.localWord.german ||
        !this.localWord.vietnamese
      ) {
        this.errors = true;
        return;
      }
      this.errors = false;
      this.$emit("submit", this.localWord);
    }
  }
};
</script>