const MarkdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// let markdownItAnchor = require("markdown-it-anchor");

let mdOptions = {
    html: true,
    breaks: true,
    linkify: true
};

// let opts = {
//     permalink: true,
//     permalinkClass: "direct-link",
//     permalinkSymbol: "#"
// };
const mdRenderer = MarkdownIt(mdOptions);

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);


    eleventyConfig.addFilter("md", function (content) {
        return mdRenderer.render(content);
    });

    // eleventyConfig.setLibrary("md", mdRenderer
    //     .use(markdownItAnchor, opts)
    // );

    eleventyConfig.addWatchTarget("./**/*.(js|css)");

    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addPairedShortcode("element", function (content, tagname, classnames) {
        return `<${tagname} class="${classnames}">${content}</${tagname}>`
    });

    eleventyConfig.addShortcode("image", function (source, alt) {
        const html = String.raw;

        return `<img src="${source}" alt-text="${alt}" style="width: 200%; margin-left: -200px;"/>`;
    });
}