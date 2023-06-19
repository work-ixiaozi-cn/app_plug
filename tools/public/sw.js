console.log('================================')

this.addEventListener('install', async (event) => {
    event.waitUntil(async () => {
        const cache = await caches.open('v1')
        await cache.addAll(['/'])
    })
    console.log('install', {event})
})

this.addEventListener("activate", (event) => {
    console.log('activate', {event})
})
