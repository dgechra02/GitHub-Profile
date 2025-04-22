import React from "react";
import Card from "./Card";
import AdditionalDetails from "./AdditionalDetails";

export default function MainContent({
  repository,
  gitsts,
  followers,
  following,
  location,
  // location = "NA",
  // it will not work because, in the location an intentional 'null' valule is coming, so location will not set to the default value (NA)
  twitter,
  memberSince,
  lastUpdated,
  rajendra = "NA"
  // here it will work kyuki 'rajendra' me kuch aa hi nhi rha, to ye default value pe set kr dega
}) {
  console.log("rajendra",rajendra);
  console.log(location);
  const additionalDetails = [
    { label: "Location", value: location ?? "NA"},
    { label: "Twitter", value: twitter ?? "NA" },
    { label: "Member Since", value: memberSince ?? "NA" },
    { label: "Last Upadted", value: lastUpdated ?? "NA" },
  ];
  const extraDetails = [
    { label: "repository", value: repository },
    { label: "followers", value: followers },
    { label: "following", value: following },
    { label: "gitsts", value: gitsts },
  ];
  return (
    <div className="flex flex-col gap-5 w-[100%]">
      <div className="cards flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:items-center w-[95%] m-auto">
        {extraDetails.map(({ label, value }, index) => {
          return <Card key={index} label={label} value={value} />;
        })}
      </div>
      <div className="extraDetails w-[100%]">
        <div className="grid sm:grid-cols-2 sm:gap-3 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] m-auto">
        {additionalDetails.map(({ label, value }, index) => {
          return <AdditionalDetails key={index} label={label} value={value} />;
        })}
        </div>
      </div>
    </div>
  );
}
