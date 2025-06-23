import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹15,000',
      period: '/month',
      description: 'Perfect for small recruiting teams getting started',
      features: [
        'Up to 3 recruiters',
        '500 candidate profiles',
        'Basic AI resume screening',
        'Excel/CSV import',
        'Email support',
        'Standard integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Growth',
      price: '₹35,000',
      period: '/month',
      description: 'Ideal for growing teams that need advanced features',
      features: [
        'Up to 10 recruiters',
        '2,000 candidate profiles',
        'Advanced AI screening & ranking',
        'WhatsApp CRM integration',
        'AI-conducted interviews',
        'Gmail & Drive integration',
        'Chrome sourcing plugin',
        'Priority support',
        'Custom workflows'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific requirements',
      features: [
        'Unlimited recruiters',
        'Unlimited candidate profiles',
        'Full AI Interview suite',
        'Advanced proctoring',
        'Interview Copilot',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment',
        'Advanced analytics & reporting'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-brandGray-light">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brandGray-dark mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-brandGray max-w-3xl mx-auto mb-8">
            Choose the plan that fits your recruiting needs. All plans include a 14-day free trial.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular 
                    ? 'ring-2 ring-brandOrange transform scale-105' 
                    : 'hover:shadow-2xl transition-shadow duration-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-brandOrange text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  <h3 className="text-2xl font-bold text-brandGray-dark mb-2">{plan.name}</h3>
                  <p className="text-brandGray mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-brandGray-dark">{plan.price}</span>
                    <span className="text-brandGray">{plan.period}</span>
                  </div>
                  
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 mb-8 ${
                      plan.popular
                        ? 'bg-brandOrange text-white hover:bg-brandOrange-dark'
                        : 'bg-brandGray-light text-brandGray-dark hover:bg-brandGray'
                    }`}
                  >
                    {plan.cta}
                  </button>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-brandOrange mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-brandGray-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brandGray-dark mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-brandGray-dark mb-3">
                Is there a free trial available?
              </h3>
              <p className="text-brandGray">
                Yes! All plans come with a 14-day free trial. No credit card required to get started.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brandGray-dark mb-3">
                Can I change plans later?
              </h3>
              <p className="text-brandGray">
                Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brandGray-dark mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-brandGray">
                We accept all major credit cards, bank transfers, and UPI payments for Indian customers.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brandGray-dark mb-3">
                Is my data secure?
              </h3>
              <p className="text-brandGray">
                Yes. We use enterprise-grade security measures and comply with all data protection regulations. Your candidate data is encrypted and stored securely.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brandGray-dark py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Recruiting?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of recruiting teams who've made the switch to Recruit41.
          </p>
          <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;