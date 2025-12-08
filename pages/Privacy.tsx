
import React from 'react';
import Section from '../components/ui/Section';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Section>
        <div className="max-w-3xl mx-auto prose prose-blue">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: January 1, 2025</p>

            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
                Welcome to Coaxia. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Identity Data: First name, last name, username or similar identifier.</li>
                <li>Contact Data: Billing address, delivery address, email address and telephone numbers.</li>
                <li>Technical Data: IP address, browser type and version, time zone setting and location.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
        </div>
      </Section>
    </div>
  );
};

export default Privacy;