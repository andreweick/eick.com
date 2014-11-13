---
layout: post
title: YAML SHMAML
date: 2007-04-15
published: true
meta: {}

tags:
- work
type: post
keywords:
- Rails
- Ruby
- work
status: publish
---


![](http://media.eick.us/2011/05/459029245_5e3de4021b_m.jpg) Spent the day working with YAML and Ruby.  YAML is an object serialization strategy, and the integration with Ruby on Rails is really spectacular, it just kinda works. 

 <!-- blockquote  -->

_[SOAP](http://en.wikipedia.org/wiki/SOAP) is to [REST](http://en.wikipedia.org/wiki/REST) as__[YAML](http://en.wikipedia.org/wiki/YAML) is to XML_

<!-- endblockquote  -->

Below is my YAML file, isn't that purty?  Nice, readable, kind obvious what it does....

 <!-- blockquote  -->

--- http_server: port: 3000server: [http://localhost/](http://localhost/)



live_feed: path: /Xml/Feeds/extension: .xmltoc: toc

<!-- endblockquote  -->

I can read in the object

 <!-- blockquote  -->

geoConfig = YAML::load(File.open("geoconfig.yaml"))

<!-- endblockquote  -->

with and I can access the values with





 <!-- blockquote  -->

http_server = @geoConfig['http_server']['server'].chomp('/')#chomp off the trailing slash to normalize the name  

<!-- endblockquote  -->





So, the above YAML file will get reinflated as:



{ 'http_server' => { 'port' => 3000, 'server' => 'http://localhost/' }, 'live_feed' => {'path'=>'/Xml/Feeds'},... }



 



The application [we're](http://www.sss-research.com/) working on interfaces with the backend datastore via REST.  As such we have dozens of URL endpoints scattered throughout the code.  We are developing the front end and the backend concurrently, so we stubbed out all the REST calls to query the local file system.  I needed a better configuration manager so they I could have scaffolding for my off-line Development, on-line development, and on-line production without having to add a switch statement to every class.



Enter YAML.  I set up a YAML configuration file for each development environment, and then put the url's in that file.



C# of course, has a similar concept, and is able to serialize objects to XML automatically also, but the code is a bit more verbose. 

 <!-- blockquote  -->

GeoConfig myGeoConfig;XmlSerializer mySerializer = new XmlSerializer(typeof(GeoConfig ));FileStream myFS = new FileStream("geoconfig.xml", FileMode.Open);myGeoConfig = (GeoConfig ) mySerializer.Deserialize(myFS);

<!-- endblockquote  -->

Now, I need a C# YAML reader....

