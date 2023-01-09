<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

const clickRegistration = async () => {
  console.log('click registration')

  // Post data
  const url = 'http://localhost:8000/api/create'
  const username = 'Test2'
  const formData = new FormData()
  formData.append('username', username)
  const data = await $fetch(url, {
    method: 'POST',
    body: formData,
  })

  // Display QR code
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: data.lnurl,
    width: 128 * 2,
    height: 128 * 2,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  })
}

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.blank.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.blank.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="'Nostr Registration'" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <hr class="mb-12" />
        <div class="mb-6">
          <p>
            Welcome to our public key and username registration service! We are
            excited to have you on board and we look forward to helping you
            secure your digital assets.
          </p>
          <p>
            For just 2500 satoshis, you can register your public key and choose
            a unique username that will represent you on our platform. This will
            give you access to all of our features and allow you to interact
            with other users in a secure and trusted environment.
          </p>
          <p class="mt-2">
            Thank you for choosing to register with us. We hope you have a great
            experience and we look forward to helping you achieve your goals.
          </p>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              id="username"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Public key
            </label>
            <input
              id="publickey"
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="npub..."
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex-row-reverse">
            <button
              class="bg-blue-700 w-full hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="clickRegistration"
            >
              Register
            </button>
          </div>
        </form>

        <div class="flex justify-center">
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="w-full flex-justify-center">
              <div id="qrcode" class=""></div>
            </div>
            <p class="mt-4">Pay 2500 satoshis in order to get verified</p>
            <div class="w-full">
              <button
                class="bg-blue-700 w-full hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
