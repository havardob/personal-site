---
title: Creativity is only impressive when there’s restrictions
summary: Why “form follows function” is a valid design principle in today’s web design landscape.
date: 2020-03-01
---

{% image 'https://miro.medium.com/max/1400/1*SPePqjxnIn-7FQHJXvfNzg.png', '', '', 'Source', 'https://www.opendoodles.com/' %}

You’ve probably heard the phrase before. It’s a principle which originated in
architectural design, but has found its way into other design areas, like
industrial design or web design. The idea in itself is simple: your designs
should first and foremost relate to the products intended function or purpose.
How you *interpret *the phrase is another thing. Some talk about “form follow
function” from a philosophical point of view — that true beauty comes directly
from purity of function, whereas other talk about making design decisions based
on _how_ the product should function, and that the aesthetics should play a
secondary role. In this article I’m going to talk about the latter.

---

## Web design then vs. now

Web design has evolved a lot in its relatively short life span. We’ve gone from
the classic black-and-white default HTML pages to the colorful, pixelated Comic
Sans-infused websites of the late 90s, witnessed the rise and fall of
epilepsy-inducing Flash-websites before we danced our way through the responsive
revolution brought along by the smartphones. Now we’ve arrived at what’s
becoming the 4th century of the modern web — and the web design business is
booming like never before.

Right now [a lot of designers](https://medium.com/search?q=design%20trends%20for%202020) try to predict what’s going to be the next big trends in web and UI design. Many predictions are revolving around the same subjects: AR- and VR-technology, the rise of vocal interaction or the buzzword that is “[Neumorphism](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)”.

{% image 'https://cdn-images-1.medium.com/max/800/0*gKyVaGSKoDShBshO.png', '"Neumorphism".', '', 'Source', 'https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6' %}

What’s going to stick and what’s not is hard to say (even though I’m fairly sure
that neumorphism is just [a fart in the
wind](https://uxdesign.cc/neumorphism-will-not-be-a-huge-trend-in-2020-67a8c35e52cc)).
There was a time when some people [didn’t believe in the perks of responsive
design](https://managewp.com/blog/5-reasons-why-responsive-design-is-not-worth-it)
or that [Flash Catalyst](https://www.youtube.com/watch?v=hII6AbGrWR8) was going
to revolutionize the business (I was actually one of them). Predictions are
hard, so I’m not going to do those. I’d rather like to make an observation about
the current state of web design.

---

## Today’s web design process

Today there’s more things to consider than ever. In the early days of web design
you could get a away with a lot of what’s now considered “bad” designs (I’m
looking at you, “put-everything-in-a-carousel”-era) as long as you kept your
client happy and the users somewhat got what they needed (or at least we thought
the users got what they needed). Those were perhaps the only factors you had to
account for.

{% image 'https://cdn-images-1.medium.com/max/800/1*6igsn3adL4jlZLmeZtDPhw.png', 'A typical approach to web design' %}

Since then the web has changed. A lot. We have ability to touch, use keyboard
navigation, voice control, point and click, wave, exhale ([yep, you read that
right](https://www.wired.com/2010/01/blow-zyxio-interface/)) and so on. The way
we view websites has changed, varying from big screens to small screens, to
fold-able screens or watches. The list goes on. It’s easier than ever to create
a website or an app. Browsers are becoming more and more alike, devices have
common traits and input methods are, even though they are many, somewhat
consistent. On top of this we know more and more about our users. We analyze
user behavior, conduct user testing or ask the users how they’re experiencing
our product. We know about best practices when it comes to how you should or
shouldn’t design. Accounting for accessibility is not a choice anymore, it’s
your duty (and in some countries, like Norway, you can be fined for not meeting
the WCAG 2.0/2.1 requirements) and Google won’t go near your site if it’s not
responsive or mobile friendly. All in all we have more factors to consider when
designing web pages now than before. The former venn diagram will perhaps look
something like this today:

{% image 'https://cdn-images-1.medium.com/max/800/1*VXCbju-rmyb_1S_dIhLs1Q.png', 'I regret choosing a venn diagram to illustrate this, but I’m not redoing these pictures now' %}

This means that when it comes to web design you can no longer just do whatever
you “want”. What I’m saying is that you have several rules or guidelines to
follow and it’s within the limitations of these your design will be at its best.
It’s also here that the “form follows function” argument grows strong,
especially when it comes to accessibility.

## When “function follows form”

If you inspect the code on a website you may stumble upon this little bad-boy:

> `:focus { outline: 0; }`

For the non-CSS-people out there: this little snippet removes the default
outline you get when you click or interact with an element. Why? Because the
outline is often considered _ugly_. This is a typical example where aesthetics
was chosen over accessibility — or _function followed form_. For a person with
Parkinson’s disease who mainly use their keyboard to navigate this outline is
_necessary_.

Let’s look at some other examples, like Tottenham Hotspurs’ website for
instance:

{% featuredImage 'https://cdn-images-1.medium.com/max/800/1*JMJc6PhfLACJxKDXpidzHg.png', 'The front page of Tottenham Hotspurs’ website' %}

Beautiful, right? Well, yeah — I for one thinks so — but there’s one thing which
immediately catches my eye here: the accessibility-toggle at the top.

{% image 'https://cdn-images-1.medium.com/max/600/1*mViAlmBphy9nxlU_meL_DA.png' %}
{% image 'https://cdn-images-1.medium.com/max/800/1*JMJc6PhfLACJxKDXpidzHg.png', 'Accessibility on, accessibility off” — the lesser known Miyagi quote.' %}

If you turn it on you can see that the image fades and the color contrast
between the text and image increases. Nice feature, right? Sure, but why isn’t
the accessibility option turned on by default? Or better yet, why isn’t the
website design accessible to begin with, without user interaction? It seems to
me that either the designer or the client wanted to keep the text on top of the
image while still keeping the image crisp rather than finding a better, more
accessible solution.

Here we have a screenshot of Medium’s iOS-app:

{% image 'https://cdn-images-1.medium.com/max/800/1*R0iScbEelwkucly_cRJCag.png', 'I should charge my phone' %}

It’s stunningly simple and minimalistic, don’t you think? Take a look at the
navigation bar at the bottom. You can see that it features icons only, faded
ones at that, even though basic rules ([like these from Material
Design](https://material.io/components/bottom-navigation/#anatomy)) says that
active states should differentiate in terms of shape – not by color only, and
that icons should be accompanied by a text label.

So why does Medium stride away from what’s considered a best practice? “The
minimalistic design style is part of Medium’s brand identity!”, you’d might say.
Well, all I see is another example of “function follows form”. Accessibility and
best practices is sidelined in favor of ‘beauty’.

---

## Creativity within restrictions

So where am I going with this? Should we throw aesthetics out the window and
blindly focus on a website’s functions or its main purpose? No, of course not,
but we should strive to accomplish beauty within in the rules and guidelines
we’ve created for ourselves.

What we consider “good” design today may change in the future (it certainly has
over the last years), but that doesn’t mean we should casually ignore best
practices or international standards in favor of what subjectively looks good.
Form *should *follow function, even if it means you’ll have to change your
design or kill your darlings. Some say that rules and guidelines kills
creativity and removes the freedom of creation. I don’t believe that. I believe,
even though your options are limited, that true creativity lies in the skill to
create something unique and beautiful _despite_ the lack of freedom.

To quote one of the writers from the ever-so-popular sitcom “Friends”: It’s easy
to write a funny joke. It’s hard to write a joke that’s supposed to fit the
narrative and for it to still be funny.
