---
layout: post
title: Running Silverlight in IIS6 (XP)
date: 2007-09-20
published: true
meta: {}

tags:
- work
type: post
keywords:
- Programming
- silverlight
- work
- xaml
status: publish
---


We've been working on our Silverlight code, and it's getting to a point where I can show potential customers -- I tried to load the code on my Demo machine (XP SP2), and got the following error.



[![image](http://www.andyeick.com/_blogMedia/a17dc7c84a36_F743/image_thumb.png)](http://www.andyeick.com/_blogMedia/a17dc7c84a36_F743/image.png)



 



Silverlight error message     ErrorCode: 2252     ErrorType: ParserError       Message: AG_E_RUNTIME_MANAGED_ASSEMBLY_DOWNLOAD     XamlFile: TimeLine1KPoints.xaml     Line: 7     Position: 9    



When I setup the virtual directory, I had set the permissions to "Scripts and Executables."  I needed to set the directory permissions to "Scripts only", and my Silverlight application worked perfectly!



[![image](http://www.andyeick.com/_blogMedia/a17dc7c84a36_F743/image_thumb_3.png)](http://www.andyeick.com/_blogMedia/a17dc7c84a36_F743/image_3.png)



 



 



 

  <div class="wlWriterSmartContent" style="padding-right: 0px;padding-left: 0px;padding-bottom: 0px;margin: 0px;padding-top: 0px">Technorati tags: [silverlight](http://technorati.com/tags/silverlight), [IIS](http://technorati.com/tags/IIS), [xp](http://technorati.com/tags/xp)</div>
