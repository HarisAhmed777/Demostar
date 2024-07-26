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
            question: "1.How do I book a holiday with Star Holidays?",
            answer: "A:Booking with Star Holidays is easy!Simply visit our website, select your destination and dates, choose from our range of packages or request a custom itinerary, and follow the prompts to secure your booking",
        },
        {
            question: "2.  What types of holiday packages do you offer?",
            answer: " A: We offer a variety of packages tailored to suit different preferences and interests, including nature retreats, cultural tours, adventure trips, and more. Each package can be customized to ensure it meets your specific needs.",
        },
        {
            question: "3.Can I customize my travel itinerary?",
            answer: "A: Absolutely! We specialize in creating personalized travel experiences. Contact our friendly team to discuss your preferences, and we'll tailor an itinerary that matches your interests, budget, and schedule. ",
        },
        {
            question: "4.What amenities are included in your accommodations?",
            answer: "A: Our accommodations range from luxurious hotels to charming boutique stays, all selected for their comfort and quality. Amenities typically include Wi-Fi, breakfast, and other conveniences depending on the package selected. ",
        },
        {
            question: "5. How can I contact Star Holidays for assistance during my trip?",
            answer: "A: You can reach our customer support team via email at [email protected] or by phone at +91-XXX-XXXXXXX. We're here to assist you before, during, and after your journey to ensure a smooth and enjoyable experience. ",
        },
        {
            question: "6. Are there any special offers or discounts available?",
            answer: "A: Yes, we frequently offer special deals and discounts on our holiday packages. Check our website regularly or sign up for our newsletter to stay updated on the latest offers.",
        },
        {
            question:"7.Do you offer travel insurance options?",
            answer:"A: While we do not provide travel insurance directly, we strongly recommend purchasing travel insurance to protect your trip investment. We can assist you in finding suitable options based on your needs."
        },
        {
            question:"8.What measures do you take for customer safety and satisfaction?",
            answer:"A: Customer safety and satisfaction are our top priorities. We work with trusted partners, provide detailed travel information, and offer 24/7 support to address any concerns during your trip. "
        },        
        {
            question:"9.Can I leave a review or feedback about my experience with Star Holidays?",
            answer:"A: Yes, we value your feedback! You can leave a review on our website or social media channels, or contact us directly with your comments. Your input helps us continually improve our services." 
        },        {
            question:"10.What payment methods do you accept? ",
            answer:"A: We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms. Specific details will be provided during the booking process for your convenience. "
        },
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
            
        </>
    );
}

export default FAQ;
