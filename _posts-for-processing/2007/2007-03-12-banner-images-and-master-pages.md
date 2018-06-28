---
layout: post
title: Banner Images and Master Pages
date: 2007-03-12
published: true
meta: {}

tags:
- work
type: post
tags:
- work
status: publish
---


I was working on [our web site ](http://www.sss-research.com/)this weekend with [Dax](www.nukeation.net).  The requirement  to swap the ‘banner image’ depending on which of our three products was selected.  Didn’t sound to rough, but you always end up down a rat hole!.  Actually, I’m still not sure I understood [Dax](www.nukeation.net)’s suggestion, but knowing him it’s a clever HTML/CSS hack that I can’t begin to understand. 



Being a programmer, I ended up making a property on the master page class named BannerImageUrl.  This property set the ImageUrl of the  of my banner image in the master page.  Then, in the content page’s Page_Load function, I cast the Page.Master property to my custom class, and then call the BannerImageUrl function…easy as cake….Now, I just have to get multiple banner images….

<div class="bjtags">Tags:  [asp.net](http://technorati.com/tag/asp.net)</div>
