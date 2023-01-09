<script lang="ts" setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'page',
})
const config = useRuntimeConfig();
const url = `${config.public.api_url}/users/`
const profiles = ref([] as any)
$fetch(url, {
  method: 'GET',
}).then((res) => {
  profiles.value = res
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="'Discovery verified accounts'" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem
          debitis ab dolorum tempore placeat possimus perferendis porro sit aut
          nobis quasi hic consequuntur, atque impedit nihil totam illo odit?
          {{ profiles }}
        </p>
      </PageSection>
      <PageSection> </PageSection>
    </PageBody>
  </PageWrapper>
</template>
