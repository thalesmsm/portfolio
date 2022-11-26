import Image from "next/image";

function Card({src, name}) {
  return ( 
    <div className='flex flex-col items-center text-center w-[140px] h-[140px] shadow-lg p-10 rounded-xl mt-5 dark:bg-gray-200'>
      <div className="flex flex-col items-center justify-center">
        <Image src={src} alt='' className="w-10"/>
        <h3 className='text-lg font-medium'>{name}</h3>
      </div>
    </div>
  );
}

export default Card;