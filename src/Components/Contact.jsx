import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans p-10">
            <div className="mb-6">
                <p className="text-2xl font-semibold text-cyan-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Email us at: <span className="text-2xl font-bold text-white">contact@productifyai.tech</span>
                </p>
            </div>
            <div className="ml-0 text-2xl font-semibold text-cyan-400" style={{ fontFamily: "'Poppins', sans-serif" }}>OR Fill the Form📝😄</div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg mt-8">
                <h1
                    className="text-3xl font-bold text-center mb-4 text-cyan-400"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    Contact Us
                </h1>
                <p
                    className="text-center text-gray-400 mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Have a question, suggestion, or just want to connect? We're here to help!
                </p>
                
                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const isSuccess = Math.random() > 0.5; // Simulate success or failure
                        if (isSuccess) {
                            alert("Message sent successfully!");
                        } else {
                            alert("Something went wrong. Please try again.");
                        }
                    }}
                >
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-cyan-400 focus:border-cyan-400 text-white"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-cyan-400 focus:border-cyan-400 text-white"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Subject (Optional)
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-cyan-400 focus:border-cyan-400 text-white"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-cyan-400 focus:border-cyan-400 text-white"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-cyan-400 text-gray-900 font-bold rounded-md hover:bg-cyan-500 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;