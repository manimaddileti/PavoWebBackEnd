<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GetFooter } from '~/services/home'
let loading = ref(true)
type Tdata = { copyRights: string }
const rights = ref<Tdata[]>([])

async function GetFooterDetails() {
  loading.value = true
  const { data = null, status = 500 } = await GetFooter()
  if (status === 200) {
    loading.value = false
    rights.value = data
    console.log('FooterBar')
    console.log(rights.value)
  } else {
    rights.value = []
    loading.value = false
  }
}
onMounted(() => {
  GetFooterDetails()
})
</script>

<template>
  <div class="copyright">
    <ul class="lg:flex items-center justify-center flex-row lg:gap-10">
      <li
        v-for="(item, index) in rights"
        :key="index"
        class="text-[#6b747b] text-[14px] font-normal mb-2"
      >
        {{ loading ? 'Loading...' : item.copyRights }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.copyright {
  padding-top: 1.5rem;
}

@media (min-width: 768px) {
}
</style>
