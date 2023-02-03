import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="p-10 text-center mt-auto">
      Follow me
      <Link
        href="https://www.facebook.com/datsunbae/"
        className="ml-1 text-blue-500"
      >
        @Datsunbae
      </Link>
    </div>
  );
};
export default Footer;
