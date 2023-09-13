import React, { useState } from "react";
import "./CustomizableKits.css";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import { AiFillCheckCircle } from "react-icons/ai";

const CustomizableKits = () => {
  const [formData, setFormData] = useState({
    periodProblems: "",
    bodyPartAche: "",
    periodCravings: "",
    pmsTiming: "",
    intimateProducts: "",
    periodStart: "",
    periodDuration: "",
    longestPeriod: "",
    day1Changes: "",
    dailyChanges: "",
    painLevel: "",
    AnyAllergies: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data and generate recommendations here
    const recommendations = generateRecommendations(formData);
    // You can update state, show recommendations, or perform other actions based on the recommendations
    console.log(recommendations); // Just for testing, replace with actual logic
  };

  const generateRecommendations = (formData) => {
    // Replace with your recommendation logic
    const recommendations = {
      // Add recommended products, kits, or other information based on form data
    };
    return recommendations;
  };

  return (
    <div className="CustomizableKits">
      <Header />
      <div className="CustomizableKits-content">
        <h1>Customize Your Period Kit</h1>
        <form onSubmit={handleSubmit}>
          {/* Dropdown example for Period Problems */}
          <div className="input-container">
            <label>Do you have any period-related problems?</label>
            <select
              name="periodProblems"
              value={formData.periodProblems}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              <option value="pcod">PCOD/PCOS</option>
              <option value="cramps">Severe Cramps</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Dropdown example for Body Part Ache */}
          <div className="input-container">
            <label>Which body part aches the most?</label>
            <select
              name="bodyPartAche"
              value={formData.bodyPartAche}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              <option value="lower-back">Lower Back</option>
              <option value="abdomen">Abdomen</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Dropdown example for Period Cravings */}
          <div className="input-container">
            <label>What are your period cravings?</label>
            <select
              name="periodCravings"
              value={formData.periodCravings}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              <option value="chocolate">Chocolate</option>
              <option value="sweets">Sweets</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Dropdown example for PMS Timing */}
          <div className="input-container">
            <label>When do you experience PMS?</label>
            <select
              name="pmsTiming"
              value={formData.pmsTiming}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              <option value="before">Before</option>
              <option value="during">During</option>
              <option value="after">After</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Dropdown example for Intimate Hygiene Products */}
          <div className="input-container">
            <label>Would you prefer using any intimate hygiene products?</label>
            <select
              name="intimateProducts"
              value={formData.intimateProducts}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Date picker example for Period Start */}
          <div className="input-container">
            <label>When do your periods start every month?</label>
            <input
              type="date"
              name="periodStart"
              value={formData.periodStart}
              onChange={handleInputChange}
            />
          </div>

          {/* Number input example for Period Duration */}
          <div className="input-container">
            <label>How long do they last on average?</label>
            <input
              type="number"
              name="periodDuration"
              value={formData.periodDuration}
              onChange={handleInputChange}
            />
          </div>

          {/* Number input example for Longest Period */}
          <div className="input-container">
            <label>What's the most number of days they lasted for?</label>
            <input
              type="number"
              name="longestPeriod"
              value={formData.longestPeriod}
              onChange={handleInputChange}
            />
          </div>

          {/* Number input example for Day 1 Changes */}
          <div className="input-container">
            <label>How many changes do you require on your day 1?</label>
            <input
              type="number"
              name="day1Changes"
              value={formData.day1Changes}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label>Do you have any allergies?</label>
            <input
              type="number"
              name="day1Changes"
              value={formData.day1Changes}
              onChange={handleInputChange}
            />
          </div>

          {/* Number input example for Daily Changes */}
          <div className="input-container">
            <label>How many times do you change your pad each day?</label>
            <input
              type="number"
              name="dailyChanges"
              value={formData.dailyChanges}
              onChange={handleInputChange}
            />
          </div>

          {/* Number input example for Pain Level */}
          <div className="input-container">
            <label>On a scale of 1-10, how bad does it hurt?</label>
            <input
              type="number"
              name="painLevel"
              min="1"
              max="10"
              value={formData.painLevel}
              onChange={handleInputChange}
            />
          </div>

          <div className="btn-container">
            <button className="btn" type="submit">
              Get Recommendations
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CustomizableKits;
