import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b-[0.1px] border-zinc-600 border-solid py-4">
      <nav>
        <div className="px-4 mx-auto max-w-7xl flex items-center justify-between">
          <div>
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-[24px] text-sky-500"
                >
                  Datsunbae
                </Link>
              </li>
              <li>
                <Link href="/blogs">📝 Blog</Link>
              </li>
              <li>
                <Link href="/projects">💡 Projects</Link>
              </li>
              <li>
                <Link href="/about-me">🤷‍♂️ About me</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <button>Toggle</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
