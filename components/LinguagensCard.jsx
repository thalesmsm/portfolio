import Image from "next/image";

function Card({src}) {
  return ( 
    <div className='flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 basis-1/4 flex-1 lg:w-64 dark:bg-gray-200'>
      <Image src={src} alt='design' width={100} height={100}/>
      <h3 className='text-lg font-medium pt-8 pb-2'>JavaScript</h3>
      <p className='py-2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit quod dolores 
      </p>
      <h4 className='py-4 text-teal-600'>Back end</h4>
      <p className='text-gray-800 py-1'>Node.js</p>
      <p className='text-gray-800 py-1'>Node.js</p>
      <p className='text-gray-800 py-1'>Node.js</p>
    </div>
  );
}

export default Card;