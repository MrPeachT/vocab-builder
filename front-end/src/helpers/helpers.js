import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, { timeout: 2000 });

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
});

const vm = new Vue();

export const api = {
  async getWords() {
    try {
      const res = await apiClient.get('/words');
      return res.data;
    } catch (err) {
      vm.flash('Failed to load words', 'error');
      throw err;
    }
  },

  async getWord(id) {
    try {
      const res = await apiClient.get(`/words/${id}`);
      return res.data;
    } catch (err) {
      vm.flash('Failed to load word', 'error');
      throw err;
    }
  },

  async createWord(payload) {
    try {
      const res = await apiClient.post('/words', payload);
      vm.flash('Word created!', 'success');
      return res.data;
    } catch (err) {
      vm.flash('Failed to create word', 'error');
      throw err;
    }
  },

  async updateWord(id, payload) {
    try {
      const res = await apiClient.put(`/words/${id}`, payload);
      vm.flash('Word updated!', 'success');
      return res.data;
    } catch (err) {
      vm.flash('Failed to update word', 'error');
      throw err;
    }
  },

  async deleteWord(id) {
    try {
      const res = await apiClient.delete(`/words/${id}`);
      vm.flash('Word deleted!', 'success');
      return res.data;
    } catch (err) {
      vm.flash('Failed to delete word', 'error');
      throw err;
    }
  }
};
