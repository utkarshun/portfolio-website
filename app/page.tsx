import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Resume from "@/components/resume/Resume";
import LeetcodeStats from "@/components/leetcode/LeetcodeStats";
import Publications from "@/components/publications/Publications";
import Education from "@/components/education/Education";
import Contact from "@/components/contact/Contact";
import TechScrollStrip from "@/components/ui/TechScrollStrip";
import Footer from "@/components/footer/Footer";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  type GitHubRepo,
} from "@/lib/github";
import {
  fetchLeetCodeStats,
  FALLBACK_LEETCODE_STATS,
} from "@/lib/leetcode";

export const revalidate = 3600;

export default async function Home() {
  const avatarUrl = "/profile.jpg";
  let publicRepos = 52;
  let followers = 444;
  let repos: GitHubRepo[] = [];
  let leetcodeStats = FALLBACK_LEETCODE_STATS;

  try {
    const [profile, githubRepos, stats] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos(),
      fetchLeetCodeStats(),
    ]);

    publicRepos = profile.public_repos;
    followers = profile.followers;
    repos = githubRepos;
    if (stats) leetcodeStats = stats;
  } catch {
    // Use fallback values
  }

  return (
    <>
      <Hero avatarUrl={avatarUrl} />
      <TechScrollStrip />
      <About
        avatarUrl={avatarUrl}
        publicRepos={publicRepos}
        followers={followers}
        leetcodeSolved={leetcodeStats.totalSolved}
      />
      <Experience />
      <Skills />
      <Projects repos={repos} />
      <Resume />
      <LeetcodeStats stats={leetcodeStats} />
      <Publications />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
