"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form");
    if (form instanceof HTMLFormElement) form.reset();
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <X size={24} />
      </Link>
    </button>
  );
};

export default SearchFormReset;
