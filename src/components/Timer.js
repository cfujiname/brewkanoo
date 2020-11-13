// import React, { useState, useEffect, Component } from 'react';
// import PropTypes from 'prop-types';

//   const Timer = () => { 
//   const [seconds, setSeconds] = useState(3); // to be changed this.props.startTime
//   const [isActive, setIsActive] = useState(false);

//   function toggle() {
//     setIsActive(!isActive);
//   }

//   function reset() {
//     setSeconds(3); //to be changed 
//     setIsActive(false);
//   }

//   useEffect(() => {
//     let interval = null;
//     if (seconds === 0) {
//     reset()
//     }
//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds(seconds => seconds - 1);
//       }, 1000);
//     } if (seconds === 0) {
//       reset()
//     }


//     return () => clearInterval(interval);
//   }, [isActive, seconds]);

//   return (
//     <div className="app">
//       <div className="time">
//         {seconds}s
//       </div>
//       <div className="row">
//         <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
//           {isActive ? 'Pause' : 'Start'}
//         </button>
//         <button className="button" onClick={reset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };


// export default Timer; 