import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-10 text-center">
          About Me
        </h2>

        <div className="text-lg md:text-xl text-slate-600 mx-auto text-justify leading-loose [&_strong]:font-semibold">
          {PERSONAL_INFO.about.split('\n').map((line, i) =>
            line.trim() ? (
              <p
                key={i}
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default About;