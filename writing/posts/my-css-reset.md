---
title: My CSS reset
summary: A quick breakdown of my go-to CSS reset styles.
date: 2020-07-03
---

## What's a 'CSS reset'?

Every browser has their own default CSS styling for elements. A CSS reset is a set of styles which helps even out the inconsistencies between each browser. Even though browsers are getting more and more alike there's still a few things I like to "reset" before I start writing the CSS for my project.

## The reset

For a long time I used [Eric Meyer's classic CSS reset](https://meyerweb.com/eric/tools/css/reset/) whenever I started a project. Nowadays I just reuse some of his styles and some styles that other "web gurus" have pointed out – plus some of my own.

### 1. Box-sizing

```scss
*,
*:before,
*:after {
   box-sizing: border-box;
}
```

The default `box-sizing` is `content-box`, meaning that the width/height of an element is determined by it's padding, border _and_ width/height. An element with `width: 200px` and `padding: 40px` will be `280px` (40px on the left side and 40px on the right side) wide. There are so few scenarios where I would want that to happen that it's best to reset it to a more valuable default.

This reset makes sure that every element has the right `box-sizing` by using the `*`-selector.

### 2. Removing unnecessary margins

```scss
body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
   margin: 0;
}
```

These elements have margins and I do not necessarily want that. If I want margins on my headings or paragraphs I'll add that where it seems fit, but I do not want it from the get-go.

### 3. Horizontal scrolling is annoying

```scss
html {
   overflow-x: hidden;
}
```

Sometimes you find yourself in a position where you've added an element the exceeds the window's width and adds horizontal scrolling to the `<html>` element.

I hate when that happens - and I struggle to find a scenario where I would want that either, so by default I remove horizontal scrolling.

### 4. Body

```scss
body {
   scroll-behavior: smooth;
   line-height: 1.5;
}
```

The body is the parent of everything. I give it `line-height: 1.5` so that the text on my site has a nicer line-height than the default. Sometimes I even go with `1.6` to let the text breath even more. Remember: this doesn't mean that I don't have tighter line-heights on some elements, I override this wherever it seems fit, like for buttons or textareas.

`scroll-behavior: smooth` secures that whenever a user uses an anchor to jump to a certain point on the website the site will scroll smoothly up/down to that point, not _snap_ to that point like the default does. It's just a personal preferance.

### 5. Avoid overflowing images

```scss
img {
   max-width: 100%;
   display: block;
}
```

By default, if an image's width is wider than the container, it will overflow the container. `max-width: 100%` takes care of this problem.

Images are also inline by default, so writing `display: block` makes them easier to work with, like adding margin for instance.

### 6. Change the default link styling

```scss
a {
   color: inherit;
   font-weight: bold;
}
```

Unstyled links are blue. This makes them the same color as the parent's color. Links should also differentiate from normal text, so therefore I make them bold by default.

### 7. Fix the font on input elements

```scss
input,
button,
textarea,
select {
   font: inherit;
   color: inherit;
}
```

It's so frickin stupid that I even have to write this reset, but input elements (like the ones above) does not inherit `font-family`, `line-height`, `font-size` or `color` from `body` by default.

`font: inherit` thankfully takes care of this.

**FYI**, this could also have been written like this:

```scss
input,
button,
textarea,
select {
   font-family: inherit;
   font-size: inherit;
   line-height: inherit;
   color: inherit;
}
```

### 8. Remove the default button styling

```scss
button {
   border: 1px solid;
   background-color: transparent;
}
```

Buttons are ugly by default. This makes them less ugly, but I still have to override their appearance wherever I need buttons in my design.

### 9. Recude motion for people who prefers reduced motion

```scss
@media (prefers-reduced-motion: reduce) {
   * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
   }
}
```

This is taken straight out of [Adam Bell's CSS reset](https://hankchizljaw.com/wrote/a-modern-css-reset/), so you can read more about it there.

Notice that I'm overriding the `scroll-behaviour` from my `body`.

### The complete reset

```scss
*,
*:before,
*:after {
   box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
   margin: 0;
}

html {
   overflow-x: hidden;
}

body {
   scroll-behavior: smooth;
   line-height: 1.5;
}

img {
   max-width: 100%;
   display: block;
}

a {
   color: inherit;
   font-weight: bold;
}

input,
button,
textarea,
select {
   font: inherit;
}

button {
   border: 1px solid;
   background-color: transparent;
}

@media (prefers-reduced-motion: reduce) {
   * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
   }
}
```

That's it, that's my go-to CSS resets. I always write more resets throughout a project (like `ul.some-class-name {list-style: none}`), but not on a global level like the ones above.
