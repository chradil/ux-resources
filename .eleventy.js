module.exports = function(eleventyConfig) {
  return {
    pathPrefix: "/ux-resources/"
  }

  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("assets");


}