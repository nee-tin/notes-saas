import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Protected({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ⏳ Loading state
  if (user === undefined) return <h2>Loading...</h2>;

  // ❌ Not logged in
  if (!user) return <h2>Please login to access Notes</h2>;

  // ✅ Logged in
  return children;
}

export default Protected;