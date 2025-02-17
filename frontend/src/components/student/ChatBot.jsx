import React, { useState, useEffect, useMemo } from "react";
import "./Chatbot.css";
import { FaMicrophone, FaMicrophoneSlash, FaPaperclip, FaPaperPlane } from "react-icons/fa";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isListening, setIsListening] = useState(false);

    // ✅ Use useMemo to persist recognition across renders
    const recognition = useMemo(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        return SpeechRecognition ? new SpeechRecognition() : null;
    }, []);

    useEffect(() => {
        if (!recognition) return;

        recognition.continuous = true;
        recognition.lang = "en-US";
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const transcript = event.results[event.results.length - 1][0].transcript;
            setInput(transcript);
        };
    }, [recognition]); // ✅ No unnecessary reinitialization

    const handleSpeechStart = () => {
        if (recognition) {
            setIsListening(true);
            recognition.start();
        }
    };

    const handleSpeechStop = () => {
        if (recognition) {
            setIsListening(false);
            recognition.stop();
        }
    };

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { sender: "user", text: input };
            setMessages((prev) => [...prev, userMessage]);
            setInput("");

            try {
                const response = await fetch("http://localhost:5001/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: input }),
                });

                const data = await response.json();
                console.log("Chatbot response:", data);

                let botReply = "⚠️ No response received.";
                if (data.reply && typeof data.reply === "object" && Array.isArray(data.reply.parts)) {
                    botReply = data.reply.parts.map(part => part.text).join(" ");
                } else if (typeof data.reply === "string") {
                    botReply = data.reply;
                }

                setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
            } catch (error) {
                console.error("Chatbot API error:", error);
                setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Error connecting to AI server." }]);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSend();
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const fileURL = URL.createObjectURL(file);
        setMessages((prev) => [...prev, { sender: "user", text: "📁 Uploaded an image", image: fileURL }]);

        try {
            const response = await fetch("http://localhost:5001/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                setMessages((prev) => [...prev, { sender: "bot", text: `📜 Extracted Text: ${data.extractedText}` }]);
            } else {
                setMessages((prev) => [...prev, { sender: "bot", text: "❌ Could not extract text." }]);
            }
        } catch (error) {
            console.error("Upload error:", error);
            setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Error uploading file." }]);
        }
    };

    return (
        <div className="chatbot-wrapper">
            <div className="chatbot-container">
                <h2 className="chatbot-heading">Teacher AI</h2>
                <div className="chat-history">
                    {messages.map((message, index) => (
                        <div key={index} className={`chat-message ${message.sender}`}>
                            {message.image ? (
                                <img src={message.image} alt="Uploaded file" className="uploaded-image" />
                            ) : (
                                <p>{message.text}</p>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="bottom-controls">
                    <input type="file" id="fileInput" accept="image/*" hidden onChange={handleFileUpload} />
                    <button className="icon-button file-button" onClick={() => document.getElementById("fileInput").click()}>
                        <FaPaperclip />
                    </button>
                    
                    <div className="input-container">
                        <input 
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            onKeyPress={handleKeyPress} 
                            placeholder="Type a message..." 
                            className="chat-input" 
                        />
                        <button className="send-button" onClick={handleSend}><FaPaperPlane /></button>
                    </div>

                    <button className="icon-button voice-button" onClick={isListening ? handleSpeechStop : handleSpeechStart}>
                        {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;