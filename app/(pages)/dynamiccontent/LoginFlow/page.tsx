"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Choices } from '../_const/choices';



const LoginFlow: React.FC = () => {
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);


  // Function to select a random choice
  const selectRandomChoice = () => {
    const index = Math.floor(Math.random() * Choices.length);
    setRandomIndex(index);
  };

  useEffect(() => {
    // Function to select a random choice
    const selectRandomChoice = () => {
      const index = Math.floor(Math.random() * Choices.length);
      setRandomIndex(index);
    };
    if (typeof window !== 'undefined' && randomIndex === null) {
      selectRandomChoice();
    }
  }, [randomIndex]); // Dependency array ensures this effect runs only once after initial render
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}><img src="/star-16.png" /></span>);
      } else {
        stars.push(<span key={i} style={{ color: 'transparent' }}><img src="/star-17.png" /></span>);
      }
    }
    return stars;
  };

  return (
    <>
      <div className='grid p-5 m-5'>
        <h1 className='bg-gradient-to-r text-4xl md:text-6xl text-center font-bold from-pink-300 via-orange-500 to-pink-200 inline-block text-transparent bg-clip-text'>
          WELCOME WITH ROADMAPS
        </h1>
        <h3 className='text-white  text-center p-4 m-4'>With Roadmap you can be precise with your journey.</h3>
      </div>

      <div className='flex justify-center'>
        <button onClick={() => setIsDialogOpen(true)} className="text-white bg-gradient-to-br from-[#312e81] to-[#a5b4fc] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pin font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
          How Roadmap Helps
        </button>
      </div>
      {/** in dialog  */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 md:w-800">
            <p>How roadmap helps u here </p>
            <button onClick={() => setIsDialogOpen(false)} className=" flex text-white bg-gradient-to-br from-[#312e81] to-[#a5b4fc] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm p-2 text-center ">
              Close Dialog
            </button>
          </div>
        </div>
      )}

      {/* Random choices  when the component mounts or updates*/}

      <div className="p-6 m-2 rounded-md">
        {randomIndex !== null && (
          <div className="flex flex-col md:flex-row overflow-hidden shadow-md">
            <div className="md:w-1/2 bg-gradient-to-br p-4">
              <div className='flex p-2 m-6 space-x-1'>{renderStars(Choices[randomIndex].rating)}</div>
              {/* title */}
              <h2 className="text-xl md:text-3xl font-semibold p-2 m-6 text-white">{Choices[randomIndex].title}</h2>
              {/* details */}
              <h1 className='flex p-2 ml-6 text-[#cbd5e1] text-sm md:text-base'>{Choices[randomIndex].pageContent.mainLine}</h1>
              {/* View more -> detailspage button */}
              <Link href={`/dynamiccontent/${Choices[randomIndex].id}`} prefetch={false}>
                <button className="ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#312e81] to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none ">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Show more
                  </span>
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Link href={`/dynamiccontent/${Choices[randomIndex].id}`} prefetch={false}>
                <div>
                  <video controls className="w-full md:w-400 h-450">
                    <source src={Choices[randomIndex].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>



      <h2 className='text-white text-center  text-4xl p-8 m-6 font-bold lg:text-3 hover:scale-105'> Explore More </h2>


      <div >
        <div className=" flex flex-nowrap justify-start w-screen overflow-x-auto hide-scrollbar  hover:shadow-lg overflow-hidden ">
          {Choices.map((item, index) => (
            <div key={index} className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-none h-[500px]  m-6  bg-[#d8b4fe] bg-opacity-20 rounded-lg  p-1 dev transform transition-transform hover:ring-2 hover:ring-[#FF8ED0] shadow-sm">
              <Link href={`/dynamiccontent/${item.id}`} prefetch={false}>

                <div className='h-[30%]'> <img src={item.image} alt={`${item.title} image`} className=" flex w-full h-full object-cover rounded" /></div>
                <div className='space-x-1 flex ml-6 p-2'>{renderStars(item.rating)}</div>
                <h2 className="text-2xl  text-white font-semibold text-center mt-2 p-2 h-[15%]">{item.title}</h2>
                <p className='text-[#cbd5e1] text-sm h-[20%] p-4'> {item.pageContent.mainLine}</p>
                <Link href={`/dynamiccontent/${item.id}`} className='inline-flex items-center px-3 h-[40%] text-sm font-medium text-center text-[#FB8971]'>
                  View more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>

              </Link>
            </div>
          ))}
        </div>


      </div>






    </>
  );
};

export default LoginFlow;
