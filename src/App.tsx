export type FormatedDate = {
  formatedDate: string
}

import "./App.css";
import MainCard from "./components/MainCard";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Infos from "./components/Infos";
import ThemeSwitch from "./components/ThemeSwitch";
import { useThemeContext } from "./hooks/useThemeContext";
import { useState } from "react";
import { User } from "./types/User";

function App() {
  const { theme } = useThemeContext();
  const [user, setUser] = useState<User | null>(null);

  const fetchData = async (userName: string) => {
    let url = `https://api.github.com/users/` + userName;
    const response = await fetch(url);
    const json = await response.json();

    const date = new Date(json.created_at).toLocaleString("en-us", { month: "short", year: "numeric", day:"numeric" })
    console.log(date);
    
    const formatedDate: FormatedDate = {
      formatedDate: date
    }
    
    if(response.status === 404) {
      return
    }

    const user: User = {
      avatarUrl: json.avatar_url,
      name: json.name,
      login: json.login,
      createdAt: formatedDate,
      profileUrl: json.html_url,
      repos: json.public_repos,
      followers: json.followers,
      following: json.following,
      location: json.location,
      company: json.company??"Not Available",
      twitterUrl: json.twitter_username??"Not Available",
      websiteUrl: json.blog
    }

    console.log(user);

    setUser(user);
  }

  return (
    <div
      className={
        theme === "light"
          ? "flex justify-center p-8 min-h-screen bg-light-mode-light-gray font-space-mono text-custom-body"
          : "flex justify-center p-8 min-h-screen bg-dark-mode-black font-space-mono text-custom-body"
      }
    >
      <MainCard>
        <Header children={<ThemeSwitch />} />
        <SearchForm fetchData={fetchData}/>
        {user && <Infos user={user}/>}
      </MainCard>
    </div>
  );
}

export default App;
