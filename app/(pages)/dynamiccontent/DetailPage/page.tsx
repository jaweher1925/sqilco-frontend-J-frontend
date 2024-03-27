"use client"

import React from 'react';
import { Choices } from '../_const/choices';

interface PageContent {
  title: string;
  periode: string;
  mainLine: string;
  points: string[];
}

interface Choice {
  id: number;
  image: string;
  pageContent: PageContent;
}

interface DetailPageProps {
  id: number;
}

const DetailPage: React.FC<any> = ({ id }) => {
  const selectedChoice: Choice | undefined = Choices.find(choice => choice.id === id);

  if (!selectedChoice) {
    return <div>Choice not found</div>;
  }

  return (
    <>
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-4 p-3 bg-[#151523]">
      <div className='justify-center pt-8 md:ml-24 '>
        <h1 className='font-bold lg:text-5xl text-white '>
          <span className="text-pink-10 m-4 p-4"> {selectedChoice.pageContent.title} </span>
        </h1>

        <p className="text-lg mb-4 p-4 justify-start">{selectedChoice.pageContent.mainLine}</p>

      </div>
      <div className="flex-1 items-start hidden md:block ">
        <div className="h-full w-full relative z-20 flex-col ">
          <img src={selectedChoice.image} alt={`${selectedChoice.pageContent.title} image`} className="w-full h-full object-cover mb-2 rounded data-twe-animation-delay" />
        </div>
      </div>

   
        <h1 className=' mt-4 text-3xl justify-start  font-bold'> What you’ll <span className='text-pink-10 text-3xl' >Learn</span> </h1>
        <ul className=" list-disc list-inside text-lg">
          <h2>points :</h2>
          {selectedChoice.pageContent.points.map((point: string, index: number) => (
            <h1 key={index}>{point}</h1>
          ))}
        </ul>
  
   

    </div>
    </>
  );
};

export default DetailPage; 
