import { Menu, Transition } from '@headlessui/react'
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Fragment } from 'react';

interface NavDropdownProps {
  label: string;
  subLinks: {
    label: string;
    link: string;
  }[];
}

export default function NavDropdown({ label, subLinks }: NavDropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-sm font-mono tracking-widest uppercase text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors relative flex items-center gap-1 group">
          {label}
          <ChevronDown size={16} className="ui-open:rotate-180 transition-transform" />
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-neonBlue group-hover:w-full transition-all duration-300"></span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-white/10 rounded-md bg-white dark:bg-carbon shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {subLinks.map(subLink => (
              <Menu.Item key={subLink.link}>
                {({ active }) => (
                  <Link
                    href={subLink.link}
                    className={`${
                      active ? 'bg-neonBlue/10 text-neonBlue' : 'text-black dark:text-white/80'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors`}
                  >
                    {subLink.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}