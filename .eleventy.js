module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("assets");

  return {
    pathPrefix: "/eleventy-base-blog/"
  }
}