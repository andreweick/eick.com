---
layout: post
title: Extending Mashups to Visualize Patterns in Temporal Data
date: 2007-07-15
published: true
meta: {}

tags:
- work
type: post
keywords:
- Publications
- work
status: publish
---


**[Printable View](http://www.andyeick.com/_BlogMedia/Extending%20Mashups%20to%20Visualize%20Patterns%20in%20Temporal%20Data%203-Jun-07.pdf)**



**<>Extending Mashups to Visualize Patterns in Temporal Data **

<>

<>

<>

<>Stephen G. Eick, Andrew Eick, Jesse Fugitt, James E. Heath, Mark Ross

<>

<>

<>

<>2 June 07

<>

<>{steve.eick, andrew.eick, jesse.fugitt, jeheath , mark.ross}@gmail.com

<>

<>

<>

<>

<>

<>**Printable View**

<>

<>___<>ABSTRACT__<> — Many datasets are now published as streams of time-stamped, geo-encoded events using GeoRSS. To understand patterns within this class of data, we have taken ideas from mashups and extended them to develop new visual components that present live geospatial data in novel ways. The components are interactive, live, linked and contain many novel features for understanding temporal and geospatial patterns in event data. The components are light-weight, thin client, Web 2.0 AJAX technology and are suitable for analyzing both on-line streaming and off-line static datasets. Our work expands traditional geospatial mashups to include timeline, time wheel, and graph mashups for real-time time streaming data. _

<><>1. <><div style="text-align: justify"><># <span style="font-size: 14pt"><>Introduction </span>

</div>

<>

<>A mashup is a website that combines content from more than one source and displays the information on a map (Wikipedia_Mashups, 2007). Mashups have been phenomenally successful. The number of mashup applications has grown dramatically and there are literally hundreds of thousands of mashup sites (googlemapsmania.blogspot.com, 2007). There are even websites devoted to both tracking (www.mashups.com, 2007) and creating ([www.mashupbuilder.net](http://www.mashupbuilder.net), www.wayfaring.com) mashups.



 



Our focus is on mashup sites for displaying time-stamped, live geo-encoded data. This type of data is quite common and includes, for example, streams of news articles where the events in the articles are geo-located, the sequence of observed positions of a delivery vehicle as recorded by an onboard GPS, the positions of emergency personnel with active RFID badges in a hospital, and even the times and locations of Avian Flu Pandemic as reported by the government (Department_of_Health_&_Human_Services_U.S., 2007).



 



Data of this type is commonly published using GeoRSS (GeoRSS, 2007). GeoRSS is a rather simple extension of RSS, an XML specification for publishing information best described as sequences of items in a channel. GeoRSS extends RSS by including geographical encodings to describe the location of the event items. Location information may be specified in either of two ways in GeoRSS. First, the most basic way specifies a point location for each item using longitude and latitude:



 



**45.256 -71.92 **



 



Second, the more complex way includes support for richer geospatial features using GML (4):



 



** **



** **



**45.256 -71.92 **



** **



** **



 



Using GML in GeoRSS allows the geographical attributes to be described using squares, circles, and other complex polygons. Using GML it is possible to specify rich spatial attributes that are associated with the event.



 



Most mashup sites are built using either Google Maps (Google, 2007) or Microsoft Virtual Earth (Microsoft, 2007). These platforms provide a rich and powerful environment for building geospatial applications. In contrast to traditional desktop GIS (http://en.wikipedia.org/wiki/GIS ) systems, Google and Microsoft have shown that it is possible to do live interactive maps that are completely browser-based. The advantage of this new approach is that the technology is usable by anyone with access to a browser. Google and Microsoft are competing fiercely to develop technology to support location-aware services and local search. Location aware devices will become more common and, as Google has demonstrated, will support a lucrative advertising based business model. As a result, both companies have developed extremely complex and compelling technology that is now widely available on the Internet.



One interesting side effect of the intense competition between Google and Microsoft is an emerging set of new platforms for GIS technology. According to Christensen (Christensen, 1997), a low-end disruptive technology is focused initially on serving the least profitable customer, who is happy with a "good enough" product. Low end disruptive technologies typically are inferior products by most measures but often have broad reach and serve nontraditional customers. Google and Microsoft's platforms are web-based, an inferior technology to thick desktop clients by many measures, but one with a much broader reach. Once the new technology has gained foot hold in its nontraditional customer segment, it improves and gradually moves upscale. Eventually, after many successive improvements, the low-end technology outperforms the incumbent technology and displaces it causing the business disruption to the incumbent. Because the customers initially served by the low-end technology are not profitable for the incumbent, there is no business case for the incumbent to address this unprofitable portion of the market. It may not be cost effective for the incumbent to continue to invest in infrastructure and product improvements since it already has its market share and cannot increase its revenues. Instead, the incumbent will "milk" the current investment and move upscale during its decline as the new technology progressively improves.



 



The new GIS platforms that are being developed by Microsoft and Google are extremely powerful. As the large number of mashups demonstrates, these platforms have extremely broad reach and have brought inexpensive GIS technology to the mass market. It is too early to tell if these new platforms will replace, complement, or co-exists with the existing GIS platforms. At this point they are serving different markets and, as observed by Christensen, the new platform is rapidly gaining capability.



 



Our approach follows the movement up market that is characteristic of new technologies as they gain capability. Following Google and Microsoft who did maps, we have developed a set of thin client visualization components analytical techniques for displaying streams of time-oriented events that have spatial attributes. Our component set includes an interactive timeline influenced by MIT's SIMLE (SIMILE, 2007), a time wheel, a node and link graph display, and traditional business charts. Each of the components is implemented as a light weight thin browser-based object using the GeoBoost™ software platform (Eick, et al., 2007). What is innovative about our components is that websites using our components nearly as responsive and dynamic as the incumbent thick desktop applications.



 



Our components implement and extend many of the ideas embodied in tradition mashups and web applications. Each component is live and can ingest data from several different sources. The components complement traditional geospatial views by presenting the real-time event data using different visual metaphors. Using ideas from the social networking sites, analysts may edit and annotate the information in the components and the resulting work product will propagate to other browsers. The components are specifically tailored for live information and automatically update as new information arrives and age off stale information.



 



In the remainder of this paper we describe our visual components and their application for analyzing real-time, geo-encoded time-stamped data.

1. <div style="text-align: justify"># <span style="font-size: 14pt">Timeline Mashups &ndash; Analyzing Temporal Events </span>

</div>



GeoBoost's Timeline™ is a light weight web components to visualize and interact with time stamped data. To be more specific, our GeoBoost Timeline is a thin client, AJAX enabled visualization for temporal data that is interactive and linked to other visualizations, such as maps and business charts.  It includes a number of innovative features such as:



 

1. <div style="text-align: justify"><span style="font-size: 12pt">running in a thin client with no software install, </span></div>

2. <div style="text-align: justify"><span style="font-size: 12pt">interactive panning and interactive zooming </span></div>

3. <div style="text-align: justify"><span style="font-size: 12pt">different time scales, </span></div>

4. <div style="text-align: justify"><span style="font-size: 12pt">synchronization to other Timelines (detail and summary views), </span></div>

5. <div style="text-align: justify"><span style="font-size: 12pt">built in RSS support, </span></div>

6. <div style="text-align: justify"><span style="font-size: 12pt">linking to other visualizations, </span></div>

7. <div style="text-align: justify"><span style="font-size: 12pt">several data display modes, </span></div>

8. <div style="text-align: justify"><span style="font-size: 12pt">ability to select specific data items, </span></div>

9. <div style="text-align: justify"><span style="font-size: 12pt">ability to highlight specific data items, </span></div>

10. <div style="text-align: justify"><span style="font-size: 12pt">rich API to program against, </span></div>

11. <div style="text-align: justify"><span style="font-size: 12pt">built in Toolbar, </span></div>

12. <div style="text-align: justify"><span style="font-size: 12pt">visual scalability overplotting indicator (Eick, et al., 2002), </span></div>

13. <div style="text-align: justify"><span style="font-size: 12pt">best fit algorithms </span></div>

14. <div style="text-align: justify"><span style="font-size: 12pt">y axis plotting (line chart capability) </span></div>



 



The Timeline visualization itself can be thought of as a series of rectangle tiles that each represent one unit of time and are placed horizontally to fill up a specified number of pixels on the web page. The unit of time represented depends on the scale of the timeline, which can be set to Year, Month, Day, Hour, Minute, or Second.



 



![](/content/binary/071407_0249_ExtendingMa1.jpg)



**Figure 1. Two GeoBoost Timelines linked to show multiple timescales. **



Figure 1 illustrates two simple Timelines placed on a web page. The "Overview" Timeline is set to Month scale and the "Detailed" Timeline is set to Day scale. Each tile is labeled with its starting date and end date. Small vertical dashes are intelligently placed on the tile to indicate familiar time intervals and subintervals. For instance, the day tiles show each hour of the day as the smaller subinterval marks and the larger tick marks are used to divide the day into quarters. The tiles are automatically generated and labeled using configurable settings for background color and date format.



 



Timelines are interactive. As the user drags a Timeline to the left or right using the mouse, new tiles are created and destroyed to give them the impression they are "panning" through time. This new Web 2.0 interaction capability for web pages (where no page refresh is required was made popular by Google Maps and other rich internet applications) is very intuitive and easy to understand for users familiar with browser-based applications. In addition, simple buttons on the toolbar allow the user to zoom the timeline in or out and to change the current timeline scale.



 



The advantage of using two (or more) Timelines as shown in Figure 1 is the fact they can be synchronized together. When the user pans one of the Timelines, the other Timelines scroll accordingly. The blue lens in the center of the top Timeline represents the entire time period displayed in the bottom Timeline. This capability is desirable when attempting to display a summary level and detailed view of the same data.



 



The simplest approach for displaying time stamped data on a Timeline would be to plot objects corresponding to the data items on the timeline "canvas." This approach could support basic interactive operations like tooltips, selecting and highlighting individual items or toggling an item's visibility. However, implementing more advanced features such as hiding a group of items become computationally expensive. A second disadvantage of this approach is that it does not gracefully extend to display data from multiple data feeds described by many RSS feeds.



 



To overcome these problems our implementation renders each timeline event feed as a separate transparent overlay on top of the raw timeline canvas. Each overlay may be independently populated using different event feeds and the Z-order of the overlays may be adjusted. One advantage of this approach is that it is trivial to configure properties of an overlay such as toggling its visibility or changing its event feed.



 



![](/content/binary/071407_0249_ExtendingMa2.jpg)



**Figure 2 Simple Events on Timeline. **



Figure 2 shows the Timeline's capability to ingest two separate data feeds corresponding to events generated from two Objects and display both feeds together on the same Timeline. Red circles are in one overlay and indicate time stamped events for Object 1 and blue circles are in another overlay and indicate time stamped events for Object 2. With a single function call, all of the events for Object 1 could easily be hidden by setting the overlay's visibility to hidden. This is computationally less expensive than iterating through each individual event for Object 1 and setting that individual event's visibility to hidden.



 



Timeline's toolbar contains several useful buttons that allow the user to manipulate how the individual data items are displayed. Text labels can be shown for the individual items and the item can be drawn as a circle, tick mark, sphere, or as a custom image (on a per item basis). Figure 3 shows the same data items from Figure 2 but with different display options set on the toolbar. Also, if the event for the data item has a duration, that time period can be displayed as a solid rectangle.



 



![](/content/binary/071407_0249_ExtendingMa3.jpg)



**Figure 3. Eliding events corresponding to Object 1 simplifies the display. **



 



One problem with timeline labels is overplotting for large numbers of events. To overcome this problem, Timeline uses a best fit algorithm to place the data item as well as the text label and date range in the appropriate place on the canvas. If there is not enough space to place the item, the algorithm will move down the y axis until the item would be plotted off the visualization. In that case, an overplotting indicator, a small dash at the bottom of the Timeline, indicates there is a data item at a certain point in time that cannot fit on the current display. The overplotting indicator acts as a visual cue to the user that they there is additional data at that moment in time and they could potentially view it by zooming in the timeline. An advanced use of Timeline (not shown) is to use some property of the data items as a value that allows it to be plotted on the y axis. Essentially, this turns the Timeline into an interactive line chart with time along the x axis. Lines can optionally be turned on to show trends for each series of data items through time.



 



Timeline supports highlighting, tooltips as well as select and sweep select for data items. This feature will be discussed below as it illustrates how analysis can be done when Timeline overlays are linked to other visualizations like our GeoBoost Map and TimeWheel.

1. <div style="text-align: justify"># <span style="font-size: 14pt">Time Wheel Mashups &ndash; Analyzing Cyclic Events </span>

</div>



GeoBoost TimeWheel™ is a lightweight visualization component that plots temporal data on a radial chart similar to an analog clock face. Each hour of the day is represented as a different slice on the TimeWheel and concentric rings represent each day of the week. It is an effective visualization to view cyclic events and answer questions like "What time of day do the most events occur?" or "What day of the week appears to have the most acitivity?" Temporal patterns become apparent that would be hard to spot when visualizing data using Timeline over a long period of time.



 



Like Timeline, the TimeWheel is the basic visualization that exists under the overlays of data. Each slice (representing an hour of the day) can have a custom style to draw attention to that time period or simply break up different portions of the day. Data feeds are stored as collections of items which are then used to populate TimeWheel overlays in the same manner as Timeline overlays. Figure 4 illustrates a simple use case for the TimeWheel. A single overlay, made up of events from Object 1, has been attached to the TimeWheel. By glancing at the TimeWheel visualization, it is apparent that most data occurred between 5:00 and 7:00 from Monday to Friday by simply noticing the clustering of points.



 



![](/content/binary/071407_0249_ExtendingMa4.jpg)



**Figure 4 GeoBoost TimeWheel shows cyclic patterns in temporal data. **



 



The toolbar for the TimeWheel is similar to the one that appears on Timeline. It can be used to switch between display modes or to enable labels and date ranges for the data items. Data items can be shown as circles, tick marks, or colored tick marks. There is no concept of panning or zooming the TimeWheel, although functionality like highlighting, selection, and sweep selection are all supported so that the data displayed in the TimeWheel can be linked to other visualizations. One option unique to the TimeWheel is its ability to calculate the size of each slice based on the number of events that occurred during that time of day. Instead of each slice being equal in size, each becomes proportional to the number of events that occurred during that hour, allowing the user to see a quick volume analysis by hour of the collection of data items.

1. <div style="text-align: justify"># <span style="font-size: 14pt">Map Mashups&ndash; Analyzing Spatial Patterns </span>

</div>



The GeoBoost Map is an implementation of a thin client, lightweight AJAX map. In contrast to Google and Microsoft's light weight maps, the GeoBoost map can ingest imagery and feature data from OGC compliant web mapping and feature servers (WMS and WFS). It supports animated zooming and panning as well a number of different API functions that allow programmatic interaction with the Map.  Multiple Maps can be synchronized together so that they pan and zoom at the same rate, which is used to create "Overview" Maps and "Magnification" Maps.



 



Information on the GeoBoost Map from different sources is organized into layers. The layers may be imagery from a WMS, rasterized map layers, feature data from WFS servers, or live GeoRSS. The GeoRSS feature data is drawn on the Map using SVG (W3C, 2007) or Microsoft's Silverlight (Microsoft_Corporation, 2007) APIs. Multiple raster sources can be "layered" on a Map and re-ordered to combine street maps and satellite imagery from different sources.  In addition, the transparency of each raster source can be individually adjusted to allow other layers to show through.



 



Figure 5 shows the GeoBoost Map client merging raster and map data simultaneously as the user pans the map and Figure 6 shows the client manipulating five different layers. In this example the client is ingesting vector data from two GeoRSS providers to obtain the locations of Washington DC Metro stops and Washington DC street crimes and three different image servers. The image servers provide layers that show the DC Metro Lines, satellite imagery, and map imagery that the client merges together. The client is able to manipulate the transparency of each layer and re-order the layers.



 



![](/content/binary/071407_0249_ExtendingMa5.png)



**Figure 5 GeoBoost Map Component Merging Raster and Map data for Washington DC. **



 



![](/content/binary/071407_0249_ExtendingMa6.png)



**Figure 6 GeoBoost Map showing the Washington DC Metro System. The image contains two GeoRSS vector layers and three raster layers (rasterized GeoRSS, NGA Satellite Data, and Washington DZC Map Data). **



 



GeoBoost's Map natively ingests GeoRSS, which translates cleanly to and from other popular geospatial formats.  It include many useful interfaces exist to allow real-time and historical data to be pulled in incrementally, providing optimal performance for web applications.  Each of the features or image overlays may have a different data source and may be drawn with a different style to encode meaning, including color, width, opacity, etc.    The advantage of drawing each data item as a vector feature is that the item is able to be highlighted and selected in a very intuitive way.  The Map supports sweep selection to select multiple items at a time.  The unique aspect of this interaction model is that it causes the events to propagate to other linked Maps and visualizations (Timelines, Bar Graphs, Pie Graphs, etc) which are displaying the same data.



 



One problem with thin client maps is scalability for GeoRSS feature data. The way GeoBoost (and other lightweight Map clients) render feature data is using a programming technique called DOM programming (Koch, 2006). GeoBoost's Map client ingests the feature data and creates DOM objects. The browser then interprets the DOM and renders the feature data correctly on the web page. Unfortunately, in practice this technique is not particularly scalable and as a result browser-based map applications become slow when displaying more than a few hundred feature objects. We have overcome the display scale limit by rasterizing the feature information server-side and displaying it using map layers. In practice our rasterization techniques allows us to display an unlimited amount of feature data since the rasterization is done by powerful servers.

1. <div style="text-align: justify"># <span style="font-size: 14pt">Integrated Mashups: Combining Maps, TimeLine, Time wheels and other Visual Components </span>

</div>



Timelines, Time Wheels and other visual components may be combined with a map on a single web page to create an integrated analytical mashup. This approach to analysis is sometimes called Visual Discovery (Eick, 2000). The advantage of multiple components is that each presents the mashup events using a different visual metaphor.



 



**Visual Analysis with Linked Charts **



Viewing the data by itself on a GeoBoost Map or on a Timeline might be helpful, but is limited in that it might not be possible to easily spot certain patterns or outliers in the data. Visualizing the data in multiple charts on the same page improves the ability to see different aspects of the data, but the real functionality comes from the GeoBoost's framework to highlight and select data items in one component and see the selections propagate instantly to all other linked components.



 



![](/content/binary/071407_0249_ExtendingMa7.jpg)



**Figure 7. Linked GeoBoost components showing a sequence of GPS positions in Washington DC.**



Figure 7 shows an example of three linked GeoBoost components. On the top there is a Timeline. Below the timeline is a GeoBoost map. On the right there is a (very simple) GeoBoost graph component showing relationships. An object on the Graph on the right is being moused-over by the user causing a tooltip to be shown describing the object. More importantly, however, this operation causes the blue data items on the GeoBoost Map and Timeline to instantly highlight (outlining themselves in yellow), and thereby help the user visualize the "where" and "when" about the object's events. Each GeoBoost visualization component offers a user a different way to visualize the data items. Linking unifies across the visualizations and allows the analysts to construct a mental model of the events in both time and space.



 



Often, a user wishes to select all data items that occurred at a specific point (or range) in time. For example, Figure 8 shows a user sweep selecting all events that occurred over the period of days in the Timeline. Instantly, those events display as selected in the TimeWheel and Map components to also tell the user "where" those events occurred and "what time of day" those events occurred.



 



![](/content/binary/071407_0249_ExtendingMa8.jpg)



**Figure 8. Sweep selecting a time range. **



 



TimeLine and TimeWheel help users correlate "when" and "where" for events. They enable users to find clumped or regularly occurring temporal events which would be impossible to find when viewed as a linear stream of data. Figure 9 shows a regularly occurring event in the center of the top Timeline and also a large clumping of temporal events towards the right of the top Timeline. Sweep selecting either of those groups of events shows "where" the events occurred or "when" they happened.



 



![](/content/binary/071407_0249_ExtendingMa9.jpg)



**Figure 9. Clumping analysis of street crimes in Washington DC.**



 



![](/content/binary/071407_0249_ExtendingMa10.jpg)



**Figure 10. Temporal, spatial, and cycle analysis of news events for the Washington DC area.**



Figure 10 illustrates how the clumping of events can be analyzed spatially on a map, temporally on a Timeline, and cyclically on a Time Wheel. The Time Wheel shows that most of the new events occurred during the first three to four hours of the day. As new events occur they can be compared to previous events to see if they match the previously seen patterns.



 



![](/content/binary/071407_0249_ExtendingMa11.jpg)



**Figure 11. Real time monitoring of events for situational awareness. Old events "fade out" through time and eventually disappear. **



Figure 11 shows GeoBoost Map and Timeline used in a real-time monitoring mode. The GeoBoost platform continually monitors GeoRSS providers. As new events occur, they are automatically added to the map and timeline using AJAX programming techniques. One of the problems with real time monitoring is that eventually the display accumulates too many events which cause visual confusion. To overcome this problem, the GeoBoost visualization components automatically fade out the old events over time as they age. Aging off items gives the user a quick visual cue as to which events are the oldest and newest based on the data items' opacity.

1. <div style="text-align: justify"># <span style="font-size: 14pt">System Implementation </span>

</div>



The GeoBoost framework, Map, Timeline, TimeWheel and other visual components are implemented using a set of JavaScript classes and run as lightweight thin client components. Using these components an application developer can create advanced, lightweight browser-based visualizations and mashups. The overall architecture consists of data components, visualization components, and framework/utility components.



 



From a data ingestion perspective, there are several classes that allow the framework to pull in RSS and GeoRSS data feeds. As pointed out in the introduction, RSS is a simple protocol for publishing information. The basic content of an RSS stream is a set of metadata tags organized into items that describe content. The required tags in each item are , , , , . The  tag is generally a hyperlink to retrieve the item content. Extending RSS with namespace extensions allows data to be added to a standard RSS feed without breaking existing parsers that understand RSS. GeoRSS extends RSS by adding location information.



 



One problem that we had is that we wanted specific shapes for some of our applications that were not part of the GeoRSS specification. These included ellipses, sectors, and slices of a circle. Although these shapes could be represented in GeoRSS using a GML generic polygon, it would be rather cumbersome. To overcome this problem, we developed a thinc name space extension to GeoRSS that specifically included our shapes. For example, the specification



 



**<thincml:sector center="38.82, -77.12" **



**radius="4000" insideradius="3000" startangle="90" arcangle="45"/>     **



** **



 



represents a sector of a circle or a pie wedge if the inside radius is zero.



 



By default, GeoBoost uses a XmlHttpRequest wrapper classes to asynchronously retrieve XML data from the server. This is how RSS and GeoRSS events are pulled asynchronously from the server by the web clients. The advantage of this approach is that XML data is quite standard and well understood. The disadvantage is that parsing XML data on a JavaScript client is somewhat cumbersome and slow. Recently, however, it has become popular in mashup applications to use the HTML  tags as a transport mechanism for pulling events from a server to a JavaScript client. Once transported, the data can be quickly consumed by the client, since the transformation from GeoRSS to native JavaScript data is no longer needed. We recently implemented support for JSON (JavaScript Object Notation) items so that once the data arrives on the client, the data items are parsed directly into an item collection.



 



The basic idea in the GeoBoost framework is that data is represented using an ItemCollection class which is modeled after GeoRSS. By default, each data item has all of the attributes from the GeoRSS feed. GeoBoost visual components display data taken from ItemCollections. If two components are displaying the same ItemCollection, they are automatically linked via tooltips, selection, and highlighting. Item collections may be created and updated programmatically, via JSON, or by monitoring RSS publishers.



 



Once a data item collection is loaded, it can be passed to one of the many visualization classes to be rendered. In addition to the temporal visualizations described previously, GeoBoost includes Map, Graph and standard business charts (e.g. Bars, Pies, Lines) visualization components. This is how the components link.



 



The GeoBoost framework includes various utility components to make working with the visualizations easier. An abstract rendering library separates vector drawing functions inside the visualizations so that GeoBoost platform from the specific rendering API. For instance, SVG is currently the most standardized vector drawing language available in modern web browsers, but other technologies like VML and Silverlight may soon replace SVG. By supporting different underlying renderers in our framework, our visualizations can run in a variety of web browsers depending on which vector languages they support.

1. <div style="text-align: justify"># <span style="font-size: 14pt">Summary and Conclusions </span>

</div>



We have developed thin client, Web 2.0 (O'Reilly, 2005) AJAX visualization components for displaying temporal data using mashups. Our components display the data spatially on a map, temporally on a timeline and cyclically on a time wheel. The components are linked so that interactive operations, e.g. selection, tooltips, highlighting, automatically propagate to other components on the page. The components are particularly rich and include many features for understanding time-oriented event data. Some of the more interesting features include "fade outs," best fit algorithms for labeling, and techniques to increase visual scalability.



 



Our data model extends RSS and GeoRSS. Our idea is that information is now published as RSS and thus this idea and simple data structure is embedded throughout GeoBoost. By cleverly using AJAX technology, we have incorporated ideas from real-time monitoring and situational awareness right into our framework and into our components. The value of this is that attaching our components to a live data stream is the same operation as analyzing a fixed data source. Live and static data are handled by a unified model.



 



There is nothing new about linked view visualization components. What is new about our approach is that linking between the components is done completely in a thin client using JavaScript built around ideas from RSS. A downside of thin client applications is performance. Our JavaScript library overcomes this limitation for many visualization tasks. The upside of thin clients is that they inherit all of the benefits of the web including built-in collaboration, light weight protocols, hyper-linking, etc. What is rather remarkable is how well it works. The interactive performance of our components is often faster than equivalent desktop software.



 



Our application focus is on developing mashups for understanding geo-spatial temporal relationships. We have combined geospatial mashups with traditional visualization techniques, e.g. timelines and time wheels, in a novel way for displaying temporal information. We have improved upon traditional visualizations by adding interactivity. Each of our visual components is live, dynamic and interactive. Our visual components are building blocks that enable web authors to publish time-oriented geospatial content.



 



Our system is designed to ingest live GeoRSS data streams. RSS has become the standard way that streaming information is published on the web. By embracing this format we fit naturally into existing web infrastructures. Furthermore, since our visualizations are live, they automatically ingest new information as it is published by the information providers. New events are placed automatically on our maps and in our other visual components within a second or two after they are published. We have added special features such as event "fade out" to support real-time monitoring tasks and situational awareness.



 



Our software is built around light-weight web protocols. By incorporating web technology we have included many of the most significant ideas from the web including open standards, real-time collaboration, and flexible but simple data models. The result is that we have built a powerful web-based capability for visualizing temporal geospatial information using mashups.

1. <div style="text-align: justify"># <span style="font-size: 14pt">Bibliography </span>

</div>



**Christensen Clayton M.** The Innovator's Dilemma [Book]. - [s.l.] : The Innovator's Dilemma, 1997.



**Eick S. G. [et al.]** Thin Client Visualization [Conference] // Draft Manuscript Under Preparation.. - 2007.



**Eick Stephen G. and Karr Alan F.** Visual Scalability [Journal] // Journal of Computational Graphics and Statistics. - 2002. - 1 : Vol. 11. - pp. 22-43.



**Eick Stephen G.** Visual Discovery and Analysis [Journal] // {IEEE Transactions on Computer Graphics and Visualization. - 2000. - 1 : Vol. 6. - pp. 44-59.



**GeoRSS W3C** Geographically Encoded Objects for RSS feeds [Online] // GeoRSS Home. - 6 2, 2007. - 6 2, 2007. - http://www.georss.org.



**Google** Google Maps [Online] // Google Maps. - 6 2, 2007. - 6 2, 2007. - http://maps.google.com.



**googlemapsmania.blogspot.com/** Google Maps Mania [Online] // Google Maps Mania. - 6 2, 2007. - 6 2, 2007. - http://googlemapsmania.blogspot.com/.



**Microsoft** Microsoft Virtual Earth [Online] // Virtual Earth. - 6 2, 2007. - 6 2, 2007. - http://maps.live.com.



**O'Reilly Tim** What is Web 2.0 [Online]. - http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/30/what-is-web-20.html.



**SIMILE** (Semantic Interoperability of Metadata and Information in unLike Environments) [Online] // SIMILE Timeline. - 6 2, 2007. - 6 2, 2007. - http://simile.mit.edu/timeline/.



**U.S. Department of Health & Human Services** Pandemic Flu website [Online] // www.pandemicflu.gov. - 6 2, 2007. - 6 2, 2007. - www.pandemicflu.gov/index.html.



**Wikipedia** Geography Markup Language [Online]. - http://en.wikipedia.org/wiki/Geography_Markup_Language.



**Wikipedia_Mashups** Mashup (web_application_hybrid) [Online] // Wikipedia. - 6 2, 2007. - 6 2, 2007. - http://en.wikipedia.org/wiki/Mashup_(web_application_hybrid).



**www.mashups.com** Mashups.com Home & Top Stories [Online] // Mashups.com: The ultimate guide to all types of Mash-ups. - 6 2, 2007. - 6 2, 2007. - http://www.mashups.com/.

