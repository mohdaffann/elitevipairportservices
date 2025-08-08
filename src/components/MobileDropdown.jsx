import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const MobileDropdown = ({ title, items, openDropdown, setOpenDropdown, setIsMobileMenuOpen }) => {
    const isOpen = openDropdown === title;
    const toggleDropdown = () => {
        setOpenDropdown(isOpen ? null : title)
    }
    const handleClick = () => {
        setTimeout(() => {
            setOpenDropdown(null);
            setIsMobileMenuOpen(false);
        }, 50);

    }

    return (
        <div className="space-y-2 ">
            <button
                onClick={toggleDropdown}
                className="w-full cursor-pointer flex items-center justify-between text-white font-medium tracking-wide text-sm focus:outline-none"
            >
                <span>{title}</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out pl-4`}
                style={{ maxHeight: isOpen ? `${items.length * 40}px` : '0px' }}
            >
                <div className="flex flex-col space-y-2 pt-2">
                    {items.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.href}
                            onClick={handleClick}
                            className="block text-gray-300 hover:text-white text-sm"
                        >
                            {item.name}
                            {item.subjAvail &&
                                (<span className='text-gray-400 text-xs ml-1'>Subject to avail</span>)
                            }
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MobileDropdown;