import React from "react";
import styles from './PrivacyPolicy.module.css'

function PrivacyPolicy(){
    return(
        <>
        <div className={`mt-3 pt-5 container ${styles.cursor}`}>
            <h2 className="fw-light mb-2 ms-2">Privacy Policy</h2>
            <p className="ms-4 mb-4">This site is owned and operated by Star Holidays.
                This Privacy Policy applies to the activities of Star Holidays and its affiliates (referred to as "SH", “We”, “Us”, or “Our” in this policy).
                Because we gather certain types of information about our users, we feel you should fully understand the terms and conditions surrounding the capture and use of that information. The privacy statement discloses what information we gather and how we use it.
                It explains how SH handles personal information that users provide through voluntary submissions and complies with the requirements of the applicable laws in India.
                If you have further questions relating to this policy please contact our Privacy Officer by mail at Purva Primus, 4th floor, No. 236, Okhiyampettai, Old Mahabalipuram Road, Thoraipakkam, Chennai - 600097. Board line: +91 44 3357 3300 or e-mail feedback@sterlingholidays.com.
            </p>
            <h2 className="fw-light mb-2 ms-2">Collection Information About You(Purpose)</h2>
            <p className="ms-4">By submitting your personal data on SH's website, you explicitly consent to SH’s use or disclosure of such personal data and information by SH for the purposes mentioned in this policy document in compliance with applicable laws in India. SH only collects personal information that is necessary for business purposes. We constantly endeavour to collect personal information fairly and lawfully and to meet our users' expectations, and we will respect their right to control how their personal information is collected and used. SH collects personal information in many parts of its business.</p>
            <p className="ms-2">These include:</p>
            <ul className={` mb-4 ms-2 ${styles.ull}`}>
                <li className="ms-4">SH collects information on individuals when they book travel arrangements to process the transaction and fulfill booking requests with travel and tourism operators.</li>
                <li className="ms-4">SH also collects general business information relating to users and other individuals.</li>
                <li className="ms-4">Consistent with the Federal Children’s Online Privacy Protection Act of 1998 (COPPA), we will never knowingly request personally identifiable information from anyone under the age of 13 without requesting parental consent.
                </li>
                <li className="ms-4">This policy explains the main features of SH’s use of member and customer information and does not outline in detail the use of contractor and employee information.</li>
            </ul>
            <p className="ms-4">Personal data are processed in observance of currently applicable regulations and connection with our business as part of a survey of contact methods or to process orders or your request. In addition, your data will also be used for promotional purposes, market research, or better to tailor SH's electronic services to its customers if you have previously given us your consent when providing such data/information to SH.  Naturally, you may partially or completely revoke this consent at any time with effect for the future.</p>
            <h2 className="fw-light mb-2 ms-2">Using and disclosing your Personal Information</h2>
            <p className="ms-4">Our purpose in collecting information about you is to provide you with offered services, such as exchanging your holiday accommodation entitlements. SH uses personal information in several different ways to operate our offers and our business, and most of these uses are clear from the circumstances. We also use your personal information for internal quality assurance purposes. </p>
            <p className="ms-4">SH provides personal information to Booking operators to facilitate your requested booking. Otherwise, SH does not routinely disclose personal information, except where it is necessary to provide you with a service you have asked for, such as bookings for your travel with airlines. </p>
            <p className="ms-4">Your information is also used for our business transactions with you and for our legitimate business interests.</p>
            <p className="ms-4">We use your information, including personal data, in accordance with any consent you may have provided. You have the right to decline to provide your consent and, if consent is provided, to withdraw your consent at any time.</p>
            <p className="ms-4">Subject to applicable laws and your consent, we may disclose your information to our affiliates, vendors and service providers, business partners, and other third parties for the purpose of our business, for our business transactions with you, or for ensuring appropriate, effective services to our members, customers, and clients.</p>
            <p className="ms-4">SH will not usually otherwise use or disclose any information about you without your consent unless it is:</p>
            <ul className={`ms-3 mb-4 ${styles.ull}`}>
                <li className="ms-4">Required by law or in compliance with any legal process</li>
                <li className="ms-4">To respond to requests from public and government authorities</li>
                <li className="ms-4">To protect our operations or those of any of our affiliates or other third parties</li>
                <li className="ms-4">To protect the rights, property or personal safety of another SH member, any member of the public</li>
            <li className="ms-4">The assets and operations of the business are transferred to another party as a going concern</li>
            <li className="ms-4">When you provide your personal information to us, SH will choose whether you wish to receive further information about special offers, promotions, and changes to our products and services. If you indicate that you do not want to receive these, we will not contact you further for these purposes. Please allow 28 days for your request to be processed</li>
            <li className="ms-4">To enforce our terms and conditions</li>
            <li className="ms-4">To allow us to pursue available remedies or limit damages we, our affiliates, or other third parties may sustain.</li>
            </ul>
            <p className="ms-4">In respect of information provided by you and consent given by you to us for processing of the same, you shall have the right to withdraw your consent, access your information, correct your information, delete your information or object to / restrict processing of such information, all by appropriately contacting us through the contact details provided in the website.</p>
            
        </div>
        </>
    )
}

export default PrivacyPolicy;