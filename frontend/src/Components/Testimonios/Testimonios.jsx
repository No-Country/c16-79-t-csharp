import { Carousel } from 'flowbite-react';
import data from './data'

export const Testimonios = () => {
  return (
    <>
       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {data.map((d)=> {
         return(
         <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
         <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center ">
           <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
         </div>
 
         <div className="flex flex-col justify-center items-center gap-4 p-4">
           <p className="text-xl font-semibold">{d.name}</p>
           <p>{d.review}</p>

         </div>
       </div>)
         
        })}
       
      </Carousel>
    </div>
    {/* <div  className="h-56 sm:h-64 xl:h-80 2xl:h-96 " >
<div className='mt-20'>
        <Carousel >
          {data.map((d) => {
            <div className="bg-white h-[450px] text-black rounded-xl">
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center ">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>
      
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Ver Mas
                </button>
              </div>
            </div>;
          })}
        </Carousel>
        </div>
    </div> */}
    </>
  );
}
