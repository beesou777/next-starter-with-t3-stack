"use client"
import React from 'react';
import EventsCards from '~/components/cards/event-card';

const SampleComponent = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((_, index) => (
                    <EventsCards
                        key={index}
                        title="string"
                        price="string"
                        date="string"
                        image="https://i.postimg.cc/SNnvK9N7/dami-exp.webp"
                        className="col-span-4 w-full sm:col-span-2 lg:col-span-1"
                        loading={true}
                    />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((_, index) => (
                    <EventsCards
                        key={index}
                        title="string"
                        price="string"
                        date="string"
                        image="https://i.postimg.cc/SNnvK9N7/dami-exp.webp"
                        className="col-span-4 w-full sm:col-span-2 lg:col-span-1"
                        loading={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default SampleComponent;
