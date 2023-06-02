// import React, { useState } from 'react';
// import '../styles/style.css';

// const RightSidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   if (!isOpen) {
//     return (
//       <div className="closed-RightSidebar
// ">
//         <button onClick={handleOpen}>Open RightSidebar
//   </button>
//       </div>
//     );
//   }

//   return (
//     <div className="RightSidebar">
//       <div className="close-button" onClick={handleClose}>
//         <span>&times;</span>
//       </div>
//       <div className="search-bar">
//         <input type="text" placeholder="Search" />
//         <button>Search</button>
//       </div>
//       <div className="empty-space">
//         {/* The rest of the content goes here */}
//       </div>
//     </div>
//   );
// };

// export default RightSidebar;
import React, { useState } from 'react';
import '../styles/style.css';
const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="closed-RightSidebar">
        <button onClick={handleOpen}></button>
      </div>
    );
  }

  return (
    <div className="RightSidebar">
      <div className="close-button" onClick={handleClose}>
        <span>&times;</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="empty-space">
        {/* The rest of the content goes here */}
      </div>
    </div>
  );
};

export default RightSidebar;

