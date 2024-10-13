import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.gif");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByTag("post");
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/feed.xml",
    collection: "posts",
    collection: {
      name: "posts",
      limit: 100,
    },
    metadata: {
      language: "en",
      title: "snats' weblog",
      subtitle:
        "a weblog for interesting stuff and short rambles on the internet.",
      base: "https://weblog.snats.xyz/",
      author: {
        name: "snats",
      },
    },
  });
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
}
