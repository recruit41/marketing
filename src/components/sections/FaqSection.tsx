import React, { useState } from 'react';

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    question: 'As a hiring manager, what information do I need to provide?',
    answer:
      "To create the most effective interview, we'll need the job description, along with the specific skill levels and technical expertise required for the role. If you'd like to assess candidates on behavioral metrics important for success, let us know, and we'll incorporate that into the interview process. Additionally, if your organization has a multi-round interview structure, we can replicate those stages to ensure consistency with your internal processes.",
  },
  {
    question:
      'How long does it take to create an interview after I provide the information?',
    answer:
      'Once we receive your inputs, our team will have the interview ready within 24 to 48 hours. We ensure a quick turnaround so you can start assessing candidates promptly.',
  },
  {
    question: 'At what stages of hiring can Recruit41 assist?',
    answer:
      'Recruit41 is versatile and can be used at various stages of your hiring process:\n- Some clients use Recruit41 from the very beginning, allowing candidates to apply directly through our platform, where interviews start immediately.\n- Other clients provide a list of shortlisted candidates, and we create unique interview links for each candidate, which are then shared by the HR team for scheduling.',
  },
  {
    question:
      'How long does it take to receive the interview analysis once a candidate finishes?',
    answer:
      "The analysis is generated instantly after the interview is completed. You'll have access to comprehensive insights on your dashboard, allowing you to review performance without delay.",
  },
  {
    question: 'How does Recruit41 ensure data privacy and security?',
    answer:
      'Data privacy is a top priority. Each company has its own dedicated subsite on our multi-tenant platform, ensuring complete separation of data. All information captured belongs to you, and for additional security, we can deploy Recruit41 in your own custom environment (e.g., AWS). Your data is secure and compliant with the highest privacy standards.',
  },
  {
    question: 'What is the current state of Recruit41?',
    answer:
      'Recruit41 has successfully conducted over 1,500 interviews and helped close 35+ positions for our clients. We are continuously improving and scaling our platform to meet growing hiring needs.',
  },
  {
    question: 'How much does an interview cost?',
    answer: (
      <>
        We are the lowest cost per interview on the market, with unlimited capacity. The cost per interview depends on the type of assessment:
        <br/>- Screening interviews lasting 10 to 15 minutes are at the lower end of the spectrum.
        <br/>- More advanced interviews, such as those incorporating case studies or coding challenges, are priced higher.
        {' '}
        <a href="mailto:hello@recruit41.com" className="text-orange-500 hover:underline">
          Contact us
        </a>
        {' '}
        for more details
      </>
    ),
  },
  {
    question: 'Can I customize the interviews for different roles?',
    answer:
      'Interviews with Recruit41 are fully customizable. Whether you want to focus on technical assessments, behavioural metrics, or real-world scenarios like coding or presentations, we can tailor each interview to meet your specific requirements. This ensures that candidates are assessed for the exact skills needed for the role.',
  },
  {
    question: 'Can Recruit41 handle large-scale hiring?',
    answer:
      "Yes! Recruit41 is designed to scale with your hiring needs. Whether you're interviewing a handful of candidates or managing high-volume recruitment, our platform can handle it efficiently, with no limit on the number of interviews you can conduct.",
  },
  {
    question: 'How does Recruit41 ensure fairness in candidate evaluation?',
    answer:
      'Our AI evaluates based on performance and behavior, minimizing unconscious bias from traditional interviews.',
  },
];

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-24 bg-white" id="faqs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-slate-200 rounded-xl transition-all duration-300 ${
                expandedIndex === index ? 'bg-orange-50 border-orange-200' : 'bg-white'
              }`}
            >
              <button
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between hover:bg-slate-50 transition-colors rounded-xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedIndex === index}
              >
                <h3
                  className={`text-base sm:text-lg font-semibold pr-4 ${
                    expandedIndex === index ? 'text-orange-600' : 'text-slate-900'
                  }`}
                >
                  {faq.question}
                </h3>
                {expandedIndex === index ? (
                  <svg
                    className="w-6 h-6 text-orange-600 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-slate-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;