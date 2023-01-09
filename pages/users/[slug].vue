<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const userData = ref({} as any)
definePageMeta({
  layout: 'page',
})
const config = useRuntimeConfig()
const url = `${config.public.api_url}/users/${route.params.slug}`
$fetch(url, {
  method: 'GET',
}).then((res) => {
  userData.value = res
})
</script>

<template>
  <PageWrapper class="flex flex-col">
    {{ userData }}
  </PageWrapper>
</template>
