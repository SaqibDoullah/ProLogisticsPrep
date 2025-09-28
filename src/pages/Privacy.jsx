import React from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Pro Logistics Prep</title>
        <meta name="description" content="Privacy Policy for Pro Logistics Prep. Understand how we collect, use, and protect your personal information." />
      </Helmet>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
          <div className="prose-dark max-w-none">
            <p>Last updated: July 22, 2024</p>
            <p>Pro Logistics Prep ("us", "we", or "our") operates the https://prologisticsprep.com website (the "Service").</p>
            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>

            <h2 className="text-2xl font-bold text-white mt-8">Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

            <h3 className="text-xl font-bold text-white mt-6">Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Use of Data</h2>
            <p>Pro Logistics Prep uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: info@prologisticsprep.com</li>
              <li>By visiting this page on our website: https://prologisticsprep.com/contact</li>
              <li>By phone number: (281) 827-8643</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
