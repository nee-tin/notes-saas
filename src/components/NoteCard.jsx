


function NoteCard({ note, onDelete }) {
  return (
    <div className="bg-blue-400 p-4 rounded-xl shadow-sm mb-4 border hover:shadow-md transition flex justify-between items-start">
      <div>
        <p className="p-4 bg-white texr-gray-800 rounded-lg shadow hover:shadow-lg transition">{note.text}</p>
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.25 rounded m-2">
          {note.tag}
        </span>
        <span className="text-xs text-gray-500">{note.date}</span> 
      </div>
      <button
        onClick={onDelete}
        className="bg-red-500 rounded px-2 py-1 text-white text-sm hover:scale-105 transition-transform"
      >
        Delete
      </button> 
    </div>
  )
}

export default NoteCard;