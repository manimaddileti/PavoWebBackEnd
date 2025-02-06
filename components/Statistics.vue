<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { GetActivityMetrics } from '~/services/home'
type TMetrics = {
  title: string
  endUsers: number
  current: number
}
const animatedDetails = ref<TMetrics[]>([])
const loading = ref(true)
const GetStatisticsData = async () => {
  try {
    const { data = null, status = 500 } = await GetActivityMetrics()
    if (status === 200 && data) {
      animatedDetails.value = data.map((metric: any) => ({
        title: metric.title,
        current: 0,
        endUsers: metric.endUsers,
      }))
      animateDetails()
    } else {
      console.error('Failed to fetch activity metrics.')
    }
    loading.value = false
  } catch (error) {
    console.error('Error fetching activity metrics:', error)
  } finally {
  }
}

const animateDetails = () => {
  animatedDetails.value.forEach((detail, index) => {
    let current = 0
    const target = detail.endUsers
    const increment = target / 50
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(interval)
      }
      animatedDetails.value[index].current = Math.floor(current)
    })
  })
}

onMounted(() => {
  GetStatisticsData()
})
</script>

<template>
  <div
    class="container flex justify-center flex-wrap gap-4 px-4 sm:px-8 py-14 sm:py-32"
  >
    <div v-for="index in 4" :key="index" class="p-[1rem] text-center w-[200px]">
      <div
        v-if="loading"
        class="skeleton-loader h-[4rem] mb-4 w-[120px] mx-auto"
      ></div>
      <p
        v-if="!loading"
        class="text-[#252c38] text-[3.75rem] leading-[4.25rem] font-bold"
      >
        {{ animatedDetails[index]?.current || 0 }}
      </p>
      <h3 v-if="!loading" class="text-[0.875rem] text-[#6b747b]">
        {{ animatedDetails[index]?.title }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.text-center {
  text-align: center;
}

.skeleton-loader {
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #c7c7c7;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
