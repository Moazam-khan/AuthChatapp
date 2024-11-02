import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, FormEvent } from "react";
import { auth, db } from "./firebase"; // Adjust the import according to your project structure
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { sendEmailVerification } from "firebase/auth"; // Import sendEmailVerification

function Register() {
  // State variables with type annotations
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [emailError, setEmailError] = useState<string>(""); // State for email error

  // Function to validate email
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return regex.test(email);
  };

  // Handle register function with correct typing for the event
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      return; // Stop the form submission
    } else {
      setEmailError(""); // Clear error if email is valid
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // If user is created, set user data in Firestore
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "", // Placeholder for photo field
        });

        // Send email verification
        await sendEmailVerification(user);
        console.log("Verification email sent!");

        toast.info("Verification email sent! Please check your inbox.", {
          position: "top-center",
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
    <form onSubmit={handleRegister}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className={`form-control ${emailError ? 'is-invalid' : ''}`} // Add error class if there's an error
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(""); // Reset error on change
          }}
          required
        />
        {emailError && <div className="invalid-feedback">{emailError}</div>} {/* Show error message */}
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right" style={{ textAlign:'center'}}>
        Already registered <a href="/login">Login</a>
      </p>
    </form>
  );
}

export default Register;
