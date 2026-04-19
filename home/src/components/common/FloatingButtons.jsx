import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingButtons = () => {
  const phoneNumber = '9760075738';
  const navigate = useNavigate();
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requesterPhone, setRequesterPhone] = useState('');

  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:${phoneNumber}`;

  const handleRequestCall = (e) => {
    e.preventDefault();
    if (requesterPhone) {
      // You can replace this with your actual API call or SMS integration
      alert(`Request sent! We will call you back at ${requesterPhone}`);
      setRequesterPhone('');
      setShowRequestForm(false);
      // Navigate to service detail page after request
      navigate('/service/1'); // You can change the ID as needed
    }
  };

  const handleRequestCallClick = () => {
    // Navigate directly to service detail page
    navigate('/service/1'); // You can change the ID as needed
  };

  return (
    <>
      {/* Request Call Button (Left side - vertically centered) */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={handleRequestCallClick}
          className="group relative flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          
          Request Callback
          <span className="absolute left-full ml-2 whitespace-nowrap bg-gray-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Get a callback
          </span>
        </button>
      </div>

      {/* WhatsApp & Call Buttons (Right side - vertically centered) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-white"
          >
            <path d="M12.031 1.769c-5.425 0-9.83 4.404-9.83 9.83 0 1.744.457 3.385 1.254 4.804L1.5 22.5l6.246-1.951c1.346.734 2.889 1.152 4.531 1.152 5.425 0 9.83-4.404 9.83-9.83 0-5.426-4.405-9.83-9.83-9.83zm5.178 14.057c-.267.745-1.555 1.394-2.54 1.535-.624.09-1.26.054-1.857-.104-1.105-.293-2.181-.911-3.058-1.787-.879-.877-1.498-1.953-1.791-3.058-.158-.597-.194-1.233-.104-1.857.141-.985.79-2.273 1.535-2.54.191-.069.392-.069.583-.069.186 0 .371.034.541.104.288.117.512.397.655.685.219.444.468.9.693 1.346.15.297.266.634.266.956 0 .352-.157.666-.397.904-.172.172-.352.344-.533.516-.157.148-.335.304-.493.435-.134.113-.304.279-.258.505.053.287.24.55.441.781.554.64 1.244 1.144 2.047 1.45.297.113.617.187.941.215.2.017.401-.012.59-.085.319-.125.58-.353.764-.643.181-.287.264-.622.264-.956 0-.332-.125-.646-.264-.922-.195-.378-.47-.708-.756-1.017-.223-.241-.47-.458-.717-.676-.152-.135-.304-.271-.456-.406-.16-.143-.326-.283-.448-.455-.105-.148-.131-.339-.068-.507.104-.277.342-.492.599-.617.344-.167.716-.245 1.081-.235.387.01.768.114 1.113.292.429.22.813.522 1.125.883.307.355.534.769.666 1.223.13.454.152.926.066 1.384z" />
          </svg>
          <span className="absolute right-16 whitespace-nowrap bg-gray-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a
          href={callLink}
          className="group relative flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          aria-label="Call now"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-white"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="absolute right-16 whitespace-nowrap bg-gray-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Call
          </span>
        </a>
      </div>

      {/* Modal for Request Call Form (optional - if you want to keep the form) */}
      {showRequestForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 mx-4 transform transition-all">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Request a Call</h3>
              <button
                onClick={() => setShowRequestForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Enter your phone number and we'll call you back shortly.
            </p>
            <form onSubmit={handleRequestCall}>
              <input
                type="tel"
                value={requesterPhone}
                onChange={(e) => setRequesterPhone(e.target.value)}
                placeholder="Your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
                required
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;