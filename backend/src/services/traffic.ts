export async function fetchTrafficData() {
  try {
    const response = await fetch('https://www.vegvesen.no/public/webapi/traffic-conditions/v1/events')
    if (!response.ok) {
      throw new Error(`Traffic API error: ${response.status}`)
    }

    const data = await response.json()
    const events = data.events || []

    // Filter for Fornebu/Oslo area
    const fornebuTraffic = events.filter((event: any) => {
      const description = (event.description || '').toLowerCase()
      return description.includes('fornebu') || 
             description.includes('oslo') || 
             description.includes('e18') ||
             description.includes('e6')
    })

    return fornebuTraffic.slice(0, 20).map((event: any) => ({
      id: event.id,
      title: event.headline || 'Trafikkmarshal',
      description: event.description || 'Trafikkhinder',
      severity: getSeverity(event.eventType),
      timestamp: new Date(event.startTime).toISOString(),
    }))
  } catch (error) {
    console.error('Error fetching traffic data:', error)
    return []
  }
}

function getSeverity(eventType: string): 'info' | 'warning' | 'danger' {
  const type = (eventType || '').toLowerCase()
  if (type.includes('accident') || type.includes('ulykke')) return 'danger'
  if (type.includes('roadwork') || type.includes('arbeid')) return 'warning'
  return 'info'
}
