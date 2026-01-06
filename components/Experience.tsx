import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Section */}
        <div className="mb-24">
           <div className="flex items-center justify-center gap-4 mb-12">
            <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
              <Briefcase size={28} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Experience</h2>
          </div>
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-6">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative pl-10 md:pl-14 group">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-110 transition-transform"></span>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-base font-medium text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full mt-3 sm:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <div className="mb-2">
                  <p className="text-xl font-medium text-indigo-600">{exp.company}</p>
                  <p className="text-base text-slate-500">{exp.location}</p>
                </div>

                {exp.description && exp.description.length > 0 && (
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-lg leading-relaxed marker:text-indigo-300">
                    {exp.description.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="pl-2 [&_a]:text-indigo-600 [&_a]:underline [&_a]:font-medium hover:[&_a]:text-indigo-800"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education Section (Unchanged) */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Education</h2>
          </div>
          
          <div className="space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="bg-white rounded-lg p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900">{edu.school}</h3>
                  <span className="text-base font-medium text-slate-500 bg-slate-50 px-4 py-1.5 rounded-full w-fit mt-3 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xl text-blue-600 font-medium mb-2">{edu.degree}</p>
                <p className="text-slate-500 text-base mb-4">{edu.location}</p>
                <ul className="flex flex-wrap gap-5 text-slate-600 text-base">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                       <span className="w-2 h-2 bg-blue-400 rounded-full mr-2.5"></span>
                       {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;