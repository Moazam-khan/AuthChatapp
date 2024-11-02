import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase"; // Adjust the import according to your Firebase setup
import { doc, getDoc, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import profile from "../styles/profile.css";
import bk from "../assets/NewAssets/bk.jpg"

// Define a type for the user details
interface UserDetails {
  lastName: string;
  firstName: string;
  email: string;
  photo: string;
}

// Define a type for the chat messages
interface ChatMessage {
  senderFirstName: string;
  senderLastName: string;
  message: string;
}

function Profile() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  // Function to fetch user data from Firestore
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data() as UserDetails);
        } else {
          setError("User data not found in Firestore");
        }
      } else {
        setError("User is not logged in");
      }
    });
  };

  // Listen for new messages from Firestore and display them in real-time
  useEffect(() => {
    fetchUserData();

    const q = query(collection(db, "chatMessages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data() as ChatMessage);
      setMessages(newMessages);
    });

    return () => {
      unsubscribe(); // Unsubscribe when component unmounts
    };
  }, []);

  // Function to handle user logout
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  }

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const currentUser = auth.currentUser;
    if (currentUser) {
      const firstName = userDetails?.firstName || "Anonymous"; // Get the first name
      const lastName = userDetails?.lastName || ""; // Get the last name

      try {
        await addDoc(collection(db, "chatMessages"), {
          senderFirstName: firstName,
          senderLastName: lastName,
          message: inputMessage,
          timestamp: new Date(), // Still store the timestamp for ordering
        });
        setInputMessage(""); // Clear input after sending
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  // Handle pressing the Enter key to send a message
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleButtonClick = () => {
    handleSendMessage();
    handleLogout();
  };
  

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : userDetails ? (
        <>
        
      
          <h3>Welcome {userDetails.firstName} {userDetails.lastName} </h3>

          <div>
          
          
          </div>

          {/* Chat functionality */}
          <div style={{ marginTop: "20px", padding: "10px", borderRadius: "5px",backgroundColor:'black' }}>
            <h3 style={{color:"white"}}>Near&Dear Chatroom ❤️</h3>
            <div
              style={{
                
                padding: "5px",
                height: "200px",
                overflowY: "scroll",
                marginBottom: "5px",
                backgroundImage: `url(${bk})`, // Set background image here
                borderRadius:'3px'
              }}
            >
              {messages.map((msg, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <strong>
                    {msg.senderFirstName} {msg.senderLastName}:
                  </strong>
                  <div>{msg.message}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Type a message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Add the keydown event handler
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>

          <button  
           onClick={handleButtonClick} 
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
             
              }}
             className="btn btn-primary" 
             
     >
              Logout
          </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
