import React from 'react';
import ModelCard from './ModelCard';
import soilHealthImg from '../assets/soil_health.jpg';
import cropYieldImg from '../assets/crop_yield.jpg';
import cropHealthImg from '../assets/crop_health.png';
import marketPriceImg from '../assets/market_price.jpg';
import weatherImg from '../assets/weather.jpg';
import chatbotImg from '../assets/chatbot.png';
// import './Home.css';  // Make sure the path is correct

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Krishak</h1>
        <p>Your one-stop solution for agriculture predictions</p>
      </header>
      <section id="models" className="models">
        <h2>Prediction Models</h2>
        <div className="models-grid">
          <ModelCard 
            title="Soil Health Prediction" 
            imgSrc={soilHealthImg} 
            link="http://your-flask-app-link/soil_health" 
          />
          <ModelCard 
            title="Crop Yield Prediction" 
            imgSrc={cropYieldImg} 
            link="http://your-flask-app-link/crop_yield" 
          />
          <ModelCard 
            title="Crop Health Prediction" 
            imgSrc={cropHealthImg} 
            link="http://your-flask-app-link/crop_health" 
          />
          <ModelCard 
            title="Market Price Prediction" 
            imgSrc={marketPriceImg} 
            link="http://your-flask-app-link/market_price" 
          />
          <ModelCard 
            title="Weather Prediction" 
            imgSrc={weatherImg} 
            link="http://your-flask-app-link/weather" 
          />
          <ModelCard 
            title="AI Chatbot" 
            imgSrc={chatbotImg} 
            link="http://your-flask-app-link/chatbot" 
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
