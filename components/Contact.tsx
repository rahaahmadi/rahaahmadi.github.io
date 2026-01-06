import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Let's Connect</h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I am currently looking for Machine Learning Engineering and Research roles. 
            Feel free to reach out if you'd like to discuss my work or potential collaborations.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="inline-flex items-center px-9 py-5 text-xl font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all hover:scale-105"
          >
            <Mail className="mr-3 h-6 w-6" />
            Contact me
          </a>
        </div>
      </div>
      
      <div className="mt-24 border-t border-slate-100 pt-10 text-center">
        <p className="text-slate-400 text-base">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;