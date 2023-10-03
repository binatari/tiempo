// import React, { useState, useEffect } from 'react';
// import 'tailwindcss/tailwind.css';
// import './App.css'; // Add your own CSS file for custom styles
// import Scroll from 'react-scroll';

// import image from './images/your-image.jpg'; // Import the image using a relative path

// const App = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Calculate the rotation angle as a function of scroll position to achieve a 360-degree rotation effect
//   const rotateValue = (scrollY % 360) * -1;

//   return (
//     <div className="flex justify-center items-center h-screen">

//       <div className="flex">

//         <div
//           className="w-1/2 transform origin-center"
//           style={{
//             transform: `rotateY(${rotateValue}deg)`,
//             transition: 'transform 0.1s linear', // Adjust the transition duration as needed
//           }}
//         >
//           <img
//             src={image} // Use the imported image here
//             alt="Rotating Image"
//             className="w-full h-auto"
//           />
//         </div>


//         <div className="w-1/2 p-8">
//           <p>
//             {/* Your text content here */}
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default App;
