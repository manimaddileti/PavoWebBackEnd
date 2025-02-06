<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import PricingCard from './PricingCard.vue'
import { GetSubscriptionApi, GetSubscriptionListApi } from '~/services/home'

let loading = ref(true)

type SubscriptionPlan = {
  id: number
  title: string
  subscriptionPlan: number
  priceTimeline: string
  description: string
  loading: boolean
}

type SubscriptionFeature = {
  id: number
  subscriptionId: number
  description: string
  loading: boolean
}

const subscriptionPlans = ref<SubscriptionPlan[]>([])
const subscriptionFeatures = ref<SubscriptionFeature[]>([])

async function fetchSubscriptionPlans() {
  const { data, status } = await GetSubscriptionApi()
  if (status === 200 && data) {
    loading.value = false
    subscriptionPlans.value = data
  } else {
    console.error('Failed to fetch subscription plans')
    loading.value = false
  }
}

async function fetchSubscriptionFeatures() {
  const { data, status } = await GetSubscriptionListApi()
  if (status === 200 && data) {
    loading.value = false
    subscriptionFeatures.value = data
  } else {
    console.error('Failed to fetch subscription features')
    loading.value = false
  }
}

function getFeaturesForPlan(subscriptionId: number) {
  return subscriptionFeatures.value
    .filter((feature) => feature.subscriptionId === subscriptionId)
    .map((feature) => feature.description)
}

onMounted(() => {
  fetchSubscriptionPlans()
  fetchSubscriptionFeatures()
})
</script>

<template>
  <div class="pricingStyles">
    <h2 class="text-white text-[2.125rem] font-bold">
      Pricing options for all budgets
    </h2>
    <p class="mb-16 text-white lg:max-w-3xl lg:mx-auto">
      Our pricing plans are setup in such a way that any user can start enjoying
      Pavo without worrying so much about costs. They are flexible and work for
      any type of industry
    </p>

    <div
      class="flex justify-center flex-wrap mt-[2rem] sm:mt-[4rem] container px-4 sm-px-8 gap-4"
    >
      <div class="absolute bottom-0 h-40 w-full bg-white"></div>

      <div v-if="loading" class="flex justify-center flex-wrap gap-4">
        <div v-for="index in 3" :key="index" class="pricing-card-container">
          <div class="pricing-card-skeleton">
            <div class="skeleton-header"></div>
            <div class="skeleton-price"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-features"></div>
            <div class="skeleton-btn"></div>
          </div>
        </div>
      </div>

      <div
        v-for="(plan, index) in subscriptionPlans"
        :key="index"
        class="pricing-card-container"
      >
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

<style scoped>
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
  margin-bottom: 1rem;
  color: #eb427e;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.875rem;
  text-align: center;
}

.pricingStyles p {
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  text-align: center;
}

.pricing-cards-container {
  padding: 3rem 1.75rem 2.25rem 1.75rem;
}

.pricing-card-skeleton {
  display: block;
  background-color: #ffffff;
  max-width: 100%;
  width: 20rem;
  height: 80%;
  margin-right: auto;
  margin-bottom: 2rem;
  margin-left: auto;
  border: 1px solid #bcc4ca;
  border-radius: 8px;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skeleton-header {
  background-color: #e0e0e0;
  height: 40px;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.skeleton-price {
  background-color: #e0e0e0;
  height: 50px;
  margin-bottom: 1rem;
  border-radius: 4px;
  text-size-adjust: 2rem;
}

.skeleton-description {
  background-color: #e0e0e0;
  height: 60px;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.skeleton-features {
  background-color: #e0e0e0;
  height: 70px;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.skeleton-btn {
  display: inline-block;
  padding: 1.375rem 2.25rem 1.375rem 2.25rem;
  border: 1px solid #e0e0e0;
  border-radius: 32px;
  background-color: #e0e0e0;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 0;
  text-decoration: none;
  transition: all 0.2s;
}
</style>
