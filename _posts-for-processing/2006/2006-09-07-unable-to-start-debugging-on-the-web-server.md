---
layout: post
title: Unable to Start Debugging on the Web Server
date: 2006-09-07
published: true
meta: {}

tags:
- work
type: post
tags:
- work
status: publish
---


posting here so I can find it later when I need to debug it....

 <!-- blockquote  -->  - Make sure that IIS is configured to use _Integrated Windows Authentication_. Look for the checkbox on the Authentication Method dialog launched from the Directory Security tab of the site properties.

- Make sure that _HTTP Keep Alives_ are enabled. You'll find that checkbox on the Web Site tab of the properties dialog, in the connections section.

- This one is strange, but it seemed to do the trick for many out there, add <i>http://localhost</i> to the trusted sites in Internet Explorer. To tell the truth, this seems to be a fix for the symtoms, not actually fixing the problem itself, but if it works it works. BTW, you'll have to uncheck the âRequire server verification (https:) for all sites in this zoneâ checkbox to add it as a trusted site.

<!-- endblockquote  -->

Source: [Unable to Start Debugging on the Web Server](http://ryanfarley.com/blog/archive/2005/08/23/8540.aspx)

