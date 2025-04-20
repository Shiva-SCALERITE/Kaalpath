import React from 'react';

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans">
                <header className="flex flex-col md:flex-row items-center py-20 px-5 bg-cyan-400 text-gray-900 shadow-lg rounded-b-lg">
                    <div className="w-full md:w-1/2 text-center md:text-left mx-15">
                        <h1
                            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            Master Your Time. Master Your Life.
                        </h1>
                        <p
                            className="text-lg md:text-xl mb-6"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Welcome to{" "}
                            <span className="text-gray-900 font-bold">Kaalpath</span> - The Path of Time
                        </p>
                        <button className="bg-gray-900 text-cyan-400 font-bold py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md">
                            Get Started
                        </button>
                    </div>
                    <div className="w-full  mb-8 md:w-300 md:mb-0 ml-30">
                        <video
                            className="rounded-lg shadow-lg border-2 border-black"
                            controls
                            style={{ width: "60%", margin: "0 auto" }}
                        >
                            <source src="YOUR_VIDEO_HERE.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </header>
                <section className="text-center py-16 px-5">
                    <h2
                        className="text-3xl font-bold mb-8"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Features
                    </h2>
                    <div className="flex flex-wrap justify-center gap-20">
                        <div className="max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Smart Scheduler</h3>
                            <p>Plan your day with AI-powered scheduling.</p>
                        </div>
                        <div className="max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Daily Planner</h3>
                            <p>Organize tasks and priorities effortlessly.</p>
                        </div>
                        <div className="max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Time Insights</h3>
                            <p>Analyze and optimize your time usage.</p>
                        </div>
                    </div>
                </section>
                <section className="text-center py-16 px-5">
                    <h2
                        className="text-3xl font-bold mb-8"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        What Our Users Say
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <blockquote className="italic max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
                            "Kaalpath has transformed the way I manage my time. Highly recommend it!"
                            <footer className="mt-4 text-cyan-400">- Alex Johnson</footer>
                        </blockquote>
                        <blockquote className="italic max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
                            "The daily planner feature is a game-changer for my productivity."
                            <footer className="mt-4 text-cyan-400">- Priya Sharma</footer>
                        </blockquote>
                        <blockquote className="italic max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
                            "I love the time insights! It helps me stay on track every day."
                            <footer className="mt-4 text-cyan-400">- Michael Lee</footer>
                        </blockquote>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;