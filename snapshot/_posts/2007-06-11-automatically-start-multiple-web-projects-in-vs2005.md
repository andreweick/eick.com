---
layout: post
title: Automatically start multiple web projects in VS2005
date: 2007-06-11
published: true
meta: {}

tags:
- work
type: post
keywords:
- Programming
- tips
- work
status: publish
---


This was a bit harder than I thought it should be!  [Our](http://www.sss-resarch.com/) latest project is to integrate our SVG (and Silverlight) /AJAX client with a REST interface into our backend ESRI system.  The other team is still working on the ESRI connection, so our  development server is up and down (as any good development server is wont to do!)  I thought I'd make a quick shim project, that would mirror the REST API calls and simply serve XML files from the file system rather than going back to the original serve.



 



I quickly generated the project and REST pages (just dumb ASPX pages that read back an XML file) and added it to the solution.  I then wanted VisualStudio to automatically start a cassini webserver for new project whenever I was in "debug" mode.  I would have thought this was a common problem (what if I was connecting my app to a webservice, and wanted to start both my asp.net app, and the server?)



 



So, the base problem was, I had 2 projects in my solution, an ASP.Net client, and an ASP.Net REST proxy, and when I hit "F5-debug", only one client would start up, and I wanted to start both clients up.



 



After a few hours of fiddling, I found the "solutions / properties" button.  This let me specify which projects to automatically start



 



[![](http://media.eick.us/2011/05/541687580_c29f7143ba.jpg)](http://farm2.static.flickr.com/1228/541687580_5148a35ade_o.png)



 



After you set these both to "start" then both servers start automatically.



 



ps, on my REST proxy, I had to 'hard code' the default port id (I gave the URL of the proxy to my real AsP.Net app)  To hard code the port number of the cassini web, go to "project | properties | web", and set the default port.



 



[![](http://media.eick.us/2011/05/541828521_f3d169d631.jpg)](http://farm2.static.flickr.com/1132/541828521_d480956bb2_o.png)

 <div class="wlWriterSmartContent" style="padding-right: 0px;padding-left: 0px;padding-bottom: 0px;margin: 0px;padding-top: 0px">Technorati tags: [asp.net](http://technorati.com/tags/asp.net), [cassini](http://technorati.com/tags/cassini), [visualstudio 2005](http://technorati.com/tags/visualstudio%202005), [vs2005](http://technorati.com/tags/vs2005)</div>
