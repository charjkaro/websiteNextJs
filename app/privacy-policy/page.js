/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";
import ReactMarkdown from "react-markdown";
const markdownContent = `At CASHurDRIVE, we collect your information to provide and improve our services. Usage of our services by you is considered your consent to collecting and using your information as per our privacy terms.\
Thank you for reading this post, don't forget to subscribe!

We respect your privacy and understand that the security of your personal data is important to you. We endeavour to comply with the privacy principles set out in this Privacy Policy, which outlines the details about how we collect, use, protect and share your personal information along with other important considerations. Since it relates to the privacy of your information, we are committed to maintaining your trust and confidence.

### Data Collection

We collect information/data for diverse purposes aimed at offering as well as refining our service offerings to you.

#### Types of Information We Collect

##### Personal Information

To serve you with the best and maintain customer relationships, we may demand you to provide us with your personal information, which we may use to identify or contact you. The data which is referred to as personal information may include but not limited to,

-   Name
-   Address
-   Email Address
-   Contact
-   Driving License
-   Date of Birth

This information is collected directly from you or with your consent. The information can be obtained either electronically or over the phone. We collect only personally identifiable that we need for a particular purpose.

In case you choose not to provide the Personal Information we request, we may not be able to provide you with services.

##### No Collection of Sensitive Information

We need not collect any sensitive information from you for providing the services. In case we do collect such information, that will be only with your consent.

##### Cookies & Web Logs

We make use of cookies and weblogs on our website to improve its functionality.

Cookies are small text files that our website may place on your computer and collect some information such as your browser type, computer's operating system, internet protocol address and traffic patterns.

You can anytime choose to disable cookies. However, by directing your browser to decline cookies, you may not be able to access certain parts of our services.

### Data Usage

CASHurDRIVE may collect information about how you use the service. The information collected by you is used only for: --

-   -   -   -   -   -   Verifying your identity
-   -   -   -   -   Providing you with the services
-   -   -   -   -   Responding to your queries
-   -   -   -   -   Conducting appropriate checks for credit-worthiness
-   -   -   -   -  Notifying you about the services we may offer from time to time
-   -   -   -   -   Conducting research for internal purposes

#### Data Transfer

Your data or personal information may be transmitted to computers placed outside of your residing province, state or other government jurisdictions where data protection policies, as well as laws, may differ from your own jurisdiction.

If you consent to share information with us, please mind that we transfer the information. However, we step ahead rationally to make sure that your submitted data is handled with utmost security according to this Privacy Policy. We don't transfer your personally identifiable to any organization unless they have proper security controls to make sure about the security of your personal information and related data.

#### Data Security

We take every possible step to ensure the security of Personal Information collected by us from such risks as loss or unauthorized access, use, destruction, disclosure or modification. Our IT systems are password protected and completely sync with our security standards. If personal information has been documented, then it is stored in locked files, which are only accessed by authorized personnel.

We use highly protective encryption methods to transmit your information so that it won't be intercepted or tampered with during transmission.

However, you should be aware that the internet environment is truly unpredictable, and the transmission of Personal Information over the internet is at your own risk.

#### Service Providers

We may appoint individuals and third parties on our behalf to render our services and conduct service-based tasks or support us in assessing how the service is implemented.

The third parties can access your personally identifiable to conduct these activities on behalf of us. It is obligatory for them not to disclose or use it for any other purpose.

#### Privacy of Children

Our services are not to entertain anyone under the age of 18, i.e. children.

We don't collect personal data knowingly from anyone whose age is under 18. Parents and guardians of children who are aware of the fact that their child has disclosed their personal information with us should contact us directly. When we get to know that the collected data has been shared by a child without his/her parental consent and verification, we take the necessary steps to exterminate that data from our servers immediately.

#### Alteration to Privacy Policy

We may update or modify our Privacy Policy at any time. We will inform you regarding modifications by updating the fresh Privacy Policy page as well as through emailers.

We will notify you through email or a particular notice of our service prior to the modification getting effective we will share that effective data on the top of Privacy Policy page.

Thus, we advise you to review this Privacy Policy page periodically for the modifications. Alteration to this privacy policy is considered effective from the time it is posted on this page.`;
const page = () => {
  return (
    <div className="bg-[#1b1b1b] text-white overflow-x-hidden">
      <Navbar />
      <div className="mx-auto max-w-2xl p-5">
        <h1 className="font-bold text-5xl"> Privacy Policy</h1>
        <ReactMarkdown className="markdown">{markdownContent}</ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
};

export default page;
