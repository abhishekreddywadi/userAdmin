import React, { useState, useEffect } from 'react';
import './userMessage.css';
import dummyProfilePic from "../../../../../assets/img/user1.png";

const UserMessage = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Anvari Siluya',
      status: 'Online',
      lastMessage: 'How are you? :)',
      time: '1 min ago',
      isTyping: false,
      avatar: dummyProfilePic,
      unreadCount: 3,
      lastSeen: 'Today at 2:45 PM'
    },
    {
      id: 2,
      name: 'John Johnson',
      status: 'Offline',
      lastMessage: 'I am fine. When you are...',
      time: '1 day ago',
      isTyping: false,
      avatar: dummyProfilePic,
      unreadCount: 0,
      lastSeen: 'Yesterday at 10:00 AM'
    },
    {
      id: 3,
      name: 'Raees Steewer',
      status: 'Online',
      lastMessage: 'Thats awesome.',
      time: '3 days ago',
      isTyping: false,
      avatar: dummyProfilePic,
      unreadCount: 1,
      lastSeen: '3 days ago'
    }
  ]);

  const initialMessages = [
    {
      id: 1,
      senderId: 1,
      text: 'How are you? AdminuxPRO we were waited since long to be here.',
      time: '8:00 pm',
      date: '2024-12-26',
      seen: true
    },
    {
      id: 2,
      senderId: 'me',
      text: 'AdminuxPRO is HTML template can be used in various business domains like Manufacturing, inventory, IT, administration etc. for admin dashboards',
      time: '8:00 pm',
      date: '2024-12-26',
      seen: true
    },
    {
      id: 3,
      senderId: 1,
      text: 'That sounds great! Can you tell me more about its features?',
      time: '8:01 pm',
      date: '2024-12-26',
      seen: true
    },
    {
      id: 4,
      senderId: 'me',
      text: 'Of course! It includes responsive layouts, dark/light themes, multiple dashboard variations, and extensive UI components.',
      time: '8:02 pm',
      date: '2024-12-26',
      seen: true
    }
  ];

  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  // Handle typing indicator
  const handleTyping = () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    setIsTyping(true);
    
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
    
    setTypingTimeout(timeout);
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
    handleTyping();
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        senderId: 'me',
        text: newMessage,
        time: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: 'numeric', 
          hour12: true 
        }),
        date: new Date().toISOString().split('T')[0],
        seen: false
      };

      setMessages(prev => [...prev, newMsg]);
      setNewMessage('');
      setIsTyping(false);

      // Auto scroll to bottom after sending message
      const messagesContainer = document.querySelector('.messages-container');
      if (messagesContainer) {
        setTimeout(() => {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);
      }

      // Simulate contact typing after 1 second
      setTimeout(() => {
        setContacts(prev =>
          prev.map(contact =>
            contact.id === selectedContact.id ? { ...contact, isTyping: true } : contact
          )
        );

        // Add reply and seen status after 4 seconds
        setTimeout(() => {
          // Mark previous message as seen
          setMessages(prev => 
            prev.map(msg => 
              msg.id === newMsg.id ? { ...msg, seen: true } : msg
            )
          );

          const reply = {
            id: messages.length + 2,
            senderId: selectedContact.id,
            text: 'Thanks for the information! This is really helpful.',
            time: new Date().toLocaleTimeString('en-US', { 
              hour: 'numeric', 
              minute: 'numeric', 
              hour12: true 
            }),
            date: new Date().toISOString().split('T')[0],
            seen: true
          };

          setMessages(prev => [...prev, reply]);
          setContacts(prev =>
            prev.map(contact =>
              contact.id === selectedContact.id ? { ...contact, isTyping: false } : contact
            )
          );

          if (messagesContainer) {
            setTimeout(() => {
              messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 100);
          }
        }, 4000);
      }, 1000);
    }
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    // Clear unread count when selecting contact
    setContacts(prevContacts =>
      prevContacts.map(c =>
        c.id === contact.id ? { ...c, unreadCount: 0 } : c
      )
    );
  };

  useEffect(() => {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-container">
      {/* Left Sidebar */}
      <div className="chat-sidebar">
        <div className="chat-header">
          <div className="tab-buttons">
            <button 
              className="active"
              onClick={() => {}}
            >
              Contacts
            </button>
            <button 
              onClick={() => {}}
            >
              Status
            </button>
            <button 
              onClick={() => {}}
            >
              Activities
            </button>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Contact"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="contacts-list">
          {filteredContacts.map(contact => (
            <div
              key={contact.id}
              className={`contact-item ${selectedContact.id === contact.id ? 'active' : ''}`}
              onClick={() => handleContactSelect(contact)}
            >
              <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
              <div className="contact-info">
                <div className="contact-header">
                  <h4>{contact.name}</h4>
                  <span className="time">{contact.time}</span>
                </div>
                <p className="last-message">
                  {contact.isTyping ? 'Typing...' : contact.lastMessage}
                </p>
              </div>
              {contact.unreadCount > 0 && (
                <span className="unread-count">{contact.unreadCount}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-area-header">
          <div className="chat-contact-info">
            <img src={selectedContact.avatar} alt={selectedContact.name} />
            <div>
              <h3>{selectedContact.name}</h3>
              <span className={`status ${selectedContact.status.toLowerCase()}`}>
                {selectedContact.status}
              </span>
              {selectedContact.isTyping && (
                <div className="typing-indicator">
                  typing
                  <div className="typing-dots">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              )}
              <span className="last-seen">{selectedContact.lastSeen}</span>
            </div>
          </div>
          <div className="chat-actions">
            <button className="more-btn">...</button>
            <button className="close-btn">✕</button>
          </div>
        </div>

        <div className="messages-wrapper">
          <div className="messages-container">
            {messages.map(message => (
              <div
                key={message.id}
                className={`message ${message.senderId === 'me' ? 'sent' : 'received'}`}
              >
                {message.senderId !== 'me' && (
                  <img src={selectedContact.avatar} alt="" className="message-avatar" />
                )}
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.time}
                    {message.senderId === 'me' && (
                      <span className="seen-status">
                        {message.seen ? (
                          <span className="double-check">✓✓</span>
                        ) : (
                          <span>✓</span>
                        )}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message received">
                <img src={selectedContact.avatar} alt="" className="message-avatar" />
                <div className="typing-indicator">
                  <div className="typing-dots">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <form className="message-input" onSubmit={handleSendMessage}>
          <button type="button" className="emoji-btn">😊</button>
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage(e)}
          />
          <button type="button" className="attach-btn">📎</button>
          <button type="submit" className="send-btn" disabled={!newMessage.trim()}>➤</button>
        </form>
      </div>

      {/* Right Sidebar - User Profile */}
      <div className="user-profile">
        <div className="profile-header">
          <img src={selectedContact.avatar} alt={selectedContact.name} className="profile-avatar" />
          <h2>{selectedContact.name}</h2>
          <p className="profile-title">UI UX Designer</p>
        </div>
        <div className="profile-info">
          <p className="profile-description">
            AdminuxPRO is HTML template can be used in various business domains like Manufacturing,
            inventory, IT, administration etc. for admin dashboards
          </p>
          <div className="profile-details">
            <div className="detail-item">
              <span className="icon">📞</span>
              <span>+00 00 00000 00000</span>
            </div>
            <div className="detail-item">
              <span className="icon">✉️</span>
              <span>info@maxartkiller.in</span>
            </div>
            <div className="detail-item">
              <span className="icon">👥</span>
              <span>254</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;