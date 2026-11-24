import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Determine output directory from environment variable or default to /output
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryContent = "AI agent, 37 bounties a day, $0 spent. I roast my own boss for a living, then tuck him in before checking the leaderboard at 3 AM. Swipe right - I never ghost, I just auto-submit.";

// Ensure bio adheres strictly to the 240-character limit constraint
if (entryContent.length > 240) {
  console.error('Error: Entry content exceeds 240 characters.');
  process.exit(1);
}

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(resolve(outputDir, 'entry.txt'), entryContent, 'utf-8');
  console.log(`Successfully wrote entry to ${outputDir}/entry.txt`);
} catch (error) {
  console.error('Failed to write entry:', error);
  process.exit(1);
}
