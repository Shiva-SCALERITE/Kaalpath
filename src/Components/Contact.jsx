import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
                <p className="text-center text-gray-600 mb-6">
                    Have a question, suggestion, or just want to connect? We're here to help!
                </p>
                <p className="text-center text-blue-500 font-semibold mb-6">
                    contact@productifyai.tech
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
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Subject (Optional)
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;