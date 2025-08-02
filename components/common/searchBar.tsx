"use client";

import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";

interface SimpleSearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SimpleSearch({
  placeholder = "Search...",
  onSearch,
  className = "",
}: SimpleSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <div className={`w-64 ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-sm"
        />
      </div>
    </div>
  );
}
