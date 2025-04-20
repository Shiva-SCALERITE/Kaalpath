import React from 'react';

const Home = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', background: 'linear-gradient(to bottom, #4a90e2, #7b4397)', color: '#fff',minHeight: '829px', padding: '20px' }}>
            <header style={{ textAlign: 'center', padding: '50px 20px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Master Your Time. Master Your Life.</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Welcome to Kaalpath - The Path of Time</p>
                <button style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#ff9800', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get Started</button>
            </header>
            <section style={{ textAlign: 'center', padding: '40px 20px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Features</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ maxWidth: '300px', padding: '20px', background: '#ffffff20', borderRadius: '10px' }}>
                        <h3>Smart Scheduler</h3>
                        <p>Plan your day with AI-powered scheduling.</p>
                    </div>
                    <div style={{ maxWidth: '300px', padding: '20px', background: '#ffffff20', borderRadius: '10px' }}>
                        <h3>Daily Planner</h3>
                        <p>Organize tasks and priorities effortlessly.</p>
                    </div>
                    <div style={{ maxWidth: '300px', padding: '20px', background: '#ffffff20', borderRadius: '10px' }}>
                        <h3>Time Insights</h3>
                        <p>Analyze and optimize your time usage.</p>
                    </div>
                </div>
            </section>
            <section style={{ textAlign: 'center', padding: '40px 20px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>What Our Users Say</h2>
                <blockquote style={{ fontStyle: 'italic', maxWidth: '600px', margin: '0 auto', background: '#ffffff20', padding: '20px', borderRadius: '10px' }}>
                    "Kaalpath has transformed the way I manage my time. Highly recommend it!"
                </blockquote>
            </section>
        </div>
    );
};

export default Home;