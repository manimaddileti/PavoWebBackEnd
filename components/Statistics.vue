<template>
  <div class="container flex justify-center flex-wrap gap-4 px-4 sm:px-8 py-14 sm:py-32">
    <div
      v-for="(detail, index) in animatedDetails"
      :key="index"
      class="p-[1rem] text-center w-[200px]"
    >
      <p class="text-[#252c38] text-[3.75rem] leading-[4.25rem] font-bold">
        {{ detail.current || 0 }}
      </p>
      <h3 class="text-[0.875rem] text-[#6b747b]">{{ detail.title }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { GetActivityMetrics } from '~/services/home'

type TMetrics = { 
  title: string; 
  endUsers: number;
  current:number;
};

const animatedDetails = ref<TMetrics[]>([]);

const GetStatisticsData = async () => {
  try {
    const { data = null, status = 500 } = await GetActivityMetrics();
    if (status === 200 && data) {
      animatedDetails.value = data.map((metric:any) => ({
        title: metric.title,
        current: 0, 
        endUsers: metric.endUsers
      }));
    } else {
      console.error("Failed to fetch activity metrics.");
    }
  } catch (error) {
    console.error("Error fetching activity metrics:", error);
  }
};


const animateDetails = () => {
  animatedDetails.value.forEach((detail, index) => {
    let current = 0;
    const target = detail.endUsers;
    const increment = target / 50; 

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      animatedDetails.value[index].current = Math.floor(current);
    }, 20); 
  });
};

onMounted(() => {
  GetStatisticsData();
  setTimeout(animateDetails, 1500); 
});
</script>

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
</style>
