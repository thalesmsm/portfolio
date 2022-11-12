import Image from "next/image";

function Card({src, name}) {
  return ( 
    <div className='flex flex-col items-center text-center shadow-lg p-10 rounded-xl mt-10 w-40 dark:bg-gray-200'>
      <Image src={src} alt='' width={60} height={60}/>
      <h3 className='text-lg font-medium pt-8 pb-2'>{name}</h3>
    </div>
  );
}

export default Card;