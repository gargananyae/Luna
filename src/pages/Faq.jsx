import React from "react";
import { useState } from "react";
import css from "./faq.css";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
const Faq = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleFaqClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  return (
    <div className="bodyfaq">
      <Header />
      <section className="faqsection">
        <h2 className="titlefaq">FAQs</h2>
        <div
          className={`faq ${activeIndexes.includes(0) ? "active" : ""}`}
          onClick={() => handleFaqClick(0)}
        >
          <div className="question">
            <h3>What are periods?</h3>
            <svg width="15" height={10} viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth={7}
                stroke-strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Menstruation is the process in which the uterus sheds blood and
              tissue through the vagina. This is a natural and healthy process
              for girls and women of reproductive age. In Western communities,
              this is often called “the period.” It typically lasts 2 to 5 days,
              but this varies by individual.
            </p>
          </div>
        </div>
        <div
          className={`faq ${activeIndexes.includes(1) ? "active" : ""}`}
          onClick={() => handleFaqClick(1)}
        >
          <div className="question">
            <h3>What is puberty?</h3>
            <svg width="15" height={10} viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth={7}
                stroke-strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Puberty happens to everyone! It’s a physical change that happens
              as you become an adult, usually between the ages of 10-14. As a
              girl, you’ll know you’re going through puberty when you notice
              your body going through physical changes like more definition in
              your waistline, development of breasts, and—of course—your first
              period.
            </p>
          </div>
        </div>
        <div
          className={`faq ${activeIndexes.includes(2) ? "active" : ""}`}
          onClick={() => handleFaqClick(2)}
        >
          <div className="question">
            <h3>When will my periods start?</h3>
            <svg width="15" height={10} viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth={7}
                stroke-strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Everybody is different, but periods usually start somewhere
              between the ages of 10-14, and about 50% of girls will start their
              period by the age of 12. Don’t worry if you start your period
              earlier or later than your friends—it’s totally normal!
            </p>
          </div>
        </div>
        <div
          className={`faq ${activeIndexes.includes(3) ? "active" : ""}`}
          onClick={() => handleFaqClick(3)}
        >
          <div className="question">
            <h3>How often should I change my pad?</h3>
            <svg width="15" height={10} viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth={7}
                stroke-strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              You should change your pad depending on your flow. It may seem
              like you bleed a lot during your period, but most girls normally
              lose between 4 and 12 teaspoons of blood during an average period.
              In the first 1-2 days of your period, you may bleed more heavily
              and need to change it often. If you are using pads with high
              absorbing capacity, then you can wear these for as long as 8
              hours. Like when you are sleeping at night.
            </p>
          </div>
        </div>
        <div
          className={`faq ${activeIndexes.includes(4) ? "active" : ""}`}
          onClick={() => handleFaqClick(4)}
        >
          <div className="question">
            <h3>What is a discharge?</h3>
            <svg width="15" height={10} viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth={7}
                stroke-strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Vaginal discharge happens to every woman and it is your body's way
              of keeping your vagina clean and healthy. You’ll notice that
              discharge tends to changes in both color and appearance over the
              course of the month, and that normal discharge ranges in color
              from colorless to yellow and has no smell. If you notice any
              changes or if you aren’t sure if your discharge is normal, you can
              always ask your doctor.
            </p>
          </div>
        </div>
        <div
          className={`faq ${activeIndexes.includes(5) ? "active" : ""}`}
          onClick={() => handleFaqClick(5)}
        >
          <div className="question">
            <h3>How will puberty affect my breasts?</h3>
            <svg width="15" height={10} viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth={7}
                stroke-strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              There’s no one way that puberty will affect your breasts. Some
              girls see a big increase in their cup size while other girls may
              see very little change at all. The important thing to remember is
              that every girl is different, and there’s no “perfect” cup size.
              Some girls also feel their breasts are sore or more sensitive
              during puberty—this pain, or lack of pain, is normal.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Faq;
