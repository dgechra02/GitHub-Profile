import React from "react";

export default function AdditionalDetails({label, value}) {
  let formattedValue = value;
  if(label === "Member Since" || label === "Last Upadted"){
    const isoDate = value;
    const  dateObj = new Date(isoDate);
    const options = {day: 'numeric', month: 'long', year: 'numeric'}
    formattedValue = dateObj.toLocaleDateString('en-US', options);
    // value = formattedDate;
    // changing the props in child component is not a good practice | it will work but (not recommended)
    // good practice is to make a new variable and assign 'value' to it and then change it;
    if(formattedValue === "Invalid Date") formattedValue = "NA"
  }
  // month: 'long' > "Format the month part of the date using the full name of the month (e.g., January, February, March...)."

//   Value	        Output Example
//   "numeric"	    4
//   "2-digit"	    04
//   "long"	        April
//   "short"	      Apr
//   "narrow"	      A (just the initial, useful in compact UIs)

  return (
    <span className="">
      {label}: <b>{formattedValue}</b>
    </span>
  );
}
