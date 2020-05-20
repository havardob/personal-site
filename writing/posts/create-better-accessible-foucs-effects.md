---
title: Create better, accessible focus effects
summary: Here’s a neat little CSS-trick for when you need an alternative to the outline property.
date: 2020-03-29
about: This article was first published in the publication [UXCollective](https://uxdesign.cc/) on Medium. [Read it here](https://uxdesign.cc/create-better-accessible-focus-effects-75a3de27b8ba)
---

{% featuredImage 'https://miro.medium.com/max/2000/1*ZssW3jBezWSKrIhpmWpUIw.jpeg' %}

Most browsers has their own default, outline style for the :focus psuedo-class.

{% image 'https://miro.medium.com/max/1050/1*k0wkZMbSbNcGJV2tP8UaoA.png', 'Chrome’s default outline style' %}

This outline style is crucial for accessibility, especially when it comes to keyboard navigation, so removing it [isn’t considered a good thing](https://a11yproject.com/posts/never-remove-css-outlines/).

_However_, it is OK to do so if you _replace the styling_ with something else.

I’m not a huge fan of the default browser outline. Take chrome’s for example. I think the color is too light and the border too thin. Sure, you can always change the color and thickness. Like this:

{% image 'https://miro.medium.com/max/1014/1*Ebe4t8IHlaXL9LSVaV98Tw.png', 'Overridden outline style' %}

<script src="https://gist.github.com/havardob/a3c82b4b7e8c390f5141f165935a6eee.js"></script>

This approach is fine, but a “problem” with outline property is that it doesn’t follow the rounded corners. Personally I would prefer if this wasn’t the case so I tend to go with a different solution.'

## Use box-shadow instead

You can achieve the same result using box-shadow. Here’s how:

<script src="https://gist.github.com/havardob/fb52e2aa80389dbf44930c22879482b4.js"></script>

This will now be applied to every element’s default focus style. Like for the inputs in this form:

{% image 'https://miro.medium.com/max/1400/1*Zkvxheliq4XDHVjuA4UP6g.gif' %}

However, these inputs have a border and I don’t think it looks _that good_ when you have both the borders and the box-shadow-effect.

You can get around that by removing the border-color upon focus:

{% image 'https://miro.medium.com/max/1400/1*1zoptpQ3wUnXyW9bKS8Jnw.gif' %}

<script src="https://gist.github.com/havardob/5fdc1f38b142677a18ed238087566c78.js"></script>

---

## Take aways

Box-shadow is a nice way to get around the disadvantages of the outline-property. Keep in mind that elements that have a box-shadow property on the element itself could create some “icky” results:

{% image 'https://miro.medium.com/max/1400/1*dQiDN6yt0oHgmz5yA7VDyQ.gif', 'Eww' %}

You’ll have to counter this by adding the focus-styled box-shadow to the element’s box-shadow upon focus.

{% image 'https://miro.medium.com/max/1400/1*3Ay5yti3-Q_tfkYtzmgGyQ.gif', 'Better' %}

<script src="https://gist.github.com/havardob/68ae1d819722a703cc153ec53ffa2a37.js"></script>
