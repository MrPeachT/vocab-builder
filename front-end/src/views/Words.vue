<template>
  <div>
    <h2 class="ui header">All Words</h2>

    <table class="ui celled table" v-if="words.length">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th>Vietnamese</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="w in words" :key="w._id">
          <td>{{ w.english }}</td>
          <td>{{ w.german }}</td>
          <td>{{ w.vietnamese }}</td>
          <td>
            <router-link
              :to="{ name: 'show', params: { id: w._id } }"
              class="ui tiny button"
            >
              View
            </router-link>
            <router-link
              :to="{ name: 'edit', params: { id: w._id } }"
              class="ui tiny button"
            >
              Edit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else class="ui message">
      No words yet. Add one from the menu.
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'Words',
  data() {
    return {
      words: []
    };
  },
  async mounted() {
    try {
      this.words = await api.getWords();
    } catch (err) {
      console.error('Failed to fetch words:', err);
    }
  }
};
</script>