import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./components/Navbar";
import NotesApp from "./components/NotesApp";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {user ? <NotesApp /> : <Home />}
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        © 2026 Nitin K. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
