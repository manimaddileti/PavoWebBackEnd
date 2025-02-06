<script setup lang="ts">
import { GetMenuListApi } from '~/services/home';

type Theader = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
};

const menuList = ref<Theader[]>([]);
  const downloadData = ref<Theader | null>(null);
    const downloadData1 = ref<Theader | null>(null);
  const loading = ref(true);
async function GetMenuListData() {
  loading.value = true;
  const { data = null, status = 500 } = await GetMenuListApi();

  if (status === 200) {
    menuList.value = data;
    downloadData.value = menuList.value.find(item => item.id === 4) || null;
    downloadData1.value = menuList.value.find((item) => item.id === 5) || null;
    loading.value = false;
  } else {
    menuList.value = [];
  }
  loading.value = false;
}


onMounted(() => {
  GetMenuListData();
  
});

</script>
<template >
    <div id="home">
      <Home :menu-list="menuList" />
    </div>
    <div id="features">
      <Features />
    </div>
    <div id="details">
    <Details />
    </div>
    <div id="pricing">
      <Pricing />
    </div>
    <div id="download">
      <Download :downloadData="downloadData" :loading="loading" />
    </div>
    <Footer :download-data="downloadData1" />
</template>

<style scoped></style>
