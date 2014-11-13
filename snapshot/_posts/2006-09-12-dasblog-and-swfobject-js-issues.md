---
layout: post
title: DasBlog and SwfObject.js issues
date: 2006-09-12
published: true
meta: {}

tags:
- work
type: post
keywords:
- programming
- work
status: publish
---
![213652611_6fe53ed965_o](http://media.eick.us/2011/05/217648602_1e56948584.jpg)

I tend to use [SwfObject](http://blog.deconcept.com/swfobject/) for my Flash / HTML integration needs.  It handles the "click to activate" issue with I.E., it's 2 lines of script, and it isolates me from the  &&  ickiness of flash.  Although I did get around the "click to activate" anomaly, I could no longer login to the site.  I was getting a "Object Expected" JavaScript error in Login.aspx.



There must be some name collision in the variables that was overwriting an expected value or such -- I switched to the [DHTML method](http://www.nukeation.net/2006/08/05/Workaround+For+The+CLICK+TO+ACTIVATE+Irritant.aspx) (_thanks [Dax](http://nukeation.net/)!)_  and everything works swimmingly.



 



tags: [DasBlog](http://technorati.com/tag/DasBlog), [javascript](http://technorati.com/tag/javascript), [flash](http://technorati.com/tag/flash)

