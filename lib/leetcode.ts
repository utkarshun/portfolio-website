export const LEETCODE_USERNAME = "utkarshkher";
export const REVALIDATE_LEETCODE = 21600; // 6 hours

export interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

const LEETCODE_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
        reputation
        contributionPoints
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

export async function fetchLeetCodeStats(): Promise<LeetCodeStats | null> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: LEETCODE_QUERY,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: REVALIDATE_LEETCODE },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const matchedUser = data?.data?.matchedUser;

    if (!matchedUser) return null;

    const acStats = matchedUser.submitStats.acSubmissionNum;
    const allQuestions = data.data.allQuestionsCount;

    const getCount = (difficulty: string, arr: { difficulty: string; count: number }[]) =>
      arr.find((item) => item.difficulty === difficulty)?.count ?? 0;

    const totalSolved = getCount("All", acStats);
    const easySolved = getCount("Easy", acStats);
    const mediumSolved = getCount("Medium", acStats);
    const hardSolved = getCount("Hard", acStats);

    const totalQuestions = getCount("All", allQuestions);
    const totalEasy = getCount("Easy", allQuestions);
    const totalMedium = getCount("Medium", allQuestions);
    const totalHard = getCount("Hard", allQuestions);

    const totalSubmissions = acStats.reduce(
      (sum: number, item: { submissions: number }) => sum + item.submissions,
      0
    );

    return {
      totalSolved,
      totalQuestions,
      easySolved,
      totalEasy,
      mediumSolved,
      totalMedium,
      hardSolved,
      totalHard,
      acceptanceRate:
        totalSubmissions > 0
          ? Math.round((totalSolved / totalSubmissions) * 100 * 100) / 100
          : 0,
      ranking: matchedUser.profile?.ranking ?? 0,
      contributionPoints: matchedUser.profile?.contributionPoints ?? 0,
      reputation: matchedUser.profile?.reputation ?? 0,
    };
  } catch {
    return null;
  }
}

// Fallback stats from profile when API fails
export const FALLBACK_LEETCODE_STATS: LeetCodeStats = {
  totalSolved: 341,
  totalQuestions: 3985,
  easySolved: 164,
  totalEasy: 953,
  mediumSolved: 157,
  totalMedium: 2081,
  hardSolved: 20,
  totalHard: 951,
  acceptanceRate: 65,
  ranking: 0,
  contributionPoints: 0,
  reputation: 0,
};
