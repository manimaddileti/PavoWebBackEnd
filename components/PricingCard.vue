<script lang="ts" setup>
defineProps({
  planName: String,
  price: Number,
  priceUnit: String,
  description: String,
  features: Array,
  loading: Boolean,
})
</script>

<template>
  <div class="pricing-card">
    <div class="pricing-card-body">
      <div v-if="loading">
        <div class="skeleton-header"></div>
        <div class="skeleton-price"></div>
        <div class="skeleton-description"></div>
        <div class="skeleton-features"></div>
        <div class="skeleton-btn"></div>
      </div>

      <div v-else>
        <h3 class="plan-name">
          {{ planName?.toUpperCase() }}
        </h3>
        <div class="price">
          <p class="amount flex items-center justify-center">
            <span class="currency-symbol"></span>{{ price }}
          </p>
        </div>
        <p class="price-unit !mt-4 mb-5">{{ priceUnit }}</p>
        <p class="description text-left">{{ description }}</p>
        <ul class="features-list">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="flex justify-start items-start"
          >
            <div class="flex items-center h-full">
              <img
                src="../assets/images/rightSolidArrow.svg"
                class="arrow-icon"
                alt="Dropdown Arrow"
              />
            </div>
            <p class="">{{ feature }}</p>
          </li>
        </ul>
        <button class="download-btn">Download</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.skeleton-header,
.skeleton-price,
.skeleton-description,
.skeleton-features,
.skeleton-btn {
  background-color: #e0e0e0;
  border-radius: 4px;
}

.skeleton-header {
  height: 3rem;
  margin-bottom: 1.25rem;
}

.skeleton-price {
  height: 70px;
  margin-bottom: 1.25rem;
}

.skeleton-description {
  height: 80px;
  margin-bottom: 1.25rem;
  width: 100%;
}

.skeleton-features {
  height: 100px;
  margin-bottom: 1.25rem;
}

.skeleton-btn {
  display: inline-block;
  padding: 1.375rem 2.25rem 1.375rem 2.25rem;
  border: 1px solid #594cda;
  border-radius: 32px;
  background-color: #594cda;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 0;
  text-decoration: none;
  transition: all 0.2s;
}

.pricing-card {
  position: relative;
  display: block;
  background-color: #ffffff;
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3rem;
  border: 1px solid #bcc4ca;
  border-radius: 8px;

  width: 100%;
  padding: 3rem 1.75rem 2.25rem 1.75rem;
}

.plan-name {
  margin-bottom: 1.5rem;
  color: #eb427e;
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 20px;
  text-align: center;
}

.price {
  font-size: 2.5rem;
  font-weight: 1000;
  text-align: left;
}

.amount {
  color: #252c38;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 5rem;
  text-align: left;
}

p.description {
  margin-bottom: 1.25rem;
  text-align: left;
  width: 100%;
}

.features-list {
  font-size: 0.75rem;
  line-height: 1.625rem;
  font-weight: 700;
  gap: 50px;
}

.features-list li {
  flex: 1 1 0%;
  text-align: left;
  margin-top: 5px;
}

.arrow-icon {
  width: 20px;
  height: 18px;
  margin-right: 10px;
}

.feature-text {
  font-size: 1.125rem;
  color: #6b747b;
}

.download-btn {
  background-color: #594cda;
  color: white;
  padding: 1rem 3rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 30px;
  line-height: 1;
  cursor: pointer;
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease;
}

.download-btn:hover {
  background-color: white;
  color: #594cda;
  border-color: #594cda;
}

@media (max-width: 768px) {
  .pricing-card {
    padding: 2.5rem 1.5rem 4.5rem 1.5rem;
  }

  .plan-name {
    font-size: 1.25rem;
  }

  .price {
    font-size: 2rem;
  }

  .amount {
    font-size: 2rem;
  }

  .download-btn {
    font-size: 0.875rem;
    padding: 0.75rem 2rem;
    margin-bottom: 10px;
  }
}
</style>
