export const GITHUB_USERNAME = "utkarshun";
export const GITHUB_API_BASE = "https://api.github.com";
export const REVALIDATE_GITHUB = 3600; // 1 hour

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  blog: string | null;
  location: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export async function fetchGitHubProfile(): Promise<GitHubProfile> {
  const res = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
    next: { revalidate: REVALIDATE_GITHUB },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  return res.json();
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    {
      next: { revalidate: REVALIDATE_GITHUB },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repos");
  }

  const repos: GitHubRepo[] = await res.json();
  return repos.filter((repo) => !repo.fork);
}

import { PROJECT_CATEGORIES } from "./constants";

export function getRepoCategory(repoName: string): string {
  return PROJECT_CATEGORIES[repoName] || "Other";
}
