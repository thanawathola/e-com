// components/SearchBar.tsx
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // If you have react-icons installed

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Implement search functionality
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="flex w-full rounded-full overflow-hidden border-2 border-blue-500">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for product..."
                className="w-full p-2 bg-black "
            />
            <button
                onClick={handleSearch}
                className="flex items-center justify-center bg-black text-blue-500 p-2"
            >
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;