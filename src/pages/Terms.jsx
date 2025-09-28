import React from 'react';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Pro Logistics Prep</title>
        <meta name="description" content="Terms of Service for Pro Logistics Prep. Read our terms and conditions for using our website and services." />
      </Helmet>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
          <div className="prose-dark max-w-none">
            <p>Last updated: July 22, 2024</p>

            <h2 className="text-2xl font-bold text-white mt-8">1. Terms</h2>
            <p>By accessing this Website, accessible from https://prologisticsprep.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

            <h2 className="text-2xl font-bold text-white mt-8">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Pro Logistics Prep's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on Pro Logistics Prep's Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>This will let Pro Logistics Prep to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>

            <h2 className="text-2xl font-bold text-white mt-8">3. Disclaimer</h2>
            <p>All the materials on Pro Logistics Prep’s Website are provided "as is". Pro Logistics Prep makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Pro Logistics Prep does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

            <h2 className="text-2xl font-bold text-white mt-8">4. Governing Law</h2>
            <p>Any claim related to Pro Logistics Prep's Website shall be governed by the laws of the United States without regards to its conflict of law provisions.</p>

            <h2 className="text-2xl font-bold text-white mt-8">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
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

export default Terms;