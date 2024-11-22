import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from 'next/image'; 

const Founder = () => {
  return (
    <div className="about-section">
      <div className="team-member flex items-center space-x-4">
        <Avatar className="w-32 h-32">
          <AvatarImage  className='ml-11'>
            {/* Image path relative to the /public directory */}
            <Image src="/assets/avatar.jpg" alt="John Doe" width={128} height={128} />
          </AvatarImage>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <h2 className='mt-5 font-bold text-2xl'>Charles Dickens</h2>
      <p className='text-gray-600'>The Founder, Bigspring LLC</p>
    </div>
  );
};

export default Founder;
