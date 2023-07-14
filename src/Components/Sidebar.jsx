import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="p-5 bg-gray-800 list-none">
        <ul>
          <li>Home</li>
          <li>Search</li>
        </ul>
      </div>
      <div>
        <div>
          <h3>Your Library</h3>
        </div>
        <div>
          <ul>
            <li>liked songs</li>
            <li>anay</li>
            <li>chilling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
