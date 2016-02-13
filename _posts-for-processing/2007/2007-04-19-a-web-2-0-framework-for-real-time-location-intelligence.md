---
layout: post
title: A Web 2.0 Framework for Real-time Location Intelligence
date: 2007-04-19
published: true
meta: {}

tags:
- work
type: post
tags:
- Publications
- work
status: publish
---


 



**Abstract** – With increasing deployments of Global Positioning System (GPS) devices, Radio Frequency Identification (RFID) tags, and other location-aware devices, it is now possible to capture time-varying object information. In addition, existing systems such as Enterprise Resource Planning (ERP) systems emit ancillary object metadata (e.g., inventory levels in a warehouse). The challenge is how to leverage these information assets for demanding field operations scenarios such as Crisis Management, given the size and real-time nature of the data. To address the challenge, we have built a Web 2.0 framework for real-time spatial intelligence and collaboration. Our framework includes an extensible architecture for ingesting and combining spatial data across multiple formats; a fusion server for merging spatial and bespoke business data; support for spatial transformations tied to configurable business rules; and a publishing engine that pushes the combined information out for consumption in a visual, collaborative presentation layer running in standard Web browsers and on mobile devices. The result is an easily deployable system with broad reach to the field through a visual, interactive interface presenting timely, meaningful information.



**Introduction**



 



Crisis Management requires fast, on-the-spot decision-making by emergency responders (ERs) addressing reported incidents. Establishing a usable Common Operating Picture, or Shared Situational Awareness, for all the involved teams and individuals, possibly cross-jurisdiction, in both crisis and routine situations is essential to successful outcomes.



Fundamental needs of ERs surrounding Shared Situational Awareness include getting critical information related to the crisis at hand in real-time in an easily digestible form for fast understanding; enabling quick, intuitive interrogation for further detail; being alerted to unusual or highly important events related to the crisis; easily and securely communicating location-based observations and information with some or all involved parties; and easily accessing the system being used from standard devices without needing to manage client software.



Systems in the past have failed to meet the challenges posed by these needs because they were too complex for the targeted user (ERs), too limited in capability, relied on the deployment of specialized software, were too expensive to license and/or maintain, or some combination of these reasons.



To address the challenges of providing Shared Situational Awareness for Crisis Management, we have developed a Web 2.0 framework for real-time spatial intelligence and collaboration. Our framework is unique for several reasons. First, the architecture is modular and built around open Web and geospatial standards. This open architecture simplifies integration, makes it easy to extend, and enables “bottleneck tuning” to support varying deployment scenarios (e.g., bandwidth constrained environments). Second, the publishing engine has the capability to generate output customized for consumption on various devices. These devices include thin client Scalable Vector Graphics (SVG) [1] and Asynchronous JavaScript and XML (AJAX) [2] enabled Web browsers and mobile devices. AJAX and SVG enable a rich client experience without the need to manage client software. Third, our framework includes a novel presentation layer with custom visual displays for geo-fencing, geo-tracking, bread crumbing, hot spot analysis, collaboration, and location prediction – all through thin client and mobile device interfaces.



In this paper we describe the system in the context of Crisis Management. Specifically, we provide an outline of ER needs surrounding Shared Situational Awareness followed by a description of our framework capabilities that address those needs. We conclude with a summary of benefits.


**Emergency Responder Needs**



Crisis Management involves one or more teams of people and various support resources (e.g., emergency vehicles, command and control unit, radios, and medical equipment). People may be in the field (e.g., policemen, firemen, emergency medical technicians, HAZMAT responders, on-site incident commander) or off-site behind the scenes (e.g., dispatch, emergency operations center). While we refer to the people in the field as emergency responders (or sometimes “first responders”), the needs of a system supporting Shared Situational Awareness extends to the people working behind the scenes, particularly at the operations center.



ER needs for Shared Situational Awareness support can be categorized into usability needs and system needs. First we identify the usability needs:



(1)



While ERs need to be presented with all the facts, it is essential the information is presented in a form that they can quickly internalize within the context of the present situation. This suggests the supporting system provide an intuitive, visual approach that enables ERs to glean immediate insight about the situation simply by glancing at the information display.



(2)



ERs need to know the “what”, the “where” and the “when” about relevant events and objects. Understanding how a group of events are related across both location and time contributes to improved Situational Awareness. This suggests the supporting system present the information (the “what”) in both geospatial (the “where”) and temporal (the “when”) forms from which associations can be derived.



(3)



ERs need to know where and when critical events related to the crisis have occurred, and where new related events occur as they happen. This suggests the supporting system provide well-defined data ingest protocols and efficient, robust data management.



