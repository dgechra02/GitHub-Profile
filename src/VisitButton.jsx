import React from "react";

export default function VisitButton({ websiteUrl }) {
  return (
    <a href={websiteUrl} target="_blank">
      <button className="flex sm:hidden gap-2 px-4 py-2 rounded bg-blue-400 cursor-pointer font-semibold">
        <img
          className="w-[20px] h-[20px] "
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="image-logo"
        />
        Visit GitHub
      </button>
      <button className="hidden sm:flex lg:hidden gap-2 px-4 py-2 rounded bg-blue-400 cursor-pointer font-semibold">
        <img
          className="w-[20px] h-[20px] "
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="image-logo"
        />
        View my GitHub
      </button>
      <button className="hidden lg:flex gap-2 px-4 py-2 rounded bg-blue-400 cursor-pointer font-semibold">
        <img
          className="w-[20px] h-[20px] "
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="image-logo"
        />
        View Profile on GitHub
      </button>
    </a>
  );
}
