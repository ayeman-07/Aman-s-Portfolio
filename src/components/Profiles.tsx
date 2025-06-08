import Image from 'next/image';

const Profiles = () => {
  const profiles = [
    {
      name: 'GitHub',
      url: 'https://github.com/ayeman-07',
      logo: '/images/github.svg',
      color: 'hover:text-[#333]',
      bgColor: 'bg-[#333]',
      description: 'My open source contributions and projects'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/aye_man_07/',
      logo: '/images/leetcode.svg',
      color: 'hover:text-[#FFA116]',
      bgColor: 'bg-[#FFA116]',
      description: 'My coding practice and solutions'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ayeman07/',
      logo: '/images/linkedin.svg',
      color: 'hover:text-[#0077B5]',
      bgColor: 'bg-[#0077B5]',
      description: 'My professional network and experience'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/amansingh93343',
      logo: '/images/codechef.svg',
      color: 'hover:text-[#5B4638]',
      bgColor: 'bg-[#5B4638]',
      description: 'My competitive programming journey'
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/hey_man',
      logo: '/images/codeforces.svg',
      color: 'hover:text-[#1F8ACB]',
      bgColor: 'bg-[#1F8ACB]',
      description: 'My competitive programming achievements'
    }
  ];

  return (
    <>
      <div className="flex items-end mb-12">
        <span className="text-6xl font-spaceGrotesk gradient-text">&#8220;</span>
        <div className="text-4xl font-textMeOne gradient-text">Profiles...</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-lg gradient-border overflow-hidden group hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-6 bg-primary/80">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${profile.bgColor} flex items-center justify-center p-2`}>
                  <Image
                    src={profile.logo}
                    alt={`${profile.name} logo`}
                    width={32}
                    height={32}
                    className="filter brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {profile.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {profile.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Profiles;