Further, knowledge of current positions of emergency vehicles and personnel that have responded or could respond to an incident is essential in the coordination of the overall effort. A recent history of where a responder has been is useful for understanding things like surveillance coverage. These needs suggest the supporting system provide the ability to represent multiple types of data (e.g., events, objects, paths).



(4)



ERs need quick access to more detail than what might be initially presented. Detail might be specific to the event itself (e.g., type of chemical spill) or contextual information surrounding the event (e.g., see aerial photography of the affected site at a granular level). This suggests the supporting system provide an interactive interface that allows the user to interrogate and interact with the displayed data.



(5)



ERs will have on-the-spot observations that will be pertinent to the rest of the team who are both in the field and in the operations center. Most of the time location will be a key element of those observations. The ER will need an easy way to identify/describe the location – typically an area – and make others aware of it, and perhaps include commentary in some form capturing key observations. This suggests the supporting system provide built-in location-based collaboration.



(6)



ERs want to be told when something of high interest occurs – particularly something that deviates from the norm – that might be related to the crisis, e.g., a looting crime occurring in or around an evacuated area, or an emergency vehicle leaving or entering a designated quarantined zone. This suggests the supporting system provide a flexible, rules-based approach for triggering predefined actions associated with events and object positions relative to designated zones.



System needs are as follows:



(7)



The system that supports the above usability needs must be readily and easily accessible by ERs, operations center personnel, and other parties involved in the management of the crisis. The system must support common client devices with standard environments without imposing specialized software requirements. Updates and/or upgrades to the system must not require changes to the client environment. This suggests a Web-based, thin client system that requires no software downloads or plug-ins.



(8)



The system must easily integrate into existing environments/applications. This suggests an open system based on accepted, industry standards.



**Web 2.0 Approach to Crisis Management**



Our approach was to build a framework on Web 2.0 from the ground-up to support real-time spatial intelligence and collaboration and a thin client deployment. Core capabilities as they relate to the Crisis Management needs identified in the previous section are described below.



**(1) ****At-a-Glance Understanding**



Figure 1 shows a simple Crisis Management application built on our framework. The map provides location intelligence of a number of 911 calls, including the crisis incident (HAZMAT). The translucent orange area on the map represents the affected area to be evacuated, as indicated by the tear-away tooltip shown.



The Timelines at the bottom provide a temporal view of the items shown in the map. The top Timeline provides a summary view of all notable events that have occurred so far throughout the day. The bottom Timeline provides a detailed hourly view of a subset of the day represented by the blue lens in the top Timeline, roughly 10:30am to 2:30pm.



[![](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image002%5B1%5D.gif)](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image002%5B2%5D.gif)



Figure 1: This sample Crisis Management Application provides at-a-glance insight to support Situational Awareness.



The map and Timeline provide an intuitive understanding of where and when events occurred. The icons themselves provide contextual information about the type of event (i.e., HAZMAT versus petty theft versus assault). Note that a given item is represented with the same icon in the map and Timelines. This helps to see not only what kind of events occurred, but which events occurred when.



**(2) ****Relating Location and Time**



The map and Timeline are linked. Pointing your mouse at an item in the map highlights it in the Timeline, as shown in Figure 2, and vice versa, and shows detail in a pop-up tooltip.



The association between location and time can be seen across multiple items by sweep-selecting a group, as shown in Figure 3. We can see quite clearly that three of the four events (which had close proximity to each other) we swept over in the map occurred very close in time.



[![](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image004%5B1%5D.gif)](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image004%5B2%5D.gif)



Figure 2: Get detail and see association of an item's location and time by pointing your mouse at it.



[![](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image006%5B1%5D.gif)](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image006%5B2%5D.gif)



Figure 3: Linked Map and Timelines enable ERs to easily associate event location and time.



We also employ automatic “aging” of events whereby the points/icons gradually fade with time (and possibly other factors), The points eventually fade completely from the display. This is used as a way to manage data cache size with real-time data feeds as well as provide a visually effective way to relate location and time.



**(3) ****Real-Time Events and ER Positions**



In the sample application shown in Figure 4, items are automatically being ingested into the system. The user does not need to manually refresh the data.



Behind the scenes, event data is being generated through 911 calls and stored in other existing databases. Our client supports the notion of a Data Connector, which in this sample application is configured to access the framework’s Tracking Server through its Web Service interface to get at the 911 event data. The Data Connector polls the Web Service at regular intervals for new events (the data could also be pushed to the Data Connector). It then intelligently adds the new events to the data cache, possibly rolling off old events that have expired based on application settings.



