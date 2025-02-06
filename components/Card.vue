<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GetIconsListApi } from '~/services/home'

let loading = ref(true)

type Highlight = {
  id: number
  image: string
  title: string
  description: string
}
const Highlights = ref<Highlight[]>([])

async function GetData() {
  loading.value = true
  const { data = null, status = 500 } = await GetIconsListApi()
  if (status === 200) {
    loading.value = false
    Highlights.value = data
    console.log('Highlights', Highlights.value)
  } else {
    Highlights.value = []
    loading.value = false
  }
}

onMounted(() => {
  GetData()
})
</script>

<template>
  <div class="container feature-list gap-3 lg:gap-x-[1.5rem] lg:gap-y-14">
    <div
      v-if="loading"
      class="feature-card skeleton"
      v-for="index in 6"
      :key="index"
    >
      <div class="skeleton-image"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-description"></div>
    </div>

    <div
      v-for="(feature, index) in Highlights"
      :key="index"
      class="feature-card"
    >
      <img :src="feature.image" :alt="feature.image" class="feature-image" />
      <h3 class="feature-title">
        {{ feature.title }}
      </h3>
      <p class="feature-description">
        {{ feature.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.feature-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 28px;
  margin-bottom: 2.3rem;
}

.skeleton {
  background-color: #f1f9fc;
  border-radius: 15px;
  padding: 41px 19px;
  text-align: center;
  box-sizing: border-box;
}

.skeleton-image,
.skeleton-title,
.skeleton-description {
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-image {
  margin-left: 7rem;
  width: 70px;
  height: 70px;
  margin-top: 10px;
  margin-bottom: 1.5rem;
}

.skeleton-title {
  width: 120px;
  height: 20px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}

.skeleton-description {
  width: 80%;
  height: 16px;
  margin: 10px auto;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}

.feature-card {
  background-color: #f1f9fc;
  border-radius: 15px;
  padding: 41px 19px;
  transition: box-shadow 0.3s ease;
  text-align: center;
  box-sizing: border-box;
}

.feature-image {
  width: 70px;
  height: 70px;
  margin-top: 10px;
  margin-bottom: 1.5rem;
  display: inline-block;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5.7px;
}

.feature-description {
  color: #6b747b;
  line-height: 1.5;
  font:
    400 1rem / 1.625rem 'Open Sans',
    sans-serif;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}

@media (max-width: 1024px) {
  .feature-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .feature-list {
    grid-template-columns: 1fr;
  }
}
</style>
