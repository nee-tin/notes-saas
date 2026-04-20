import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [user, setUser] = useState(null);

  const demoEmail = "demo@example.com";
  const demoPassword = "demopassword";

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Demo login
  const handleDemoLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, demoEmail, demoPassword);
      alert(`Demo login successful! Welcome ${userCredential.user.email}`);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
<nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-3">      

<div className="flex justify-between items-center w-full max-w-full">
        <h2 className="text-2xl font-semibold text-gray-900">
            Notes<span className="text-indigo-600">SaaS</span>
       </h2>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm sm:text-lg">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-800 text-sm sm:text-lg px-3 sm:px-4 py-2 rounded-md border border-red-800 hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
           <button
  onClick={handleDemoLogin}
  className="
    bg-indigo-700 text-white px-4 py-2 mr-8 rounded-lg
    shadow-sm hover:shadow-md
    transition-all duration-200 ease-in-out
    hover:-translate-y-[1px]
    active:translate-y-[1px]
    active:shadow-sm
  "
>
  Login <span className="opacity-80">(Demo)</span>
</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
