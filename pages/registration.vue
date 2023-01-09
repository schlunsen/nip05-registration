<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

const clickRegistration = () => {
  console.log('click registration')

  // Post data

  // Display QR code
  var qrcode = new QRCode(document.getElementById('qrcode'), {
    text:
      'lnbc1p3mhu6rpp5kfp6taxpvdfck9hwctnxudv037x8ahel5q0csy5vwuqv96z0j64qdqu2askcmr9wssx7e3q2dshgmmndp5scqzpgxqyz5vqsp5gg60v3zkjv244t0jv3k70x75w89qrlyfjwx458rhyf2h6ag4y5gq9qyyssqm3fhh7ekquhudgg0w7kmcv285vkjj3mqju2vlqzq8e6ktvxcjvdnjujwy5yvtusegunzfxc6mcus5almk4vnmewfhn8qvx365mza5ycp8vkh7d',
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
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
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
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="publickey"
              type="text"
              placeholder="npub..."
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex-row-reverse">
            <button
              @click="clickRegistration"
              class="bg-blue-700 w-full hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2022 Be Kind Or Rewind. All rights reserved.
        </p>
        <div class="flex justify-end">
          <div id="qrcode" class="w-full"></div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
