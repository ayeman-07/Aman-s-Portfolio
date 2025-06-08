'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      name: 'GitHub',
      icon: '/images/github.svg',
      link: 'https://github.com/ayeman-07',
      color: 'hover:text-[#333]',
      bgColor: 'bg-[#333]'
    },
    {
      name: 'LinkedIn',
      icon: '/images/linkedin.svg',
      link: 'https://www.linkedin.com/in/ayeman07/',
      color: 'hover:text-[#0077B5]',
      bgColor: 'bg-[#0077B5]'
    },
    {
      name: 'Gmail',
      icon: '/images/gmail.svg',
      link: 'mailto:amansingh93343@gmail.com',
      color: 'hover:text-[#EA4335]',
      bgColor: 'bg-[#EA4335]'
    },
    {
      name: 'Instagram',
      icon: '/images/instagram.svg',
      link: 'https://www.instagram.com/ayeman_07/',
      color: 'hover:text-[#E4405F]',
      bgColor: 'bg-[#E4405F]'
    },
    {
      name: 'Phone',
      icon: '/images/phone.svg',
      link: 'tel:+919335432433',
      color: 'hover:text-[#4CAF50]',
      bgColor: 'bg-[#4CAF50]'
    }
  ];

  return (
    <NavBar section='Contact'>
      <div className="flex items-end mb-4">
        <span className="text-6xl font-spaceGrotesk gradient-text">&#8220;</span>
        <div className="text-4xl font-textMeOne gradient-text">Contact...</div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <p className="text-text-secondary mb-6">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="glass-effect rounded-lg gradient-border overflow-hidden">
            <div className="p-6 bg-primary/80">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-primary/30 border border-accent-purple/20 rounded-md focus:ring-2 focus:ring-accent-purple focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-primary/30 border border-accent-purple/20 rounded-md focus:ring-2 focus:ring-accent-purple focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-primary/30 border border-accent-purple/20 rounded-md focus:ring-2 focus:ring-accent-purple focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full mt-4 py-2.5 px-4 rounded-md text-white font-medium transition-all duration-300
                    ${status === 'loading' 
                      ? 'bg-accent-purple/50 cursor-not-allowed' 
                      : 'bg-gradient-accent hover:shadow-glow-strong hover:scale-[1.02]'}`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-accent-teal text-center mt-4">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-accent-pink text-center mt-4">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Contact Icons */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-center mb-6 gradient-text">Connect with me</h3>
          <div className="grid grid-cols-2 gap-4">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-lg gradient-border overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="p-4 bg-primary/80">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${contact.bgColor} flex items-center justify-center p-2`}>
                      <Image
                        src={contact.icon}
                        alt={`${contact.name} icon`}
                        width={24}
                        height={24}
                        className="filter brightness-0 invert"
                      />
                    </div>
                    <span className="font-medium text-white">
                      {contact.name}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default ContactPage; 