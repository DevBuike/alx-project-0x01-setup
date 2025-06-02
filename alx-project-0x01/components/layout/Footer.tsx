import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4 mt-10">
      © {new Date().getFullYear()} MyBlog. All rights reserved.
    </footer>
  );
};

export default Footer;