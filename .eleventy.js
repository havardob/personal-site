const MarkdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const {
    DateTime
} = require("luxon");

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
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    eleventyConfig.addFilter("md", function (content) {
        return mdRenderer.render(content);
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat("dd LLLL yyyy");
    });

    // eleventyConfig.setLibrary("md", mdRenderer
    //     .use(markdownItAnchor, opts)
    // );

    eleventyConfig.addWatchTarget("./**/*.(js|css)");

    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy("favicon.svg");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addPairedShortcode("element", function (content, tagname, classnames) {
        return `<${tagname} class="${classnames}">${content}</${tagname}>`
    });

    eleventyConfig.addShortcode("featuredImage", function (src, caption = '', altText = '', creditCaption = '', Creditsource) {

        return `
<figure class="article-image article-image--featured">
<div class="article-image-wrapper">
<a href="${src}" target="_blank">
<img
src="${src}"
alt="${altText}" 
/>
</a>
</div>
<figcaption class="article-image-caption">${caption}</figcaption>
</figure>
`;
    });

    eleventyConfig.addShortcode("image", function (src, caption = '', altText = '', creditCaption = '', creditSource) {

        return `
<figure class="article-image">
<div class="article-image-wrapper">
<a href="${src}" target="_blank">
<img
src="${src}"
alt="${altText}" 
/>
</a>
</div>
<figcaption class="article-image-caption">${caption} <a href="${creditSource}">${creditCaption}</a></figcaption>
</figure>
`;
    });
}