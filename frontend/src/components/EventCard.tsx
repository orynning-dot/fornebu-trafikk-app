interface Event {
  id: string
  name: string
  date: string
  venue: string
  url: string
  image: string
  type: string
}

interface Props {
  event: Event
}

export default function EventCard({ event }: Props) {
  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString('no-NO', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
    >
      {event.image && (
        <div className="h-40 overflow-hidden bg-slate-700">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{event.name}</h3>
        <div className="space-y-2 text-sm text-slate-300">
          <p>📅 {formattedDate}</p>
          <p>📍 {event.venue}</p>
          {event.type && <p className="text-blue-400 text-xs">{event.type}</p>}
        </div>
      </div>
    </a>
  )
}
