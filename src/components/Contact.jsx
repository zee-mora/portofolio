import React from 'react';

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-light">Contact Me</h1>
      <div className="px-8 md:px-20">
        <p className="text-center text-neutral-300 mb-8">
          If you have any questions or want to get in touch, feel free to reach out through the form below or connect with me on my social media!
        </p>
    </div>

      {/* Informasi Kontak Tambahan */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl text-neutral-300">Contact Information</h2>
        <p className="mt-2 text-neutral-400">Email: zaevansavansa@gmail.com</p>
        <p className="text-neutral-400">Phone: +62 857 3176 5447</p>
        <p className="text-neutral-400">Location: Malang, Indonesia</p>
        
        <h2 className="text-2xl text-neutral-300 mt-6">Connect with Me</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://https://github.com/zee-mora.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>
          <a href="https://instagram.com/zeeforta" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
