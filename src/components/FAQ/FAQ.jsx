import React, { useState } from 'react';
import './FAQ.css';
import { IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What programs does School offer?',
      answer: 'We offers a range of programs including Science, Commerce, and Arts streams for higher secondary education.'
    },
    {
      question: 'What are the school hours?',
      answer: 'School hours are from 8:30 AM to 5:00 PM, Monday to Friday.'
    },
    {
      question: 'How can I apply for admission?',
      answer: 'You can apply for admission by filling out the application form available on our official website or at the school office.'
    },
    {
      question: 'Is there a hostel facility available?',
      answer: 'Yes, St. Antony’s provides hostel facilities for both boys and girls, ensuring a comfortable living environment.'
    },
    {
      question: 'What extracurricular activities are offered?',
      answer: 'We offer a variety of extracurricular activities including sports, music, dance, and drama to promote overall development.'
    },
    {
      question: 'How can I contact the school administration?',
      answer: 'You can contact the school administration via the phone number or email provided on our official website.'
    }
];


  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <IoIosArrowDown className={`arrow ${activeIndex === index ? 'rotate' : ''}`} />
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
