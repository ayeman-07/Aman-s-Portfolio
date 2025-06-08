import StackIcon from 'tech-stack-icons';
import skills from '@/constants/skills';
import { nxt } from '@/constants/images';
import Image from 'next/image';

const Skills = () => {
  return (
    <>
      <div className="flex items-end mb-4">
        <span className="text-6xl font-spaceGrotesk gradient-text">&#8220;</span>
        <div className="text-4xl font-textMeOne gradient-text">Skills...</div>
      </div>
      <div className="h-[70vh] w-full md:overflow-y-auto">
        <div className="flex flex-wrap justify-center items-center gap-10 p-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col justify-center items-center gap-3 text-xl"
            >
              {skill.name === 'nextjs' ? (
                <div className='bg-white rounded-full'><Image src={nxt} alt="NextJs" className="w-12"/></div>
              ) : (
                <StackIcon name={skill.name} className='w-12' />
              )} 
              <div>{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;