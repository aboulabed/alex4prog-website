import React from 'react';

type ServiceCardProps = {
    image: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};

export default function ServiceCard({ image, title, description, icon }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300 relative">
            {/* Image */}
            <div className="relative w-full aspect-[3/3]">
                <img src={image} alt={title} className="w-full h-full object-cover" />

                {/* Icon positioned at bottom center */}
                <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 z-20">
                    <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                        {icon}
                    </div>
                </div>
            </div>

            {/* Text content */}
            <div className="pt-10 pb-6 px-5 text-center flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 mt-2 mb-4">{description}</p>
                <a href="#" className="text-blue-600 font-semibold hover:underline">View More</a>
            </div>
        </div>
    );
}
