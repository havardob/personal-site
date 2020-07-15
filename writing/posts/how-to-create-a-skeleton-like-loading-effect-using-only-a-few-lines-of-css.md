---
title: How to create a skeleton-like loading effect using only a few lines of CSS (SCSS)
summary: If you ever need to load something onto your site and want something a little smoother than a boring spinner.
date: 2020-06-12
---

{% featuredImage '/img/skeleton.gif' %}

## Just give me the code

What we'll be creating: [Demo (CodePen)](https://codepen.io/havardob/full/dyGGGzq)

## Step 1 - Skeleton

First we'll set up the actual "skeleton" with a shine effect, then we'll add the animation. Here's how that may look like:

<p class="codepen" data-height="543" data-theme-id="dark" data-default-tab="css,result" data-user="havardob" data-slug-hash="9d28502df13b89e4620a52077ea07aed" style="height: 543px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Skeleton - step 1">
  <span>See the Pen <a href="https://codepen.io/havardob/pen/9d28502df13b89e4620a52077ea07aed">
  Skeleton - step 1</a> by Håvard Brynjulfsen (<a href="https://codepen.io/havardob">@havardob</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Notice that I've added a height and a width to the `div` element. I'm only doing this so that we have someplace to view what the `skeleton` class does.

### Breaking it down

We start off with a basic `background-color`. This will be the background of our skeleton at which the shine effect will slide across:

```scss
background-color: #e2e5e7;
```

Then we'll add the shine effect using `background-image: linear-gradient()`:

```scss
background-image:
    linear-gradient(
        90deg,
        rgba(#fff, 0),
        rgba(#fff, 0.5),
        rgba(#fff, 0)
    );
```

OK, I'll admit that this probably isn't the most self-explanatory piece of code if you're unfamiliar with the `linear-gradient()` function. Here's what's happening:

-  `90deg` decides that the gradient should go from left to right in a 90 degree angle
-  `rgba(#FFF, 0)` makes first section of the gradient white with a 0 alpha value, making it transparent
-  `rgba(#FFF, 0.5)` makes the middle section of the gradient white with a 0.5 alpha value, making it _half-way_ transparent
-  `rgba(#FFF, 0)` makes last section of the gradient white with a 0 alpha value, making it transparent

> **Note:**<br />
> The `rgba(#FFF, 0)` function is written in SCSS and not native CSS. If you're using native CSS the correct way to write this function is by using the actual RGBA values, like this: `rgba(255,255,255,0)`

Now there's a linear-gradient across the entire width of the skeleton. We don't want that, we want a 'narrow ray of light', so let's decide the width of the shine effect by using `background-size`:

    background-size: 40px 100%;

The width is now 40px and the height equals 100% of the elements height. You'll probably notice something weird now: the linear-gradient repeats across the background.

You see, even though we've created a background-image using linear gradient instead of using an image from an url (as you'd probably normally do then using this property), it's still a _background-image_ and we'll have to treat it as such. Therefore you'll have to prevent the image from repeating itself:

```scss
background-repeat: no-repeat;
```

Alright, we've layed the foundation. Now we'll have to animate it.

---

## Step 2 - Animate

In the first step we've created a skeleton (background-color) and added a shine on top of that (background-image). Now we have to make the shine move from one side of the skeleton to the other - and repeat the animation.

Let's start with moving the background-image _outside_ the far left side:

```scss
background-position: left -40px top 0;
```

Notice that the offset value of `-40px` is the same as the width of the background-image from the `background-size` property. The background-image is now placed outside the left side and is no longer visible to us. That's good.

Next we'll add some CSS keyframes and create our animation:

```scss
@keyframes shine {
    to {
        background-position: right -40px top 0;
    }
}
```

Maybe you already know what's happening here. This animation will move the shine-effect (background-image) from a 40px offset on the left side to a 40px offset on the right side.

Lastly we'll add the animation to the `.skeleton` class, like this:

```scss
animation: shine 1s ease infinite
```

The `infinite` value makes the animation play over and over again, making it look like it loops from left to right.

<p class="codepen" data-height="679" data-theme-id="dark" data-default-tab="css,result" data-user="havardob" data-slug-hash="2b8c98731995f63d3ab3c06bb076fa7b" style="height: 679px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Skeleton - step 2">
  <span>See the Pen <a href="https://codepen.io/havardob/pen/2b8c98731995f63d3ab3c06bb076fa7b">
  Skeleton - step 2</a> by Håvard Brynjulfsen (<a href="https://codepen.io/havardob">@havardob</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Wrapping it up

This is a really simple way of creating an animated skeleton loading effect using only a few lines of CSS, but that doesn't mean you'll have to stop there. Play around with it, use diffent colors for the shine effect, add the `.skeleton` class to other elements, or adjust the length or easing of the animation.

Here's a CodePen showing what you can do with it:

<p class="codepen" data-height="533" data-theme-id="dark" data-default-tab="result" data-user="havardob" data-slug-hash="dyGGGzq" style="height: 533px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Skeleton loading  using only a few lines of CSS">
  <span>See the Pen <a href="https://codepen.io/havardob/pen/dyGGGzq">
  Skeleton loading  using only a few lines of CSS</a> by Håvard Brynjulfsen (<a href="https://codepen.io/havardob">@havardob</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
