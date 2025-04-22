import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import VisitButton from "./VisitButton";

export default function UserData({githubUserData, data}) {
  return (
    <>
      <Header
        githubUserData={githubUserData}
        username={data.login}
        profileImage={data.avatar_url}
        bioData={data.bio}
      />
      <hr className="w-[97%] h-2"/>
      {/* hr is not working here > need to give width and height */}
      <MainContent
        githubUserData={githubUserData}
        repository={data.public_repos}
        gitsts={data.public_gists}
        followers={data.followers}
        following={data.following}
        location={data.location}
        twitter={data.twitter_username}
        memberSince={data.created_at}
        lastUpdated={data.updated_at}
      />
      <VisitButton websiteUrl={data.html_url} />
    </>
  );
}
