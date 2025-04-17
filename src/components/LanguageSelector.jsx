import React from 'react';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
  const [lang, setLang] = React.useState("AR");
  const [open, setOpen] = React.useState(false);
  const languages = ["AR", "EN", "FR"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
      style={{
        background: "linear-gradient(90deg, #32A5EF 0%, #90D4FF 160.03%)",
        height: "50px"
      }}
    >
      <div className="max-w-[1920px] h-full mx-auto flex flex-row-reverse justify-center items-center gap-[70px] text-white relative px-4">
        <div className="flex items-center">
          <span className="text-base font-medium">اختر اللغة</span>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={() => setOpen(!open)}
        >
          <span className="text-base font-medium">{lang}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[40px] left-0 bg-white text-gray-800 rounded shadow-md overflow-hidden z-10"
            >
              {languages.map((l) => (
                <div
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setOpen(false);
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {l}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LanguageSelector;