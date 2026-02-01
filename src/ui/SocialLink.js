import React from 'react'

const SocialLink = ({ children }) => {
  return (
    <div
      className="p-2 rounded-full text-white bg-white/15 backdrop-blur-lg border border-white/20
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)] hover:bg-white/20
                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_32px_rgba(0,0,0,0.45)] transition"
    >
      {children}
    </div>
  );
};

export default SocialLink;