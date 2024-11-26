"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function CarouselSlider() {
    // Array of images to show in the carousel
    const images = [
        "/assets/hubspot.png",
        "/assets/hubspot.png",
        "/assets/hubspot.png",
        "/assets/hubspot.png",
        "/assets/hubspot.png",
        "/assets/hubspot.png",
        "/assets/hubspot.png",
        "/assets/hubspot.png",
        "/assets/hubspot.png",
        "/assets/hubspot.png",
    ];

    return (
        <div className="container px-2 py-10 mx-auto">
            <Carousel className="w-full">
                <CarouselContent className="flex">
                    {images.map((image, index) => (
                        <CarouselItem
                            key={index}
                            className="flex-none w-full sm:w-1/2 md:w-1/4 lg:w-1/6"
                        >
                            <div className="p-1">
                                <Card className="border rounded-lg shadow-md">
                                    <CardContent className="flex justify-center p-6 bg-gray-100">
                                        <Image
                                            src={image}
                                            alt={`Image ${index + 1}`}
                                            width={150}
                                            height={150}
                                            className="object-contain"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselSlider;
