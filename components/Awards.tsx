import React from 'react';
import { AWARDS } from '../constants';
import { Trophy } from 'lucide-react';

const Awards: React.FC = () => {
  if (!AWARDS || AWARDS.length === 0) {
    return null;
  }

  return (
    <section id="awards" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10 justify-center">
                <div className="p-4 bg-yellow-100 text-yellow-600 rounded-full">
                    <Trophy size={28} />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">Awards & Honors</h2>
            </div>
            <div className="space-y-5">
              {AWARDS.map((award) => (
                <div key={award.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-yellow-400 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">{award.title}</h3>
                      <span className="inline-flex items-center justify-center px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium whitespace-nowrap self-start">
                          {award.date}
                      </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-2">
                      <p className="text-slate-600 text-base">{award.description}</p>
                      {award.amount && (
                          <p className="text-green-600 font-bold text-lg whitespace-nowrap">
                              {award.amount}
                          </p>
                      )}
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};
export default Awards;