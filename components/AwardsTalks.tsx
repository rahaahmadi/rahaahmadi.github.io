import React from 'react';
import { AWARDS, TALKS } from '../constants';
import { Trophy, Mic } from 'lucide-react';

const AwardsTalks: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Awards Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
                    <Trophy size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Awards & Honors</h2>
            </div>
            <div className="space-y-4">
              {AWARDS.map((award) => (
                <div key={award.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-yellow-200 transition-colors">
                  <h3 className="font-semibold text-slate-900">{award.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{award.description}</p>
                  <p className="text-slate-400 text-xs mt-2 font-mono">{award.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Talks Column */}
          <div>
             <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <div className="p-3 bg-red-100 text-red-600 rounded-full">
                    <Mic size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Talks</h2>
            </div>
            <div className="space-y-4">
              {TALKS.map((talk) => (
                <div key={talk.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-red-200 transition-colors">
                  <h3 className="font-semibold text-slate-900">{talk.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{talk.event}</p>
                   <div className="flex justify-between items-center mt-2">
                    <p className="text-slate-400 text-xs font-mono">{talk.date}</p>
                    {talk.link && talk.link !== '#' && (
                        <a href={talk.link} className="text-xs text-blue-600 hover:underline">View Slides</a>
                    )}
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AwardsTalks;