import React from 'react';
import Section from './ui/Section';

const challenges = [
  {
    id: '01',
    title: 'Digital transformation',
    description: 'Reimagine your business with new product development services that uplevel user experience and unlock new revenue streams.',
    dark: false
  },
  {
    id: '02',
    title: 'Technology consulting',
    description: 'Get a new perspective on your challenges, align technical expertise with your goals, and future-proof your technology stack.',
    dark: false
  },
  {
    id: '03',
    title: 'Software modernization',
    description: 'Rebuild outdated systems with our product design process focused on scalability, security, and peak performance.',
    dark: false
  },
  {
    id: '04',
    title: 'Team extension',
    description: 'Augment your team with skilled software engineers who integrate into your workflow, speed up project delivery, and improve code quality.',
    dark: false
  }
];

const Challenges: React.FC = () => {
  return (
    <Section id="challenges" dark className="pb-32">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">
          Simplifying your toughest<br />tech challenges
        </h2>
        <div className="w-24 h-1 bg-brand-lime mx-auto"></div>
        <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
          / We tackle complexities that exceed standard product development agency competencies. 
          Whether you need to optimize existing solutions or scale your team with best software developers, 
          we help you accelerate growth and drive positive change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {challenges.map((card, idx) => (
          <div 
            key={card.id}
            className={`
              relative p-8 min-h-[320px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2
              ${idx % 3 === 0 ? 'bg-brand-lime text-brand-dark clip-corner' : 'bg-brand-lightLime text-brand-dark clip-corner'}
            `}
          >
            <span className="text-sm font-bold opacity-60">/ {card.id}</span>
            <div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">{card.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed font-medium">
                {card.description}
              </p>
            </div>
            
            {/* Decorative corner accent only for visual hierarchy if needed, but clip-path handles the shape */}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Challenges;