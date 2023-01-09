<script lang="ts" setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'page',
})
const config = useRuntimeConfig()
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
        <div class="flex">
          <nuxt-link v-for="profile in profiles" :to="`/users/${profile.name}`">
            <div  class="flex items-center ml-12">
              <div class="flex-shrink-0 w-10 h-10">
                <img class="w-full h-full rounded-full" alt="" />
              </div>
              <div class="ml-2 text-sm">
                <p class="md:text-base whitespace-pre">
                  {{ profile.name }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </PageSection>
      <PageSection> </PageSection>
    </PageBody>
  </PageWrapper>
</template>
