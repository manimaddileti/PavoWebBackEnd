<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { socialLinks } from '~/constants/dataSets'

let loading = ref(true)
type Theader = {
  id: number
  title: string
}
const props = defineProps<{
  downloadData: Theader | null
}>()
</script>

<template>
  <div class="footer w-full">
    <div class="container px-4 sm:px-8 pt-[94px] pb-[1.9rem] lg:mb-0">
      <h4 class="mb-8 lg:max-w-3xl lg:mx-auto lg:mt-0.5">
        <div v-if="!downloadData" class="skeleton-title"></div>
        <span v-else>{{ downloadData?.title }}</span>
        <div class="social-container">
          <span
            class="fa-stack"
            v-for="(social, index) in socialLinks"
            :key="index"
          >
            <a :href="social.link" class="social-icon">
              <i :class="['fab', social.icon, 'fa-stack-0.8x']"></i>
            </a>
            
          </span>
        </div>
      </h4>
    </div>
    <FooterBar />
  </div>
</template>

<style scoped>
.footer {
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(197, 234, 249, 1));
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.skeleton-title {
  width: 100%; 
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 0 auto;
}

.social-container {
  justify-content: center;
  gap: none;
  margin-top: 2rem;
  flex-wrap: wrap;
  animation: zigzag 2s linear infinite;
}

.social-container .social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 47px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #252c38;
  font-size: 22px;
  text-align: center;
  margin-left: 7px;
}

.social-container .social-icon:hover {
  background-color: #252c38;
  color: white;
}

.fab {
  line-height: inherit;
}

@keyframes zigzag {
  0% {
    transform: translateY(0);
  }

  30% {
    transform: translateX(20px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
