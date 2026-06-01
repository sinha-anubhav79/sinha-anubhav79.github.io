import React from 'react';

const monthFinder = (monthNumber) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthNumber-1];
}
 
export {monthFinder};