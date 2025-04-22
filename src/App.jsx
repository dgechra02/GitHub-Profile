import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Error from "./Error";
import UserData from "./UserData";

function App() {
  console.log("app running ");

  const [userDataObj, setuserDataObj] = useState({});
  const [userName, setUserName] = useState("");
  const [inputErr, setInputErr] = useState(true);

  async function githubUserData(userName) {
    try {
      console.log("try is running before fetch");
      const response = await fetch(`https://api.github.com/users/${userName}`);
      console.log("response : ", response);
      if (!response.ok) {
        console.log("if running");
        throw new Error();
      } else {
        console.log("else running");
        setInputErr(false);
      }
      const data = await response.json();
      setuserDataObj(data);
      console.log("data : ", data);
    } catch (error) {
      // error = TypeError: Failed to fetch at githubUserData
      // error.message = Failed to fetch
      setInputErr(true);
      console.error(
        "Error fetching user data : ",
        error.message ?? "Response didn't come!"
      );
    }
  }
  // useEffect( () => {
  //   githubUserData(userName);
  // }, [userName]);
  // this is not needed
  // Ahh yep, I can see the issue clearly! You're calling the githubUserData(userName); directly inside the component, which causes it to run on every re-render, and that’s what's causing the infinite loop.

  //   sm   // ≥640px (small devices)
  // md   // ≥768px (medium devices)
  // lg   // ≥1024px (large devices)
  // xl   // ≥1280px
  // 2xl  // ≥1536px
  return (
    <div className="app flex flex-col items-center min-h-dvh gap-5 bg-gray-50 p-3">
      <SearchBar
        userName={userName}
        setUserName={setUserName}
        githubUserData={githubUserData}
      />
      {inputErr ? (
        <Error />
      ) : (
        <UserData githubUserData={githubUserData} data={userDataObj} />
      )}
    </div>
  );
}
export default App;

// postman is used for api testing

// const data = {
//   login: "dgechra02",
//   id: 186454940,
//   node_id: "U_kgDOCx0TnA",
//   avatar_url: "https://avatars.githubusercontent.com/u/186454940?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/dgechra02",
//   html_url: "https://github.com/dgechra02",
//   followers_url: "https://api.github.com/users/dgechra02/followers",
//   following_url:
//     "https://api.github.com/users/dgechra02/following{/other_user}",
//   gists_url: "https://api.github.com/users/dgechra02/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/dgechra02/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/dgechra02/subscriptions",
//   organizations_url: "https://api.github.com/users/dgechra02/orgs",
//   repos_url: "https://api.github.com/users/dgechra02/repos",
//   events_url: "https://api.github.com/users/dgechra02/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/dgechra02/received_events",
//   type: "User",
//   user_view_type: "public",
//   site_admin: false,
//   name: null,
//   company: null,
//   blog: "",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 17,
//   public_gists: 0,
//   followers: 1,
//   following: 4,
//   created_at: "2024-10-27T07:09:12Z",
//   updated_at: "2025-01-15T17:58:23Z",
// };
