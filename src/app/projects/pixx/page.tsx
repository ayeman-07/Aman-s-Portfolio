import Header from '@/components/pixx/header';  
import Start from "@/components/pixx/Start";
import sections from '@/constants/pixx';
import Section from '@/components/pixx/Section';

export default function Pixx() {
  return (
    <>
      <div className="p-5 md:h-screen ">
        <Header />      
        <Start/>
      </div>
      {sections.map((section, index) => (
        <Section key={index} imageSrc={section.imageSrc} content={section.content} />
      ))}
    </>
  );
}