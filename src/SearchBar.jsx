import { useEffect } from "react";
import searchIcon from "./assets/search-svgrepo-com.svg";
export default function SearchBar({ userName, setUserName, githubUserData }) {
  function handleUserName(e) {
    e.preventDefault();
    setUserName(e.target.value);
    console.log("userName : ", userName);
    console.log("e.target.value : ", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    githubUserData(userName);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      githubUserData(userName);
    }
  }
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval running")
      githubUserData(userName);
    }, 1000)
    return () =>  clearInterval(timer);
  }, [userName]);
  return (
    <div className="flex border-2 rounded-xl p-1 sm:p-1.5 md:p-2 gap-1.5 sm:gap-3 bg-gray-200 w-[95%] lg:h-15 md:h-13">
      <input
        value={userName}
        onKeyDown={handleKeyDown}
        onChange={handleUserName}
        type="search"
        className="border-1 rounded-md p-1 flex flex-1"
        placeholder="Enter Github username..."
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className=" hidden sm:block cursor-pointer rounded-md px-2 md:px-4 py-1 font-semibold bg-green-500 text-white"
      >
        Search
      </button>
      <img
        type="submit"
        onClick={handleSubmit}
        className="block sm:hidden rounded w-[30px] bg-green-500 px-1 py-0.5 cursor-pointer"
        src={searchIcon}
        alt="search-icon"
      />
    </div>
  );
}
