<template>
  <div id="Header" class="Header">
    <div class="title">
      <!-- Ссылка для главной (становится зеленой, если находитесь на главной странице) -->
      <router-link
        to="/"
        class="link"
        :class="{ active: $route.name === 'First' }">Главная</router-link>

      <!-- Ссылка для прогноза на неделю (становится зеленой на странице 'Week') -->
      <router-link
        :to="{ name: 'Week' }"
        class="link"
        :class="{ active: $route.name === 'Week' }">За неделю</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.Header {
  position: sticky;
  top: 0;
  z-index: 15;
  width: 100%;
  height: 32px;
  background: black;
  border-bottom: solid 1px black;
}

.title {
  display: flex;
  gap: 12px;
  align-self: center;
  padding-left: 12px;
}

/* Стили для обычных ссылок */
.link {
  color: white;
  text-decoration: none;
}

/* Стили для активных ссылок */
.link.active {
  color: green;
}
</style>
