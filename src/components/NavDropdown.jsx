import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavDropdown = ({ title, items, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-4 py-2 text-white hover:text-yellow-600 transition-colors duration-200 font-medium"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-1   w-64  bg-gray-800 rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-200 ${isOpen
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-2'
          }`}
      >
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className="block px-4 py-2 text-white hover:bg-blue-50 hover:text-yellow-600 transition-colors duration-150 capitalize"
          >
            {item.name}
            {item.subjAvail &&
              (<span className='text-gray-400 text-xs ml-1'>Subject to avail</span>)
            }
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default NavDropdown