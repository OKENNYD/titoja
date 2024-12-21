'use client'
import { useTheme } from 'next-themes'
import { IoSunny, IoMoon } from 'react-icons/io5';
export default function Theme() {
  let { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}
      className="w-10 box-border h-5 rounded-full flex bg-dim dark:bg-gray-400 transition-colors duration-700"
    >
      <div
        className={`size-5 aspect-square rounded-full bg-gray-200 dark:bg-dim duration-700 transition-transform p-[2px] ${
          theme === "light" ? "translate-x-0" : "translate-x-full"
        } flex justify-center items-center`}
      >
        {theme === "light" ? (
          <IoMoon className="text-dim transition-colors duration-700" />
        ) : (
          <IoSunny className="text-gray-200 transition-colors duration-700" />
        )}
      </div>
    </div>
  );
}
