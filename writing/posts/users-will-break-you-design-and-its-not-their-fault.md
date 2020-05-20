---
title: Users will break your design and it's not their fault
summary: Enter the uncomfortable zone of designing for variable “x”.
date: 2019-11-21
about: This article was first published in the publication [UXCollective](https://uxdesign.cc/) on Medium. [Read it here](https://uxdesign.cc/users-will-break-your-design-and-its-not-their-fault-57f2085c1c9e)
---

{% featuredImage 'https://miro.medium.com/max/2000/1*3rIJbG47GgMGq2F0WANJcg.png' %}

Consider the following scenario: You have been tasked with creating an interface for the contact page of your client’s website. The task itself is simple and the end result will feature a list of the company’s employees and their contact info. Easy peasy. The result may look something like this:

{% featuredImage 'https://miro.medium.com/max/2000/1*Qi6oSvyt1Dq8LAlMiL4M-A.png' %}

Beautiful right? Well, there’s still one problem: This isn’t _exactly_ how it’s going to look in reality, is it?

## Sketch vs. Reality

You’ve created a page where content can be added, removed or edited by the website’s administrator. In other words you’ve created a visual presentation of your clients data. This data may change, both in quantity and complexity. Let’s explore this contact page scenario a little further. Say that one of their employee’s name isn’t _John Smith_ or _Lorem Ipsum_. What if it’s a longer name than that, like **David Robert Joseph Beckham** — the famous footballer?

“No problem”, you’d might say, “the website’s CMS only allows you to enter a first name and a last name, both with no spaces, so in this case it would only display _David Beckham_”. Fair enough, but riddle me this then: what about the name [George Stephanopoulos](https://en.wikipedia.org/wiki/The_One_with_George_Stephanopoulos)? Or any other person with a long first and/or last name?

{% featuredImage 'https://miro.medium.com/max/2000/1*bidZXXtCkXOTOs4mwB3oTw.png', 'Not quite the same, right?' %}

## Variable “x” — fear of the unknown

You see, if you have this kind of mindset you’re eventually going to create problems both for yourself, your developers and the user. Every interface which features yet-to-be-known values will eventually _break_ unless your design supports changes. I call it **designing for variable “x”**.

> How’s my design going to perform given that the value of this is “x”?

As a designer you have to plan for these uncertainties even though it sometimes feels uncomfortable. Sketching is much easier when _you_ control the variables. Long-ass employee name? No worries, use a shorter name in your sketch. The design feels too clustered when your product page features more than 10 products? Easy, stop drawing at 10. Push yourself to think about how your design should react to different amounts of data.

Now, I know what you’re thinking: you’ve heard this all before. “You have to design with real data” or “don’t use Lorem Ipsum” or “stay away from stock photos” and so on. True, but it’s not just about that. So even if you do design an avatar component that supports the name “George Stephanopoulos” then yes, you’ve used “real” data and yes, you’ve avoided using lorem ipsum. Problem is: you’re still only securing that the design won’t break with a 6-character long first name and a 14-character long last name which just happens to have a convenient whitespace that makes it easy to wrap into two lines.

{% image 'https://miro.medium.com/max/1186/1*IlG0YTgTum4DblcVtIIzEA.png', '“George Stephanopoulos” easily wraps into two lines. This might not always be the case' %}

That’s the **only** variable of “x” you’ve accounted for. You still have to think about **other** scenarios. Longer names, shorter names, spacing, limited real estate, adjoined elements, etc. How’s the name going to display on smaller screens? How about in a three column grid? How will “x” be displayed if the adjoined element contains “y”?

{% featuredImage 'https://miro.medium.com/max/2000/1*f2hH9NxHO2EnYDjV1mgVhw.png', '“How will the elements react to each other if one of them contains more info than the other? Expand the height of both elements perhaps?' %}

## So what do you do?

Well, you can’t create a sketch of every possible outcome, that’s just silly. You can’t really overdo it either, like by using [Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch](https://en.wikipedia.org/wiki/Llanfairpwllgwyngyll) as a placeholder name just to push the limits of your design. Sure, it’s a good way to stress test your sketch, but in reality this scenario will probably never occur.

{% featuredImage 'https://miro.medium.com/max/2000/1*e8Z7ivP_6gh08MjylzyKxw.png', 'Eww' %}

There’s a joint responsibility between you and your developer here. Together, you’ll need to figure out the best possible ways to make the interfaces as flexible as possible, but within limits of reason of course.

There are several ways to do this. The developer might suggest to limit the user’s input, like the earlier example with the CMS which only allowed names without spaces. Another option may for example be to only allow a certain number of characters, as Twitter does for their tweets, or restrict the user from uploading images that has dimensions which seem unfit for your design.

However, this isn’t always ideal. Limiting the user’s input only too prevent them from breaking the design, just because you haven’t accounted for _flexibility_ is just straight up lazy. What are they then going to do? Only hire people with names shorter than 20 characters?

Nah. It’s up to you to figure out a way to make your design work under different circumstances, even if it means you’ll have to kill your darlings or find a different approach.

The challenge with flexibility is often linked with the lack of real estate, whether it’s the size of the container or due to smaller screen sizes. Take plain text for instance, like names or titles. If the text doesn’t fit within the limits of your design you could always wrap or break it.

Another option might be to truncate (shorten) the text. This often works well when dealing with text rich excerpts or titles. Take a look at how Medium handles them:

{% featuredImage 'https://miro.medium.com/max/2000/1*CWsr6RM_EZYCnhJWZQNM4w.png', 'Medium uses truncation for their card components' %}

Still, there are other use cases where it may be not as fitting:

{% featuredImage 'https://miro.medium.com/max/2000/1*mVTl44TTHCxPVhEoW67RKQ.png', 'Who is David Jose? And what’s his full email?' %}

Whatever you choose as your solution you should always think about the user and their experience. Don’t make design decisions based on your lack of thinking ahead.

You always have to entertain the idea that in every interface, whether it’s an application or a website, if a user can change the data within that interface — your design might not handle it.

Reality is more than dummy data and perfectly sized Unplash photos.
