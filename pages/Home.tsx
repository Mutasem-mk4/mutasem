import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { MOCK_CHALETS } from '../constants';
import { useApp } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import ChaletCard from '../components/ChaletCard';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useApp();
  const navigate = useNavigate();

  const filteredChalets = MOCK_CHALETS.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:h-[80vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
        {/* Background Image with Animated Zoom (Ken Burns Effect) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop" 
            alt="Jordan Wadi Rum" 
            className="w-full h-full object-cover origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/30 to-slate-50 dark:to-reva-900 transition-colors duration-500 ease-in-out"></div>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-reva-gold/20 rounded-full blur-[100px] animate-float"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-float-delayed"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.span 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-reva-gold text-xs md:text-sm font-bold tracking-widest mb-6 md:mb-8 shadow-lg"
            >
              <Sparkles size={14} /> THE JEWEL OF JORDAN
            </motion.span>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight mb-6 md:mb-8 drop-shadow-2xl">
              {t('heroTitle')} <br/> 
              <span className="relative inline-block">
                {t('heroSubtitle')} 
                <span className="text-reva-gold italic ml-3 relative z-10">{t('heroSubtitleHighlight')}</span>
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full h-3 text-reva-gold/60 z-0" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </motion.svg>
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-100 mb-10 md:mb-14 max-w-2xl mx-auto drop-shadow-md font-light tracking-wide leading-relaxed">
              {t('heroText')}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/80 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 p-2.5 rounded-3xl md:rounded-full max-w-4xl mx-auto flex flex-col md:flex-row gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-500"
          >
            <div className="flex-1 flex items-center px-4 bg-white dark:bg-white/5 rounded-full h-12 md:h-14 border border-transparent focus-within:border-reva-gold/50 transition-all duration-300 relative group">
              <MapPin className="text-slate-400 dark:text-gray-400 mx-2 flex-shrink-0 group-focus-within:text-reva-gold transition-colors" size={20} />
              <select
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-slate-900 dark:text-white w-full text-sm md:text-base appearance-none cursor-pointer pr-8 font-medium"
              >
                <option value="" className="text-slate-900 dark:text-white bg-white dark:bg-reva-800">{t('searchWhere')}</option>
                <option value="Amman" className="text-slate-900 dark:text-white bg-white dark:bg-reva-800">Amman</option>
                <option value="Sowayma" className="text-slate-900 dark:text-white bg-white dark:bg-reva-800">Dead Sea</option>
                <option value="Aqaba" className="text-slate-900 dark:text-white bg-white dark:bg-reva-800">Aqaba</option>
                <option value="Wadi Rum" className="text-slate-900 dark:text-white bg-white dark:bg-reva-800">Wadi Rum</option>
                <option value="Ajloun" className="text-slate-900 dark:text-white bg-white dark:bg-reva-800">Ajloun</option>
              </select>
              <ChevronDown className="absolute right-4 text-slate-400 dark:text-gray-400 pointer-events-none rtl:right-auto rtl:left-4" size={16} />
            </div>
            
            <div className="flex-1 flex items-center px-4 bg-white dark:bg-white/5 rounded-full h-12 md:h-14 border border-transparent focus-within:border-reva-gold/50 transition-all duration-300 group">
              <Calendar className="text-slate-400 dark:text-gray-400 mx-2 flex-shrink-0 group-focus-within:text-reva-gold transition-colors" size={20} />
              <input 
                type="text" 
                placeholder={t('searchDates')}
                className="bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 w-full text-sm md:text-base font-medium"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.type = 'text'}
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 md:h-14 px-10 bg-gradient-to-r from-reva-gold to-yellow-500 hover:from-yellow-400 hover:to-yellow-500 text-reva-900 font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-reva-gold/20 text-sm md:text-base"
            >
              <Search size={20} />
              <span>{t('searchButton')}</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Chalets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{t('exclusiveCollection')}</h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base">{t('collectionSub')}</p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-reva-gold hover:text-yellow-600 dark:hover:text-white transition-colors text-sm font-medium"
          >
            {t('viewAll')} <ArrowRight size={16} className="rtl:rotate-180" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredChalets.map((chalet, index) => (
            <ChaletCard key={chalet.id} chalet={chalet} index={index} t={t} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-16 md:py-24 mx-4 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none transition-shadow duration-500 group"
      >
        <div className="absolute inset-0 bg-reva-800 dark:bg-reva-800">
           <img 
             src="https://images.unsplash.com/photo-1589820296156-2454b3a95725?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-[2s]" 
             alt="CTA BG"
           />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">{t('listProperty')}</h2>
          <p className="text-gray-300 mb-8 md:mb-10 text-base md:text-lg">
            {t('listPropertySub')}
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/become-host')}
            className="px-8 md:px-10 py-4 bg-transparent border-2 border-reva-gold text-reva-gold hover:bg-reva-gold hover:text-reva-900 rounded-full font-bold transition-all text-sm md:text-base backdrop-blur-sm"
          >
            {t('becomeHost')}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;