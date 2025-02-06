<template>
  <div class="basic-5 lg:bg-cover lg:bg-center">
    <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
    
      <div class="mb-16 lg:mb-0 order-1 lg:order-none">
        <div v-if="isLoading" class="skeleton-image"></div>
        <img
          v-else
          :src="downloadData?.image"
          alt="alternative"
          v-if="downloadData?.image"
        />
      </div>
      <div class="lg:mt-24 xl:mt-44 xl:ml-12 order-2 lg:order-none lg:text-left">
        <div v-if="isLoading" class="skeleton-text mb-9"></div>
        <p v-else class="mb-9 text-gray-800 text-3xl leading-10">
          {{ downloadData?.description }}
        </p>
        <div class="social-icons">
          <div v-if=" isLoading " class =" skeleton-button "></div>
          <div v-if=" isLoading " class =" skeleton-button "></div>
          
          <Button v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GetMenuListApi } from '~/services/home'

type Theader = {
  id: number
  description: string
  title: string
  image: string
  type: string
}

const props = defineProps<{
  downloadData: Theader | null
}>()
const isLoading = ref(true)

onMounted(() => {
    isLoading.value = false
})

</script>

<style scoped>
.basic-5 {
  padding-top: 4.5rem;
  padding-bottom: 7.5rem;
  background-size: cover;
  text-align: center;
  background: none;
}

@media (min-width: 1024px) {
  .basic-5 {
    background: url(../public/download/backgroundImage.jpg) center center
      no-repeat;
    background-position: 50%;
    background-size: cover;
  }
}

.skeleton-image {
  width: 100%;
  height: 300px; 
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: shimmer 1.5s infinite;
}

.skeleton-text {
  width: 100%;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}

.skeleton-button {
  width: 120px; 
  height: 40px; 
  background-color: #e0e0e0;
  border-radius: 40px;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton-image,
.skeleton-text,
.skeleton-button {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@media (max-width: 1024px) {
  .basic-5 {
    background: none;
  }
}

@media (max-width: 768px) {
  .social-icons {
    justify-content: center;
    gap: 8px;
  }

  .skeleton-button {
    width: 100px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .skeleton-button {
    width: 80px;
    height: 32px;
  }
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 44px;
  border-radius: 40px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.android-btn {
  background-color: #eb427e;
  color: #fff;
  border: 1px solid #eb427e;
}

.android-btn:hover {
  background-color: transparent;
  color: #eb427e;
}

.apple-btn {
  background-color: #4f46e5;
  color: #fff;
  border: 1px solid #4f46e5;
}

.apple-btn:hover {
  background-color: transparent;
  color: #4f46e5;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 1024px) {
  .basic-5 {
    background: none;
  }
}

@media (max-width: 768px) {
  .social-icons {
    justify-content: center;
    gap: 8px;
  }

  .download-btn {
    padding: 0.6rem 32px;
    font-size: 12px;
  }

  .apple-btn,
  .android-btn {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .download-btn {
    padding: 0.5rem 24px;
    font-size: 11px;
  }

  .apple-btn,
  .android-btn {
    font-size: 13px;
  }
}
</style>
