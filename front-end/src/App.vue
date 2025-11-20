<template>
  <div id="app" class="ui container" style="margin-top: 2rem;">
    <div class="ui menu">
      <router-link to="/words" class="header item">Vocab Builder</router-link>
      <router-link to="/words" class="item">All Words</router-link>
      <router-link to="/words/new" class="item">Add Word</router-link>
      <router-link to="/test" class="item">Test</router-link>
    </div>

    <FlashMessage />

    <router-view />
  </div>
</template>

<script>
export default { name: 'App' };
</script>