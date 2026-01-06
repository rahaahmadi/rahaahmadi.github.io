import React from 'react';
import { TALKS } from '../constants';
import { Mic } from 'lucide-react';

const Talks: React.FC = () => {
  return (
    <section id="talks" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-center gap-4 mb-10 justify-center">
                <div className="p-4 bg-red-100 text-red-600 rounded-full">
                    <Mic size={28} />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">Talks & Presentations</h2>
            </div>
            <div className="space-y-6">
              {TALKS.map((talk) => (
                <div key={talk.id} className="bg-slate-50 p-7 rounded-lg border border-slate-200 hover:border-red-200 transition-colors">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">{talk.title}</h3>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base text-slate-500 gap-2">
                    <span>{talk.event}</span>
                    <span className="font-mono bg-white px-3 py-1 rounded border border-slate-200 text-sm">{talk.date}</span>
                  </div>
                   {talk.link && talk.link !== '#' && (
                        <div className="mt-4">
                            <a href={talk.link} className="text-base font-medium text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center">
                                View Slides
                            </a>
                        </div>
                    )}
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};
export default Talks;