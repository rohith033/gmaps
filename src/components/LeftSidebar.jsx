// import React, { useState } from 'react';
// import '../styles/style.css';

// const LeftSidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   if (!isOpen) {
//     return (
//       <div className="closed-LeftSidebar">
//         <button onClick={handleOpen}>Open LeftSidebar</button>
//       </div>
//     );
//   }

//   return (
//     <div className="LeftSidebar">
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

// export default LeftSidebar;
import React, { useState } from 'react';
import '../styles/style.css';
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="closed-LeftSidebar">
        <button onClick={handleOpen}></button>
      </div>
    );
  }

  return (
    <div className="LeftSidebar">
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

export default LeftSidebar;
