const About = () => {
  return (
    <>
      <div className="flex items-end mb-2">
        <span className="text-6xl font-spaceGrotesk gradient-text">&#8220;</span>
        <div className="text-4xl font-textMeOne gradient-text">About Me</div>
      </div>

      <div className='font-textMeOne italic text-xl leading-relaxed mb-20 md:text-right'>
        <p>
          I am a third-year undergraduate at IIIT Surat with a strong interest in full-stack web development, data structures and algorithms, and competitive programming.
        </p>
      </div>

      <div className='font-light md:text-center text-xl tracking-wider leading-relaxed mb-20'>
        <p>
          I have hands-on experience in building scalable web applications using technologies like React, Node.js, Express, NextJS and MongoDB. I consistently work on improving my problem-solving skills and have a solid track record in coding platforms like LeetCode and Codeforces.
        </p>
      </div>

      <div className='text-lg font-spaceGrotesk italic font-thin text-left tracking-wide mb-10'>
        <p>
          I am dedicated to academic excellence and continuously strive to deepen my understanding of core computer science concepts. I'm looking for opportunities that allow me to grow as an engineer, solve meaningful problems, and contribute to high-impact development teams.
        </p>
      </div>

      <div className='text-lg text-link hover:text-blue-700 underline italic cursor-pointer'>
        <a href="https://drive.google.com/file/d/1kUPe6gZ2msL0TFZ_njAuYQcoOFQ3hf8M/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>
    </>
  )
}

export default About
