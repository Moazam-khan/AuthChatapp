import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, FormEvent } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import index from "@/styles/index.scss"

function Login() {
  // Define state types explicitly
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>(""); // State for email validation error

  // Function to validate email format
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return regex.test(email);
  };

  // Type for form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate email before proceeding
    if (!validateEmail(email)) {
      setEmailError("Invalid email format."); // Set error message if invalid
      return; // Stop the submission process
    } else {
      setEmailError(""); // Clear the error if email is valid
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if email is verified
      await user.reload(); // Reload the user to get the latest information
      if (!user.emailVerified) {
        toast.error("Please verify your email before logging in.", {
          position: "bottom-center",
        });
        return; // Stop the login process
      }

      console.log("User logged in successfully");
      window.location.href = "/profile"; // Redirect to the profile page
      toast.success("User logged in successfully", {
        position: "top-center",
      });
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{alignItems:'center'}}>
      <h1>Login</h1>

      <div >
        <label style={{}}>Email address</label>
        <input
          type="email"
          className={`form-control ${emailError ? 'is-invalid' : ''}`} // Add error class if there's an error
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(""); // Reset error on change
          }}
        />
        {emailError && <div className="invalid-feedback">{emailError}</div>} {/* Show error message */}
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
        Login
        </button>
      </div>
      <p className="forgot-password text-right" style={{textAlign:'center'}} >
        New user <a href="/register">Register Here</a>
      </p>
    </form>
  );
}

export default Login;
