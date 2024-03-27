import Image from "next/image";
import { PEOPLE_URL } from "@/constant";

interface CompaniesProps {
    backgroundImage: string;
    title: string;
    subtitle?: string;
    peopleJoined: string;
  }
  
  const CompaniesList = ({ backgroundImage, title, subtitle, peopleJoined }: CompaniesProps) => {
    return (
      <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
       <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full colour_pink_orange p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-black-10">{title}</h4>
            <p className="regular-14 text-black-10">{subtitle}</p>
          </div>
        </div>
  
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image 
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-black-10">{peopleJoined}</p>
        </div>
       </div>
      </div>
    )
  }
  
  const Companies = () => {
    return (
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <CompaniesList 
            backgroundImage="bg-bg-img-1"
            title="Software Development"
            subtitle="Most promising skill of the future"
            peopleJoined="2000+ Joined"
          />
          <CompaniesList 
            backgroundImage="bg-bg-img-2"
            title="Data Analytics"
            subtitle="Backbone of every big company"
            peopleJoined="1500+ Joined"
          />
        </div>
  
        <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-black-30 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              <strong>Feeling Lost</strong> And Not Knowing The <span className="text-orange-10">Way</span>?
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
              It's normal to feel anxious about tomorrow. Every kid, adult and old goes through it. But maybe with the help of technology, we can run towards our dreams faster than ever.
            </p>
            <Image 
              src="/quote.svg"
              alt="camp-2"
              width={186}
              height={219}
              className="camp-quote"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default Companies