'use client';

import { useState } from 'react';
import Image from 'next/image';

const WhatsAppButton = () => {
    const [hovered, setHovered] = useState(false);
    const url = `https://wa.me/4917674735594`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <span className="bg-white text-[#1A1A1A] font-nunito font-normal text-[14px] px-4 py-2 rounded-lg shadow-md whitespace-nowrap animate-fade-in">
                    Kontaktieren Sie uns
                </span>
            )}
            <div className="flex items-center justify-center w-[66px] h-[66px] bg-[#25D366] hover:bg-[#13A047] rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 shadow-[0px_4px_4px_0px_#00000040]">
                <Image
                    src="/assets/images/whatsapp.svg"
                    alt="WhatsApp"
                    width={39}
                    height={39}
                />
            </div>
        </a>
    );
};

export default WhatsAppButton;