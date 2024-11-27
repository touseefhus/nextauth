import Image from 'next/image';
import React from 'react'

const Hero = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center py-28'>
                <h1 className='leading-normal'>Let us solve your critical website <br /> development challenges</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque <br />
                    totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus</p>
                <div className="flex justify-center mt-10">
                    <Image src="/assets/banner.png" alt='' width={650} height={300} layout="intrinsic" />
                </div>
            </div>
        </div>
    )
}

export default Hero;