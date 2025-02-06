<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GetPageContentApi } from '~/services/home'

let loading = ref(true)
type content = {
  id: number
  title: string
  image: string
  description: string
  orderBy: number
}

const PageContent = ref<content[]>([])
async function GetPageContent() {
  loading.value = true
  const { data = null, status = 500 } = await GetPageContentApi()
  if (status === 200) {
    loading.value = false
    PageContent.value = data
  } else {
    PageContent.value = []
    loading.value = false
  }
}
onMounted(() => {
  GetPageContent()
})
</script>

<template>
  <div
    class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:mt-[90.5px]"
  >
    <div class="lg:col-span-5">
      <div class="mb-16 lg:mb-0 xl:mt-16">
        <h2 class="mb-6 title1" :class="{ skeleton: loading }">
          {{ loading ? '' : PageContent[0]?.title }}
        </h2>

        <div v-html="PageContent[3]?.description"></div>
        <br />
        <div v-html="PageContent[4]?.description"></div>
      </div>
    </div>
    <div class="lg:col-span-7">
      <div class="xl:ml-14">
        <img
          v-if="!loading"
          class="inline"
          :src="PageContent[0]?.image"
          alt="Image"
        />
        <div v-else class="skeleton-image"></div>
      </div>
    </div>
  </div>

  <div class="lg:py-[9.9rem] md:py-[8rem] py-10">
    <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div class="lg:col-span-7">
        <div class="mb-12 lg:mb-0 xl:mr-14">
          <img
            v-if="!loading"
            class="inline"
            :src="PageContent[1]?.image"
            alt="Image"
          />
          <div v-else class="skeleton-image"></div>
        </div>
      </div>
      <div class="lg:col-span-5">
        <div class="xl:mt-12">
          <h2 class="mb-6 title1" :class="{ skeleton: loading }">
            {{ PageContent[1]?.title }}
          </h2>

          <div v-html="PageContent[5]?.description"></div>
          <div v-html="PageContent[6]?.description"></div>
          <div v-html="PageContent[7]?.description"></div>

          <a
            v-if="!loading"
            class="btn-solid-reg popup-with-move-anim mr-1.5"
            href="#details-lightbox"
            >Lightbox</a
          >
          <div v-else class="skeleton-button"></div>
          <a v-if="!loading" class="btn-outline-reg lg:ml-1" href="article.html"
            >Details</a
          >
          <div v-else class="skeleton-button"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-16 pb-12 lg:pt-0">
    <div
      class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12 py-10 md:py-0"
    >
      <div class="lg:col-span-5">
        <div class="mb-16 lg:mb-0 xl:mt-24 lg:mb">
          <h2 class="mb-6 title1" :class="{ skeleton: loading }">
            {{ PageContent[2]?.title }}
          </h2>

          <div v-html="PageContent[8]?.description"></div>
          <br />
          <div v-html="PageContent[9]?.description"></div>
        </div>
      </div>
      <div class="lg:col-span-7">
        <div class="ml-14">
          <img
            v-if="!loading"
            class="inline"
            :src="PageContent[2]?.image"
            alt="Image"
          />
          <div v-else class="skeleton-image"></div>
        </div>
      </div>
    </div>
  </div>
  <Statistics />
  <Slider />
</template>

<style scoped>
.skeleton-button {
  display: inline-block;
  padding: 1.375rem 3.5rem 1.375rem 3.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 32px;
  background-color: #e0e0e0;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s;
  margin-top: 4rem;
  margin-left: 2rem;
}
.title1 {
  color: #252c38;
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 2.625rem;
  letter-spacing: -0.4px;
}

.skeleton {
  background-color: #e0e0e0;
  width: 80%;
  height: 2.5rem;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-description {
  background-color: #e0e0e0;
  height: 1rem;
  width: 90%;
  margin: 10px auto;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-image {
  background-color: #e0e0e0;
  width: 100%;
  height: 300px;
  margin: 10px 0;
  border-radius: 8px;
  animation: pulse 1.5s infinite ease-in-out;
}

.btn-outline-reg {
  display: inline-block;
  padding: 1.375rem 2.25rem 1.375rem 2.25rem;
  border: 1px solid #252c38;
  border-radius: 32px;
  background-color: transparent;
  color: #252c38;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s;
  margin-top: 2rem;
}

.btn-solid-reg {
  display: inline-block;
  padding: 1.375rem 2.25rem 1.375rem 2.25rem;
  border: 1px solid #594cda;
  border-radius: 32px;
  background-color: #594cda;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s;
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
</style>
