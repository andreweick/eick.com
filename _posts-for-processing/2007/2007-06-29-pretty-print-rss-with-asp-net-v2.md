---
layout: post
title: Pretty Print RSS with ASP.Net v2
date: 2007-06-29
published: true
meta: {}

tags:
- work
type: post
tags:
- Programming
- work
status: publish
---


_RSS is the lingua franca of the web..._



We've been using RSS as our communication protocol with good luck.  Using a straight _Publisher / Subscriber_ model we are able to get pretty rich functionality with pretty low effort spent thinking about communication protocols. 



The problem is _debugging_ with RSS.  I'm stepping through my code, and want to check the values in an RSS response from the remote server, so I pop open a browser, and type in the URL.  I get:



![](http://media.eick.us/2011/05/633753877_f70f8c0ea4.jpg)



Not very helpful when I'm trying to find the guid's so I can debug the server code -- I end up right click, view source....



 



To help debugging, I wrote a quick Xml2Html.ashx to grab the RSS feed from the remote server, and then "pretty print" the RSS with a XSL style sheet to render a readable output.  Google to find a good XML->HTML style sheet. 



To do the transformation, four lines are all that is needed:

 <div class="csharpcode"><pre><span class="lnum">   1:  </span>XslCompiledTransform trans = <span class="kwrd">new</span> XslCompiledTransform();</pre><pre><span class="lnum">   2:  </span>System.IO.Stream xslStyleSheet = </pre><pre>           System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream(<span class="str">"helpers.Xml2Html.xslt"</span>);</pre><pre><span class="lnum">   3:  </span>trans.Load(XmlReader.Create(xslStyleSheet));</pre><pre><span class="lnum">   4:  </span>trans.Transform(Url, <span class="kwrd">null</span>, context.Response.OutputStream);</pre><pre> </pre>

In order to minimize dependencies, I embed the XSL stylesheet into the project. To embed a resource, just change the 'build action' in VS2005 to embed:



 



![](http://media.eick.us/2011/05/662275247_150e866c43_o.png)



To pull out the stylesheet, use the Reflection namespace (line 2 in the code sample), and create a stream into the XslTransform object.







Now, whenever I need to debug the RSS feed, I just call Xml2Html.asxh?url=....



 

<div class="wlWriterSmartContent" style="padding-right: 0px;padding-left: 0px;padding-bottom: 0px;margin: 0px;padding-top: 0px">Technorati tags: [XML](http://technorati.com/tags/XML), [XSL](http://technorati.com/tags/XSL), [RSS](http://technorati.com/tags/RSS), [ASP.net 2](http://technorati.com/tags/ASP.net%202), [C#](http://technorati.com/tags/C#)</div></div>.csharpcode, .csharpcode pre{font-size: small;color: black;font-family: consolas, "Courier New", courier, monospace;background-color: #ffffff;/*white-space: pre;*/}.csharpcode pre { margin: 0em; }.csharpcode .rem { color: #008000; }.csharpcode .kwrd { color: #0000ff; }.csharpcode .str { color: #006080; }.csharpcode .op { color: #0000c0; }.csharpcode .preproc { color: #cc6633; }.csharpcode .asp { background-color: #ffff00; }.csharpcode .html { color: #800000; }.csharpcode .attr { color: #ff0000; }.csharpcode .alt{background-color: #f4f4f4;width: 100%;margin: 0em;}.csharpcode .lnum { color: #606060; }
