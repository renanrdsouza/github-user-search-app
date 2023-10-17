import { useEffect, useState } from "react";

type User = {
  avatarUrl: string,
  name: string,
  login: string,
  createdAt: string,
  profileUrl: string,
  repos: number,
  followers: number,
  following: number
  location: string,
  company: string,
  twitterUrl: string,
  websiteUrl: string
}

export const useFetch = (userName: string) => {
  let url: string = "https://api.github.com/users/".concat(userName);
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const fetchData = async (url: string) => {
    const response = await fetch(url).then(response => response.json())
  
      setUser({
        avatarUrl: response.avatar_url,
        name: response.name,
        login: response.login,
        createdAt: response.createdAt,
        profileUrl: response.profile_url,
        repos: response.repos,
        followers: response.followers,
        following: response.following,
        location: response.location,
        websiteUrl: response.website_url,
        twitterUrl: response.twitter_url,
        company: response.company
      })
    }

    fetchData(url);
  }, [url]);

  return { user }
}
