import { FormatedDate } from "../App"

export type User = {
  avatarUrl: string,
  name: string,
  login: string,
  createdAt: FormatedDate ,
  profileUrl: string,
  repos: number,
  followers: number,
  following: number,
  location: string,
  company: string,
  twitterUrl: string,
  websiteUrl: string
}