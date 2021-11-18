import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuthentication from "../Firebase/firebase.init";
import axios from "axios";
initializeFirebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        isAdminUser(user.email);
      } else {
        setUser({});
      }
    });
  }, [auth]);

  const RegisterWithEmail = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        userMongoDb1(email);
        updateDisplayName(name);
        setUser(result.user);
        isAdminUser(result.user.email);
        console.log(name);
         setName(name);
        signInusingEmailPassword();
        verifyEmail();
        setError("");
      })
      .catch((error) => {
        if ("Firebase: Error (auth/email-already-in-use)." === error.message)
          setError("User already exist,please login!");
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {});
  };

  const signInusingEmailPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        isAdminUser(result.user.email);
      })
      .catch((error) => {
        if ("Firebase: Error (auth/wrong-password)." === error.message)
          setError("Email/Password is incorrect!");
        
      });
  };
  const isAdminUser = (email) => {
    fetch(`http://localhost:5000/getuser/${email}`)
      .then((response) => response.json())
      .then((data) => {
        data ? setAdmin(data.isAdmin) : setAdmin(false);
      });
  };
  const userMongoDb1 = () => {
    axios
      .post("http://localhost:5000/users", {
        name,
        email,
        isAdmin: false,
        password,
      })
      .then();
    
  };
  const handleLogOut = () => {
    setUser({});
    setError("");
    setName("");
    setPassword("");
    setAdmin(false);
    signOut(auth).then((result) => {});
  };
  const updateDisplayName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };

  return {
    handleLogOut,
    RegisterWithEmail,
    setEmail,
    setPassword,
    setName,
    user,
    error,
    signInusingEmailPassword,
    name,
    admin,
  };
};

export default useFirebase;