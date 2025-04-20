import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans">
            <header className="flex flex-col items-center py-20 px-5 bg-cyan-400 text-gray-900 shadow-lg rounded-b-lg">
                <h1
                    className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    About Us
                </h1>
                <p
                    className="text-lg md:text-xl mb-6 text-center"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Learn more about{" "}
                    <span className="text-gray-900 font-bold">Kaalpath</span> - The Path of Time
                </p>
            </header>
            <section className="text-center py-16 px-5">
                <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
                    <p className="text-lg leading-relaxed">
                        <span className="font-semibold text-cyan-400">Taskaro</span> is dedicated to helping you manage your tasks efficiently and stay organized.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our mission is to provide a <span className="font-semibold text-cyan-400">simple</span> and <span className="font-semibold text-cyan-400">intuitive</span> platform that empowers individuals and teams to achieve their goals.
                    </p>
                    <p className="text-lg leading-relaxed">
                        We are committed to supporting your productivity journey with <span className="font-semibold text-cyan-400">innovative tools</span> and features.
                    </p>
                    <p className="text-lg leading-relaxed">
                        At <span className="font-semibold text-cyan-400">Taskaro</span>, we believe that <span className="font-semibold text-cyan-400">time</span> is your most valuable resource, and our goal is to help you make the most of it.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Whether you're managing personal tasks, collaborating with a team, or planning long-term projects, <span className="font-semibold text-cyan-400">Taskaro</span> is here to simplify your workflow.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Join us on this journey to unlock your full potential and achieve success, <span className="font-semibold text-cyan-400">one task at a time</span>.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;