<script setup lang="ts">
import MenuList from './MenuList.vue'

type Theader = {
  id: number
  title: string
  description: string
  image: string
  type: string
}

const props = defineProps<{
  menuList: Theader[]
}>()
</script>

<template>
  <div>
    <MenuList :menuList="menuList" />
  </div>
</template>

<style scoped>
.backgroundColor {
  background: linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1));
}

img {
  max-width: 100%;
  height: auto;
}

.social-icons {
  display: flex;
  justify-content: left;
  gap: 16px;
}

@media (max-width: 768px) {
  .social-icons {
    margin-top: 30px;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .social-icons a {
    margin-left: 0 !important;
    margin-right: 0;
    width: 100%;
    max-width: 250px;
    margin: 0;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .social-icons {
    width: 100%;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .social-icons a {
    width: auto;
    max-width: 200px;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .social-icons {
    width: 100%;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }

  .social-icons a {
    width: auto;
    max-width: 220px;
  }
}
</style>
