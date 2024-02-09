/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";
import ReactMarkdown from "react-markdown";
const markdownContent = `### Terms & Conditions

We appreciate the trust you place when visiting our site. We guarantee to use the provided information unbiasedly and protect it from any misuse from other clients and resources. We have underlined the Terms & Conditions of our website below, which govern your use of the site and your relationship with CASHurDRIVE.

Your use of the website and services is subject to your compliance with the Terms & Conditions.

### General Terms & Conditions

CASHurDRIVE is the owner and the authorized user of any trademark appearing on the website and is the copyright owner of the content, images, layout, reviews, logo, etc. posted and published on the website. We do not grant you a license to any content or material you may access to your personal, commercial use. If you fail to comply with the Terms & Conditions provided here, you may violate the copyright and other laws of India.

We reserve all rights to edit and modify our Terms & Conditions at any time and without any prior notice.

You are restricted to post any content on our website that is unlawful, defamatory, harassing, obscene, pornographic, or any material that may encourage misconduct will be viewed as a criminal offence.

### Breach of Terms & Conditions

If you are found not complying with the conditions, terms, notices and agreements mentioned above, the rights granted to you will end with immediate effect. The immediate termination of the material that you control or possess will be followed without giving any prior notice.

You agree to the policy that you will make the best efforts to protect CASHurDRIVE as well as subsidiaries, affiliates, business partners, employees, licensors, agents, joint venture and third-party information providers.

### Disclaimer

CASHurDRIVE reserves the rights to revise its policy disclaimers at any time. Thus, we don't guarantee non-infringement. If you are using our website and services after updated changes without considering them and face any sort of damage by downloading content or using information, then we won't be liable for it. Your decision to continue using the services will be considered that you agree to the applied modifications.`;
const page = () => {
  return (
    <div className="bg-[#1b1b1b] text-white overflow-x-hidden">
      <Navbar />
      <div className="mx-auto max-w-2xl p-5">
        <h1 className="font-bold text-5xl"> Terms & Conditions</h1>
        <ReactMarkdown className="markdown">{markdownContent}</ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
};

export default page;
