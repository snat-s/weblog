module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("css");
  return {
		dir: {
			input: "src"
		}
	}
};