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
    <nav className="bg-gradient-to-r from-gray-600 via-pink-400 to-gray-600 text-white px-4 sm:px-6 py-2">
      <div className="flex justify-between items-center w-full max-w-full">
        <h2 className="text-xl sm:text-2xl font-bold">Notes SaaS</h2>

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
    bg-blue-600
    text-sm sm:text-lg
    px-3 sm:px-4 py-2
    rounded-md
    border border-blue-500

    shadow-sm
    transition-all duration-75

    hover:bg-blue-700

    active:translate-y-[1px]
    active:shadow-sm
    active:bg-blue-700
  "
>
  Login <b className="text-sm sm:text-md">(Demo)</b>
</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
