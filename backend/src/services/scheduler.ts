import cron from 'node-cron'
import { fetchTicketmasterEvents } from './ticketmaster.js'
import { fetchTrafficData } from './traffic.js'

let cachedEvents: any[] = []
let cachedTraffic: any[] = []

// Initialize cache
export async function initializeCache() {
  console.log('Initializing cache...')
  await updateCache()
}

// Update cache every hour
export function setupScheduledJobs() {
  // Update every hour
  cron.schedule('0 * * * *', async () => {
    console.log('Scheduled job: Updating cache...')
    await updateCache()
  })

  // Check traffic every 15 minutes
  cron.schedule('*/15 * * * *', async () => {
    console.log('Scheduled job: Checking traffic...')
    cachedTraffic = await fetchTrafficData()
  })
}

async function updateCache() {
  try {
    const [events, traffic] = await Promise.all([
      fetchTicketmasterEvents(),
      fetchTrafficData(),
    ])
    cachedEvents = events
    cachedTraffic = traffic
    console.log(`Cache updated: ${events.length} events, ${traffic.length} traffic items`)
  } catch (error) {
    console.error('Error updating cache:', error)
  }
}

export function getCachedEvents() {
  return cachedEvents
}

export function getCachedTraffic() {
  return cachedTraffic
}
