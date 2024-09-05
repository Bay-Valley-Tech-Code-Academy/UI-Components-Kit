import React from 'react';
import Link from 'next/link';

const NavBarOneDetails = () => {
    return (
        <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md mt-4 text-[#ffffff]">
            <h1 className="text-3xl font-bold mb-4">Navbar Details</h1>
            <p>
                Detailed information about the <code>NavbarOne</code> component will be provided here.
            </p>
            <p className="text-[#ffffff] mt-4">
                <strong>More Details:</strong>
                <a
                    href="https://react-bootstrap.netlify.app/docs/components/navbar/"
                    className="text-indigo-200 hover:text-orange-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn more about NavBar 
                </a>
            </p>
            {/* Add more details about the NavbarOne component */}
        </div>
    );
};

export default NavBarOneDetails;
