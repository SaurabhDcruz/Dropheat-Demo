import React from 'react';
import { Twitter, Instagram, Youtube, Music2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const links = [
    'AML Policy',
    'Cookie Policy',
    'Contact',
    'Terms Of Service',
    'Blog',
    'FAQ',
    'Provably Fair',
    'Privacy Statement'
  ];

  return (
    <footer className="bg-[#0D0E12] border-t border-white/5 py-4">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Trustpilot Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center rounded-sm">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white text-white">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          {links.map((link, index) => (
            <React.Fragment key={link}>
              <a
                href="#"
                className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                {link}
              </a>
              {index < links.length - 1 && (
                <span className="w-1 h-1 bg-gray-800 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-1.5">
          {[
            { icon: <Twitter className="w-3.5 h-3.5" />, label: 'Twitter' },
            { icon: <Instagram className="w-3.5 h-3.5" />, label: 'Instagram' },
            { icon: <Music2 className="w-3.5 h-3.5" />, label: 'TikTok' },
            { icon: <Youtube className="w-3.5 h-3.5" />, label: 'YouTube' },
          ].map((social, i) => (
            <a
              key={i}
              href="#"
              className="w-8 h-8 bg-white/[0.03] rounded-md flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] transition-all border border-white/[0.05]"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* <div className="max-w-[1400px] mx-auto px-4 md:px-6 mt-4 pt-4 border-t border-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[8px] text-gray-700 font-bold uppercase tracking-widest">© 2026 DROPHEAT. All rights reserved.</p>
        <div className="flex items-center gap-5 opacity-10 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-2.5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-3.5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-2.5" />
        </div>
      </div> */}
    </footer>
  );
};