In Figure 4 there are two types of items being displayed: events (911 calls) and objects (current ER positions). These are represented as separate “data overlays” on top of the map and can be toggled on or off independently via the navigation panel at the left.



Behind the scenes, ER vehicle locations originate from a Global Positioning System (GPS) source. The GPS data is ingested through the framework’s Tracking server. Contextual information about the items, such as the squad car name and the icon being displayed, is ingested from a different system, fused with the location data, converted to GeoRSS, and sent to the client.



Only the latest reading for each ER vehicle is displayed. However, the recent positions can be shown in the form of a “bread crumb” trail attached to the current position. This is shown in Figure 4.



[![](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image008%5B1%5D.gif)](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image008%5B2%5D.gif)



Figure 4: Objects (Emergency Responder positions) are displayed along with events. Their positions can change in real-time. "Bread crumbing" (pathing) is used to show where the objects have recently been.



Finally, note that only events are shown in the Timeline. The ER vehicle readings are not. This is because we are interested only in the current positions and where they have recently been. The timestamp for these readings are uninteresting since they are all taken at predefined intervals.



**(4) ****Detail on Demand**



Our Web 2.0 framework provides a rich user experience. There are a number of built-in interactions the user can leverage to see more detail or additional context such as

- Pan and/or zoom the map(s) (multiple maps can be leveraged with synchronized panning and zooming).

- Pan and/or zoom the Timelines (Timelines support synchronized panning, so in our example, as you pan the top Timeline, the bottom Timeline automatically adjusts to show events positioned within the blue lens).

- Zoom to a selected set of items.

- Allow multiple map layers to be overlaid on the display.

- Add more (raster) detail to the map through the selection of additional map layers (this will be dependent on the WMS source being used).

- Adjust the transparency of the top map to see the bottom map (e.g., blend street map with close up aerial photography to get a better sense of the structures and land use of the area surrounding the incident).

- Show/hide other available data overlays like public transportation routes and stops.

- Display items as points rather than icons.

- Change the color of the events (e.g., to reflect priority/importance).

- Click on &ldquo;More Detail&hellip;&rdquo; in an event&rsquo;s context menu to pull up a Web page providing up-to-date detail on the event and background information about the hazard.



In Figure 5, we have zoomed one level down to the area where the HAZMAT incident occurred. We then brought up the linked mini-map, which provides a magnified aerial photography view of the area represented under the blue lens in the street map. The aerial view provides useful context for ERs.



[![](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image010%5B1%5D.gif)](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image010%5B2%5D.gif)



Figure 5: ERs can interact with the Map, Timeline and displayed data to get at more detail on demand. Synchronized panning and zooming are standard interactions. In this illustration a mini-map is synchronized with the street map. It is used to provide a magnified aerial view of the area positioned underneath the blue lens of the street map.



 



_Behind the scenes_¾Our framework leverages Web 2.0 technology, which is largely asynchronous JavaScript and XML, also referred to as AJAX. With AJAX, information is asynchronously downloaded to the browser, cached by the JavaScript, and displayed by the client when the user requests it. The net effect is an instantaneous response, without a disruptive page refresh. This makes possible a _direct manipulation_ user interface, strongly preferred by users [3], but not possible with traditional (Web 1.0) applications due to the latency between the request and response and the disruptive nature of the page refresh [4].



**(5) ****Communicate Location-based Information**



The orange polygon in our example represents the initial evacuation area that was created by an ER or someone in the operations center shortly after assessing the crisis incident earlier in the day. Figure 6 shows the area being reconfigured based on a new assessment. As shown, the polygon is drawn with the mouse or stylus (depending on the user’s device). Further, the user can attach commentary in the form of notes or audio recordings.



[![](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image012%5B1%5D.gif)](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image012%5B2%5D.gif)



Figure 6: ERs can mark the map directly and attach observations.



Markings and attachments are automatically propagated to other ERs by our framework’s Collaboration Server, as illustrated in Figure 7. User-drawn zones are rendered as a separate data overlay. ERs have the option to show/hide these zones.



[![](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image014%5B1%5D.gif)](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image014%5B2%5D.gif)



Figure 7: Markings automatically propagate to other ERs' displays.



**(6) ****Alert Me to Important or Unusual Matters**



Figure 8 shows an alert triggered by an ER vehicle entering the quarantined zone. The alert was triggered based on a business rule previously set up to kick off an alert whenever an ER vehicle enters or exits a quarantined zone. In other words, even zones created on the fly by ERs will automatically be subjected to pre-defined business rules.



