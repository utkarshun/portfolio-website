import { NextResponse } from "next/server";
import {
  fetchLeetCodeStats,
  FALLBACK_LEETCODE_STATS,
} from "@/lib/leetcode";

export const revalidate = 21600;

export async function GET() {
  try {
    const stats = await fetchLeetCodeStats();
    return NextResponse.json(stats ?? FALLBACK_LEETCODE_STATS);
  } catch {
    return NextResponse.json(FALLBACK_LEETCODE_STATS);
  }
}
