export default defineAppConfig(() => {
  const config = useRuntimeConfig()
  return {
    name: 'Be Kind Or Rewind',
    api_url: config.public.api_url || 'http://localhost:8000',
  }
})
