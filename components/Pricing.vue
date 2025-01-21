<template>
  <div class="pricingStyles">
    <h2 class="text-white text-[2.125rem] font-bold">
      Pricing options for all budgets
    </h2>
    <p class="mb-16 !text-white">
      Our pricing plans are set up in such a way that any user can start
      enjoying Pavo without worrying so much about costs. They are flexible and
      work for any type of industry.
    </p>

    <div
      class="flex justify-center flex-wrap mt-[2rem] sm:mt-[4rem] container px-4 sm-px-8 gap-4"
    >
      <div class="absolute bottom-0 h-40 w-full bg-white"></div>

      <div v-for="(plan, index) in subscriptionPlans" :key="index" class="pricing-card-container">
        <PricingCard
          :planName="plan.title"
          :price="plan.subscriptionPlan"
          :priceUnit="plan.priceTimeline"
          :description="plan.description"
          :features="getFeaturesForPlan(plan.id)" 
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import PricingCard from './PricingCard.vue';  
import { GetSubscriptionApi, GetSubscriptionListApi } from '~/services/home'; 

// Define types
type SubscriptionPlan = {
  id: number;
  title: string;
  subscriptionPlan: number;
  priceTimeline: string;
  description: string;
};

type SubscriptionFeature = {
  id: number;
  subscriptionId: number;
  description: string;
};

const subscriptionPlans = ref<SubscriptionPlan[]>([]);  
const subscriptionFeatures = ref<SubscriptionFeature[]>([]);  

async function fetchSubscriptionPlans() {
  const { data, status } = await GetSubscriptionApi();  
  if (status === 200 && data) {
    subscriptionPlans.value = data;
  } else {
    console.error('Failed to fetch subscription plans');
  }
}

async function fetchSubscriptionFeatures() {
  const { data, status } = await GetSubscriptionListApi();  
  if (status === 200 && data) {
    subscriptionFeatures.value = data;
  } else {
    console.error('Failed to fetch subscription features');
  }
}

// Fetch features for a given plan
function getFeaturesForPlan(subscriptionId: number) {
  return subscriptionFeatures.value
    .filter((feature) => feature.subscriptionId === subscriptionId)
    .map((feature) => feature.description);
}

// Fetch data on mount
onMounted(() => {
  fetchSubscriptionPlans();
  fetchSubscriptionFeatures();
});
</script>

<style scoped>
/* Styling for pricing section */
.pricingStyles {
  position: relative;
  padding-top: 8rem;
  background:
    linear-gradient(rgba(50, 60, 70, 0.9), rgba(50, 60, 70, 0.9)),
    url('../pricing/pricingBg.jpg') center center no-repeat;
  background-size: cover;
  text-align: center;
}

.pricingStyles h2 {
  margin-bottom: 1.25rem;
  font-size: 3rem;
  line-height: 2.625rem;
  letter-spacing: -0.4px;
}

.pricingStyles p {
  max-width: 48rem;
  margin: 0 auto;
  color: #6b747b;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}

.pricing-cards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;  
  flex-wrap: wrap;
  margin-top: 4rem;
  padding-bottom: 2rem;
}

@media (max-width: 768px) {
  .pricingStyles h2 {
    font-size: 1.75rem;
  }

  .pricingStyles p {
    font-size: 0.875rem;
    padding: 0 1rem;
  }

  .pricing-cards-container {
    flex-direction: column;
    align-items: center;
    gap: 2rem;  
    padding-bottom: 5rem;
  }

  .pricing-card {
    width: 100%;
    padding: 2rem 1.25rem 4rem 1rem;
  }
}
</style>
