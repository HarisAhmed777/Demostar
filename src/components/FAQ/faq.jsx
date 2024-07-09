import React, { useState } from "react";

function FAQ() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const handleParaToggle = (index) => {
        if (visibleIndex === index) {
            setVisibleIndex(null); 
        } else {
            setVisibleIndex(index); 
        }
    };

    const faqData = [
        {
            question: "1. What are the reasons to buy here?",
            answer: "We offer the best prices and quality products.",
        },
        {
            question: "2. How can I track my order?",
            answer: "You can track your order through the tracking link provided in the confirmation email.",
        },
        {
            question: "3. What is the return policy?",
            answer: "You can return any product within 30 days of purchase.",
        },
        {
            question: "4. Do you offer international shipping?",
            answer: "Yes, we ship internationally. Shipping costs and delivery times vary by location.",
        },
        {
            question: "5. How can I contact customer support?",
            answer: "You can contact customer support via email at support@example.com or call us at 123-456-7890.",
        },
        {
            question: "6. What payment methods do you accept?",
            answer: "We accept various payment methods including credit cards, PayPal, and bank transfers.",
        }
    ];

    return (
        <>
            <h1 className="text-center fw-light">Frequently Asked Questions</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, pariatur!</p>
            <div className="container mb-5">
                {faqData.map((faq, index) => (
                    <div key={index}>
                        <div className="d-flex justify-content-between align-items-center ms-3">
                            <h4 className="fw-light">{faq.question}</h4>
                            <button onClick={() => handleParaToggle(index)} className="btn btn-dark">
                                {visibleIndex === index ? '-' : '+'}
                            </button>
                        </div>
                        {visibleIndex === index && (
                            <p className="ms-3">{faq.answer}</p>
                        )}
                        <hr />
                    </div>
                    
                ))}
            </div>
            <div className="text-center rounded-pill mb-5">
                <button className="btn bg-dark text-white rounded-pill">Our support Center</button>
                <button className="btn fw-bold">Contact us --</button>

            </div>
        </>
    );
}

export default FAQ;
