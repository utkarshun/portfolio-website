import { NextResponse } from "next/server";
import { fetchGitHubProfile, fetchGitHubRepos } from "@/lib/github";

export const revalidate = 3600;

export async function GET() {
  try {
    const [profile, repos] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos(),
    ]);

    return NextResponse.json({ profile, repos });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
