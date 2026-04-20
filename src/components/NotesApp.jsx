

import { useState, useEffect } from "react"
import NoteCard from "./NoteCard" 

function NotesApp() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
      return saved ? JSON.parse(saved) : [];  
  })

  const [input, setInput] = useState("");
  const [tag, setTag] = useState("");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const tags = ["All", ...new Set(notes.map(note => note.tag))];

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;

    const newNotes = [
      { 
        id: Date.now(), 
        text: input, 
        date: new Date().toLocaleString(),
        tag: tag || "General"
      },
      ...notes
    ];
    setNotes(newNotes);
    setInput("");
    setTag("");
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const filteredNotes = notes.filter(note => {
      const matchesTag = filter === "All" || note.tag === filter
      const matchesSearch = note.text.toLowerCase().includes(search.toLowerCase())
      return matchesTag && matchesSearch
     })

  return (
    <div className="w-full bg-sky-100 mx-auto px-6 py-14">

    <div className="max-w-6xl mx-auto px-6">
     <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold mb-3 text-gray-800">Notes Dashboard</h2>
      <p className="text-gray-500 mb-6">Capture your thoughts and organize them with tags.</p>
      </div>

      <div className="mb-10 flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Tag (e.g. work, personal)"
          className="p-3 border bg-white rounded-lg"
          value={tag}
          onChange={e => setTag(e.target.value)}
        />
        <input
          type="text"
          className="flex-1 p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write a note..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addNote()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={addNote}
        >
          Add
        </button>
      </div>
      
        <div className="flex">
        <input type="text" 
        placeholder="Search notes..."
        className="w-64 bg-white text-sm mb-6 py-2 px-2 p-r border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={e => setSearch(e.target.value)}/> 
      </div>

      {/* Tag filter buttons */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {tags.map(tagItem => (
          <button
            key={tagItem}
            onClick={() => setFilter(tagItem)}
            className={`px-3 py-1 rounded-full text-sm border ${
              filter === tagItem
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {tagItem}
          </button>
        ))}
      </div>

      {/* Notes list or empty message */}
      <div>
        {filteredNotes.length === 0 ? (
          <p className="text-center text-gray-400 mb-20">
            No notes found. Try adding a new one or change the filter/search...     
          </p>
        ) : (
          filteredNotes.map((note, id) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={() => deleteNote(note.id)}
            />
          ))
        )}
        </div>
      </div>
    </div>
)}
export default NotesApp;