[![](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image016%5B1%5D.gif)](/content/binary/WindowsLiveWriter/AWe.0FrameworkforRealtimeLocationIntelli_BE65/clip_image016%5B2%5D.gif)



Figure 8: ERs are alerted to important occurrences based on configurable business rules.



Our Tracking Server provides Business Rules and Alerting modules to define rules and actions, dynamically perform calculations as location data is received, and trigger corresponding alerts.



**(7) ****Broad Reach (Thin Client)**



Our Web 2.0 approach enables rich client interaction while maintaining broad reach through a thin client interface that imposes no specialized software requirements on the client device.



**(8) ****Easy Integration**



Our framework supports a Representational State Transfer (REST) Service Oriented Architecture (SOA) allowing easy integration into existing environments and applications. In addition, it provides flexible, standards-based imagery and feature data ingest subsystems.



_Imagery_¾Our frameowrk supports the OGC standards WMS and WFS. It also is able to read imagery formats like RPF (CADRG and CIB), MrSID and JPEG2000. Further, it provides a WMS interface to all these sources, including other WMS’s, enabling a single view to consist of layers from multiple image sources. This flexible imagery ingest enables imagery sources to be hooked up with little effort.



_Data_¾Our framework supports standard protocols for feature data ingest including GeoRSS [5] and Geospatial Markup Language (GML) [6]. GeoRSS extends the popular Really Simple Syndication (RSS) protocol [7] with location information. Standard GeoRSS supports points, lines, circles, and polygons. Our framework also supports thincGeoRSS, an extension to GeoRSS that supports additional shapes like ellipses and the specification of common attributes like fill color, line thickness and transparency. In addition, our framework can ingest JavaScript Object Notation (JSON) [8] as well as JavaScript itself. Supporting standard protocols as such simplifies the process of connecting up data.



_Client_¾Our framework imposes no restrictions on the client except requiring Scalable Vector Graphics (SVG) full version for client-side rendering of feature data. SVG is supported natively in Firefox, and as a plug-in (from Adobe) for Internet Explorer. Although our framework currently supports only SVG for the rendering, it leverages a rendering abstraction layer, making it easy to support other rendering engines such as Microsoft VML or XAML.



**Conclusions**



A usable Shared Situational Awareness is crucial for successful Crisis Management. The high-pressure, stressful conditions under which ERs must operate makes it imperative that the tools they use are easily accessible, reliable, and intuitive. Our thin client approach provides reach (accessibility) and does not affect the client environment, increasing reliability. GeoBoost’s novel, highly visual displays present the information in a format digestible by the ER at-a-glance. ERs are informed of critical events through custom alerts triggered by business rules tailored for Crisis Management.



Getting at the right information as events occur and sharing key observations are also crucial to Shared Situational Awareness. Our framework was designed to deal with the complexities of efficiently handling real-time data. It was built on Web 2.0 technology from the ground up, providing a rich environment for on-the-spot interrogation of the information and its surrounding context. It also enables ERs to share location-based observations simply by marking/annotating the map, with backend support to propagate those observations to the involved ER teams.



Finally, our framework’s flexible architecture and standards support make it easy to integrate into existing environments.



Simply put, the capabilities of our framework are well-aligned with Crisis Management needs. One challenge at hand is supporting handheld devices, like SmartPhones and PocketPCs, where SVG and other standards are still ill-defined. Our current approach is to provide client-side code specific to the device, and then revisit a true thin client once standards on those devices become more settled.



Our Web 2.0 approach coupled with visualization and strong server-side functionality offers a number of key advantages surrounding reach, ease of use, richness, and integration that lend itself to Crisis Management and many other problem domains.



**References**



 



[1] _Scalable Vector Graphics (SVG) 1.1 Specification_, W3C Recommendation, 14 January 2003, www.w3.org.



[2] _Building Rich Web Applications with Ajax_. IEEE Computer 2005; 38(10): 14-17.



[3] _Designing the User Interface_, Addison Wesley, Third Edition, 1998.



[4] Stuart Card, Jock Mackinlay, Ben Shneiderman, _Readings__ in Information Visualization: Using Vision to Think,_ Morgan Kaufmann, 1999.



[5] _Encoded Objects for RSS feeds_, April, 2006, www.georss.org.



[6] _OpenGIS® Geography Markup Language (GML) Encoding Specification_, OGC 02-023r4, Version 3.00, 18 December 2002.



[7] _RSS 2.0 Specification_, blogs.law.harvard.edu/tech/rss.



[8] _Introducing JSON_, RFC 4627, www.JSON.org.

