<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'

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

const isServerOff = ref(true)
const menuList = ref<Theader[]>([])

watch(
  () => props.menuList,
  (newMenuList) => {
    if (newMenuList && newMenuList.length > 0) {
      menuList.value = newMenuList
      isServerOff.value = false
    }
  },
  { immediate: true }
)
</script>

<template>
  <div
    class="backgroundColor py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
  >
    <div
      class="container px-4 sm:px-8 lg:gap-x-8 gap-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center"
    >
      <div v-if="isServerOff" class="lg:!-mt-[0.2px]">
        <div
          class="skeleton-title h-12 w-3/4 lg:w-1/2 bg-gray-300 rounded mb-5"
        ></div>
        <div
          class="skeleton-description h-8 w-full bg-gray-300 rounded mb-3"
        ></div>
        <div
          class="skeleton-description h-6 w-2/3 bg-gray-300 rounded mb-8 lg:mr-10"
        ></div>
        <div class="flex flex-col md:flex-row gap-3">
          <div
            class="skeleton-button h-12 w-40 bg-gray-300 rounded-[30px]"
          ></div>
          <div class="skeleton-button h-12 w-40 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div v-else class="lg:!-mt-[0.2px]">
        <h1
          class="lg:-tracking-[0.5px] text-[2.75rem] lg:text-[3.125rem] font-bold !leading-[3.75rem] lg:mb-5 text-[#252C38]"
        >
          {{ menuList[0]?.title }}
        </h1>
        <p
          class="text-[1.145rem] font-normal text-lg leading-7 text-[#6b747b] mb-8 lg:mr-10"
        >
          {{ menuList[0]?.description }}
        </p>
        <div class="flex flex-col md:flex-row gap-3">
         <Button/>
        </div>
      </div>

      <div v-if="isServerOff" class="xl:text-right">
        <div class="skeleton-image h-80 w-full bg-gray-300 rounded"></div>
      </div>

      <div v-else class="xl:text-right">
        <img
          src="../assets/images/smartphone.png"
          alt="Smartphone Image"
          class="inline"
        />
      </div>
    </div>

    <div
      v-if="isServerOff"
      class="container px-4 sm:px-8 pb-20 text-center lg:mt-[1rem]"
    >
      <div
        class="skeleton-description h-8 mt-12 w-3/4 mx-auto bg-gray-300 rounded mb-3"
      ></div>
      <div
        class="skeleton-description h-8 w-1/2 mx-auto bg-gray-300 rounded"
      ></div>
    </div>

    <div v-else class="container px-4 sm:px-8 pb-20 text-center lg:mt-[1rem]">
      <p
        class="text-gray-800 mt-10 text-3xl leading-10 lg:max-w-5xl lg:mx-auto lg:mb-3"
      >
        {{ menuList[1]?.description }}
      </p>
    </div>
  </div>
</template>
