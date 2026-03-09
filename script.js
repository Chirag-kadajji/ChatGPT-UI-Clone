// --- DOM Elements ---
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatContainer = document
  .getElementById('chat-container')
  .querySelector('.max-w-4xl');
const welcomeMessage = document.getElementById('welcome-message');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const toolsBtn = document.getElementById('tools-btn');
const toolsPopup = document.getElementById('tools-popup');

// --- Event Listeners ---
chatForm.addEventListener('submit', handleSendMessage);
chatInput.addEventListener('input', autoResizeTextarea);
chatInput.addEventListener('keydown', handleKeydown);
menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
toolsBtn.addEventListener('click', toggleToolsPopup);

// Close popup if clicking outside
document.addEventListener('click', (e) => {
  if (!toolsPopup.contains(e.target) && !toolsBtn.contains(e.target)) {
    hideToolsPopup();
  }
});

// --- Functions ---

function toggleToolsPopup() {
  const isHidden = toolsPopup.classList.contains('opacity-0');
  if (isHidden) {
    toolsPopup.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
  } else {
    hideToolsPopup();
  }
}

function hideToolsPopup() {
  toolsPopup.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
}

function toggleSidebar() {
  sidebar.classList.toggle('-translate-x-full');
  overlay.classList.toggle('hidden');
}

function handleSendMessage(e) {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  if (welcomeMessage) {
    welcomeMessage.style.display = 'none';
  }

  appendMessage(message, 'user');

  chatInput.value = '';
  autoResizeTextarea();
  chatInput.style.height = 'auto';

  setTimeout(() => {
    const botResponse =
      'This is a simulated 2025 response. The UI has been updated to reflect the latest design trends, including a consolidated tools menu and a more polished aesthetic. Full functionality requires a backend connection.';
    appendMessage(botResponse, 'bot');
  }, 1200);
}

function appendMessage(text, sender) {
  const isUser = sender === 'user';
  const messageWrapper = document.createElement('div');
  messageWrapper.className = `w-full ${isUser ? '' : 'bg-black/20'}`;

  const messageDiv = document.createElement('div');
  messageDiv.className = 'max-w-4xl mx-auto p-4 md:p-6 flex items-start gap-5';

  const avatarDiv = document.createElement('div');
  avatarDiv.className =
    'w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-bold text-white';
  if (isUser) {
    avatarDiv.classList.add('bg-blue-600');
    avatarDiv.textContent = 'A';
  } else {
    avatarDiv.classList.add('bg-teal-600');
    avatarDiv.innerHTML = `<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`;
  }

  const textDiv = document.createElement('div');
  // Using a simple div instead of prose for more control
  textDiv.className = 'text-gray-200 pt-0.5 leading-relaxed';
  textDiv.textContent = text;

  messageDiv.appendChild(avatarDiv);
  messageDiv.appendChild(textDiv);
  messageWrapper.appendChild(messageDiv);
  chatContainer.appendChild(messageWrapper);

  chatContainer.parentElement.scrollTop =
    chatContainer.parentElement.scrollHeight;
}

function autoResizeTextarea() {
  chatInput.style.height = 'auto';
  // Set a max-height to prevent infinite growth
  const maxHeight = 200;
  const newHeight = Math.min(chatInput.scrollHeight, maxHeight);
  chatInput.style.height = newHeight + 'px';
}

function handleKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    chatForm.requestSubmit();
  }
}