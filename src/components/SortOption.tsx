import React from "react";
import { Menu } from '@headlessui/react'

interface SortOptionProps {
  optValue: string;
  setSortType: (sType: string) => void;
}

const SortOption: React.FC<SortOptionProps> = ({ optValue, setSortType }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? 'bg-black/20 text-white' : 'text-gray-900'
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          onClick={() => setSortType(optValue)}
        >
          {optValue}
        </button>
      )}
    </Menu.Item>
  );
};

export default SortOption;
