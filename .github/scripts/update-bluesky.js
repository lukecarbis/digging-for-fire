const fs = require('fs');
const path = require('path');
const axios = require('axios');
const matter = require('gray-matter');

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');
const BSKY_FEED_URL = 'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=diggingforfire.blog&limit=1';

(async () => {
  try {
	const { data } = await axios.get(BSKY_FEED_URL);
	const post = data.feed?.[0]?.post;
	if (!post) throw new Error('No Bluesky posts found');

	const bskyUri = post.uri;
	const bskyId = bskyUri.split('/').pop();
	const bridgyUrl = post.record?.bridgyOriginalUrl;
	if (!bridgyUrl) throw new Error('bridgyOriginalUrl not found');

	const slugMatch = bridgyUrl.match(/\/posts\/([a-z0-9\-]+)/i);
	if (!slugMatch) throw new Error('Could not extract slug from bridgyOriginalUrl');

	const slug = slugMatch[1];
	const postPath = path.join(POSTS_DIR, `${slug}.md`);
	if (!fs.existsSync(postPath)) throw new Error(`Markdown file not found for slug: ${slug}`);

	const file = fs.readFileSync(postPath, 'utf8');
	const parsed = matter(file);

	parsed.data.bluesky = bskyId;
	const updated = matter.stringify(parsed.content, parsed.data);
	fs.writeFileSync(postPath, updated);

	console.log(`✅ Updated bluesky field in ${slug}.md with ${bskyUri}`);
  } catch (err) {
	console.error('❌ Bluesky update failed:', err.message);
	process.exit(1);
  }
})();