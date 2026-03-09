# ChatGPT UI Clone (TailwindCSS + JavaScript)

A modern **ChatGPT-style chat interface** built using **HTML, TailwindCSS, and JavaScript**.
This project replicates the **look and feel of modern AI chat applications**, including a sidebar, chat interface, responsive design, and interactive message rendering.

The current version simulates AI responses on the frontend. Future versions can integrate **AI APIs such as OpenAI or Google Gemini** to create a fully functional AI chatbot.

---

##  Features

* Modern **ChatGPT-inspired UI**
* Responsive **sidebar navigation**
* **Pinned and recent conversations layout**
* Dynamic **chat message rendering**
* **Auto-resizing textarea** for user input
* **Enter to send** and **Shift + Enter for newline**
* Interactive **tools popup menu**
* **Mobile responsive layout**
* Smooth **scroll behavior**
* Clean **dark UI design**

---

##  Tech Stack

* **HTML5**
* **TailwindCSS**
* **JavaScript (Vanilla JS)**
* **Google Fonts (Inter)**
* **SVG Icons**

---

##  Project Structure

```
chatgpt-ui-clone
│
├── index.html      # Main UI layout
├── styles.css      # Custom styling
├── script.js       # Chat functionality
└── README.md       # Project documentation
```

---

##  UI Overview

The interface contains three main sections:

### Sidebar

* ChatGPT logo
* Pinned conversations
* Recent chats
* User profile

### Chat Area

* Welcome message
* User and bot message display
* Scrollable conversation container

### Input Area

* Tools menu
* Message textarea
* Send button
* Auto-expanding input field

---

##  How It Works

1. User types a message in the input box.
2. The message is captured by the `submit` event listener.
3. The message is dynamically added to the chat container.
4. A simulated AI response appears after a short delay.

Example logic:

```javascript
function handleSendMessage(e) {
  e.preventDefault();

  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage(message, 'user');

  setTimeout(() => {
    const botResponse = "This is a simulated AI response.";
    appendMessage(botResponse, 'bot');
  }, 1200);
}
```

---

##  Responsive Design

This UI adapts to different screen sizes.

Features include:

* Mobile sidebar toggle
* Overlay navigation
* Flexible layout using TailwindCSS utilities

---

##  Future Enhancements

This project can be upgraded into a **fully functional AI chatbot**. Planned improvements include:

###  OpenAI API Integration

Connect the chat interface to the **OpenAI API** to generate real AI responses.

Example implementation:

```javascript
async function getAIResponse(message) {

 const response = await fetch("https://api.openai.com/v1/chat/completions", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     "Authorization": "Bearer YOUR_API_KEY"
   },
   body: JSON.stringify({
     model: "gpt-4o-mini",
     messages: [
       { role: "user", content: message }
     ]
   })
 });

 const data = await response.json();
 return data.choices[0].message.content;
}
```

---

###  Chat History Storage

Store conversations using:

* LocalStorage
* Firebase
* MongoDB

---

###  AI Model Integration

Support multiple AI providers:

* OpenAI
* Google Gemini
* HuggingFace
* OpenRouter

---

###  Typing Animation

Add a typing effect to simulate AI thinking.

---

###  Markdown Support

Allow AI responses to render:

* Code blocks
* Lists
* Formatting

---

###  Conversation Management

Add features like:

* Create new chat
* Rename chats
* Delete conversations
* Save conversation history

---

##  Learning Outcomes

This project demonstrates:

* Frontend UI architecture
* DOM manipulation using JavaScript
* Responsive web design
* Interactive user interfaces
* Event handling
* Chat interface logic

---

##  Use Cases

This project can be used as a foundation for:

* AI chat applications
* Customer support chatbots
* AI assistants
* Developer tools
* Conversational interfaces

---

##  License

This project is open-source and available under the **MIT License**.

---

##  Author

Developed as a frontend UI project demonstrating modern chat application design using **HTML, TailwindCSS, and JavaScript**.
