import React, { ChangeEvent } from "react";
import { useAppDispatch } from '../reduxStore/hooks';
import { loggedOut } from '../reduxStore/userLogSlice';

interface HeaderProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ inputValue, setInputValue }) => {
  const dispatch = useAppDispatch(); // Typed dispatch

  const handleLogOut = () => {
    dispatch(loggedOut());
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Name */}
      <div className="text-xl font-bold">OTT</div>

      {/* Search Bar */}
      <div className="mx-4 w-4/12 relative">
        <input
          type="text"
          placeholder="Type here..."
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:shadow-outline text-white" 
          value={inputValue}
          onChange={handleInput}
        />
      </div>

      {/* Logout Button */}
      <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded" onClick={handleLogOut}>Logout</button>
    </nav>
  );
};

export default Header;
