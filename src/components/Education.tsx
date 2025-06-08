import { school } from '@/constants/images';
import { IIITS } from '@/constants/images';
import Image from 'next/image';

const Education = () => {
  return (
    <>
      <div className="flex items-end mb-4">
        <span className="text-6xl font-spaceGrotesk gradient-text">&#8220;</span>
        <div className="text-4xl font-textMeOne gradient-text">Education...</div>
      </div>
      <div className='flex flex-col gap-5 mt-10 ml-5 w-full'>
        <div className='flex gap-5 md:flex-row flex-col '>
          <div>
            <Image src={IIITS} alt="IIITS" width={100} className='rounded-full' priority/>
          </div>
          <div>
            <div className='text-2xl font-spaceGrotesk'>Indian Institute of Information Technology, Surat</div>
            <div className='text-xl font-spaceGrotesk'>November 2022-2026 {"( Currently Studying)"} </div>
            <div className='text-lg font-spaceGrotesk'>B.Tech in Electronics and Communication Engineering </div>
            <div className='text-xl font-spaceGrotesk'>9.27 CGPA {"( till 6th Semester )"}</div>
          </div>          
        </div>
        <div className='bg-white w-[80%] h-1 mb-10'></div>
        <div className='flex gap-5 md:flex-row flex-col '>
          <div>
            <Image src={school} alt="TEPS" width={100} className='rounded-full' priority/>
          </div>
          <div>
            <div className='text-2xl font-spaceGrotesk'>The Earth Public School, Patna</div>
            <div className='text-xl font-spaceGrotesk'>April 2019- June 2021</div>
            <div className='text-lg font-spaceGrotesk'>Senior Secondary</div>
            <div className='text-xl font-spaceGrotesk'>Got 85% - Physics, Chemistry, Maths</div>
          </div>
        </div>
        <div className='bg-white w-[80%] h-1'></div>
      </div>
    </>
  )
}

export default Education