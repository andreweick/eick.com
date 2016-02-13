---
layout: post
title: Principles In Support Of Viable Data Integration and Semantic Enrichment
date: 2010-05-26
published: false
meta:
  aktt_notify_twitter: "yes"
tags: []

type: post
tags: []

status: draft
---


 



Tatiana Malyuta, Ph.D.



New York City College of Technology,



Associate Professor



Data Tactics Corp.,



Principal Database Architect



510 King St. Suite 313Alexandria, VA 22314 USA00-1-201-896-8266tmalyuta@data-tactics.com



Suzanne Yoakum-Stover, Ph.D.



Potomac Institute for Policy Studies, Senior Research Fellow



US Army CERDEC I2WD, Information Exploitation Futures Lab, Lead Scientist



 Bld 600, McAfee CenterFort Monmouth, NJ 07703 USA00-1-814-817-8004



suzanne.yoakumstover@us.army.mil mail



 



 



 



 



 



**ABSTRACT**



We assert that viable data integration and semantic enrichment may be achieved if the following principles are observed:



Data are perceived objectively, independent of intended use



Domain data-models are considered from a higher level of abstraction



 



Following these principles, we develop a holistic Data Integration and Semantic Enrichment Platform (DISEP) that remains viable in a freely evolving, interdependent collective of human and computational systems, very little of which will ever be under our control. Whereas the DISEP does not provide the processing by which data may be integrated or cultivated to produce information, knowledge, and ultimately understanding, it enables the diversity of such processes to be put into production together without imposing restrictions on what data must be or how it is to be used. At the core of the DISEP lies the Data Description Framework (DDF).  The DDF provides for the unified _storage_ of structured data by embracing the diversity of data sources, types, models, and modalities (e.g. text, images, audio, signals).



Embracing the diversity of data, data-models, and processing is essential for viable data integration and semantic enrichment. This paper concentrates on the DDF, the principles which underlie it, and its power and viability.

# INTRODUCTION



To be viable within an Ultra-Large Scale (ULS) systems [8] environment consisting of a freely evolving, interdependent collective of human and computational systems, very little of which will ever be under our control, any approach to data integration and semantic enrichment must:



Present absolutely minimal barriers to incorporating new data and semantics into the integrated system (e.g. no heavy pre-processing or data / data-model conditioning)



 



 



Permission to copy without fee all or part of this material is granted provided that the copies are not made or distributed for direct commercial advantage, the VLDB copyright notice and the title of the publication and its date appear, and notice is given that copying is by permission of the Very Large Database Endowment. To copy otherwise, or to republish, to post on servers or to redistribute to lists, requires a fee and/or special permissions from the publisher, ACM.



_VLDB '09_, August 24-28, 2009, Lyon, France.



Copyright 2009 VLDB Endowment, ACM 000-0-00000-000-0/00/00.



Embrace the full spectrum of data sources, types, models, and modalities (e.g. text, images, audio, signals)



Impose no restrictions on what data must be or how it is to be used



Support the diversity of processing by which structural and semantic barriers are overcome to yield information and knowledge



Allow data, information, and knowledge to be re-used according to diverse perspectives



 



To our knowledge, no traditional approach to data integration, physical or virtual, has all of these characteristics [1, 2, 9, 10, 12].  Consequently, traditional approaches fail to provide viable solutions in the "wild," i.e. for ULS environments that are characterized by decentralization; inherently conflicting, diverse, and  unknowable requirements; heterogeneous, changing, and inconsistent elements; normal failures; continuous operation, evolution, and deployment; and immense scale along many dimensions.



To productively address the challenges of ULS systems environments, we developed the Data Integration and Semantic Enrichment Platform (DISEP) and the Data Description Framework (DDF) based on the following principles:



To enable true data integration and unencumbered semantic enrichment,



Data must be perceived objectively, independent of intended use



Domain data-models must be considered from a higher level of abstraction



 



In our approach, these principles are reflected in two essential decouplings:  The decoupling of data from domain data-models, and the decoupling of domain data-models from the model of the integrated data store.  As a result, the DISEP is able to serve as a universal platform for data integration and semantic enrichment, and within it, the DDF serves as a universal store for structured data.



The remainder of this paper is organized as follows: In Section 2 we provide a detailed description of the DDF and in Section 3 we discuss its philosophical underpinnings. In Sections 4 and 5 we discuss the integration potential of the approach and the viability of integration solutions built upon it.  In Section 6 we relate our approach with that of Dataspaces [4, 5, 6, 7] and examine the possible interplay between the two approaches. Finally, in Section 7 we discuss how DDF helps to resolve the many challenges of data integration.

# DATA DESCRIPTION FRAMEWORK



The DDF supports semantic data integration by establishing a domain-neutral unified store for structured data.  To achieve this, we consider structure, vocabulary, semantics, and constraints from a higher level of abstraction from which we then distill a minimal set of elements sufficient to capture any data-model.  These are illustrated in Figure 1 and defined as follows:



![](http://media.eick.us/2010/05/052610_2018_PrinciplesI1.png)**_Sign:  _**A _sign_gi represents a chunk of data, either physically located within a tangible artifact, or contained within an analyst's mind.  Examples of the former include a string of text in a document; an area of pixels within an image; a segment of an audio stream or other signal.  As illustrated in Fig. 1, for tangible artifacts, regardless of the type of medium, signs are always associated with a physical extent or quantifiable span within the artifact, which we call a _mention_.  The set of all signs, G = {gi}, spans across all data sources.  In the set, each element is unique: ∀i,j  (i ≠ j) gi ≠ gj.  G is the construct by which the DDF represents data.  From the text data shown in Fig. 1, signs G' = {'Suzi', 'Tanya', 'July 4, 2007', 'Bring lunch', 'Message1'}  contribute to G (i.e. G' Í G), though many more signs may be identified even from this simple example.



**_Concept:_** A _concept_ciis an abstract idea, defined either explicitly or implicitly by a source data-model.  For example, the nodes of an ontology, the tag set in an XML Schema Document (XSD), and the attribute / table names in a relational database all represent concepts.  In the set of all concepts C = {ci}, each element is unique: ∀i,j  (i ≠ j) ci ≠ cj.  From the text data shown in Fig. 1, concepts C' = {'Message', 'Person', 'Body_text'} contribute to the full set of concepts C (i.e. C' Í C).



**_Predicate:_** A _predicate_ pi is an abstract idea used to express a relationship between "things."  Predicates are used in the formation of _statements _(described below) and may be defined either explicitly or implicitly by a source data-model.  For example, the arcs of an ontology, and the attributes of an XML or database schema represent _predicates_.   In the set of all predicates P = {pi}, each element is unique: ∀i,j  (i ≠ j) pi ≠ pj.  The text example of Fig. 1 contributes predicates P' = {'To', 'From', 'Body'} to the set of all predicates P (i.e. P' Í P).  The only predicate that is "built into" (i.e. defined by) our storage model is the 'IsInstanceOf' predicate_, _which is used to disambiguate _signs_ to form _terms_ as described below.  Concepts and predicates are the constructs by which we link to data-models and, thereby, explicitly expose data-semantics.



**_Term: _** A _term_ti is an ordered pair <gi,cj> where gi∈ G and cj∈ C. Each term represents a disambiguated _sign_.  The process of disambiguation associates a _sign_ with a _concept_ using the 'IsInstanceOf'_predicate_ (though not every sign from G is necessarily disambiguated, and not every concept from C is necessarily used for disambiguation).  In the set of all terms T = {tij}, each element is unique:  ∀ i,j,k,l (i ≠ k or j ≠ l) tij ≠ tkl.  The text example of Fig. 1 contributes terms T' = {t1, t2, t3, t4} where t1 = <'Suzi', person>, t2 = <'Tanya', person>,  t3 = <'Bring lunch', Body_text>, t4 = <Message1, message> to the complete set of terms T (i.e. T' Í T).



**_Statement:  _**A _statement_, si is an encodes a binary relationship between a subject and an object mediated by a predicate_. _ A statement is represented by an ordered triple sijh = <subjecti, predicatej, objecth>.  Among the set of all statements, each element is unique: ∀ i,j,h,l,m,n (i ≠ l or j ≠ m or h ≠ n) sijh ≠ slmn.  In our model, subject and object may be either a _term_ or _statement_.  The simplest kind of _statement_ is one in which subject and object are _terms _s0ijh = <ti, pj, th>.  _Statements_ in which the object is itself another _statement_ represent reifications: s1klm = <tk, pl, sm>.  Finally, a _statement_ in which both subject and object are other _statements_ represents a relationship between _statements_: s2xyz = <sx, py, sz>.  The set of all statements S = ![](http://media.eick.us/2010/05/052610_2018_PrinciplesI2.png){s0ijh} U {s1klm} U {s2xyz}.  The text example of Fig. 1 shows three _statements_: S' = {<t4, to, t1>, <t4, from, t2>, <t4, body, t3>} all with the same subject, which is the _term_ corresponding to the message itself.  These statements contribute to the set of all statements, i.e. S' Í S.



These elementary constructs (sign, concept, predicate, term, and statement) define a data reference model, which we call the Data Description Framework (DDF) [13].  Because it effectively decouples data from data-models, it can encapsulate any sort of data-model.  Because it binds knowledge to data, it enables deep data integration and semantic enrichment.  By using the DDF as the basis for implementing a stable storage-model, we are able to build a practical data integration platform on commodity database infrastructure.



 The reader familiar with the Resource Description Framework (RDF/RDFS) may wonder what is different here. Indeed, RDF and DDF share DNA, so to speak, since both employ a similar level of abstraction and expose semantics. Unlike RDF however, DDF also prescribes the exposure of data as signs which can freely participate in the disambiguations and associations necessary for data integration. In contrast, a datum represented as an RDF literal cannot be explicitly disambiguated or associated. Also, in contrast to DDF signs, which provide a primal level of data integration (to be described below), there is no mechanism in RDF to prevent a single datum from being represented by multiple URIs.  This is not a criticism of RDF as these differences reflect the fact that RDF is a meta-model not specifically aimed at data integration. Thus, employing RDF for data integration necessitates building a particular metamodel instance (i.e. a model) in RDF along with rules prescribing the manner of data exposure [3]. In contrast, DDF is a model that makes explicit commitments to support data integration. Because this model represents an abstraction over domain data-models, the DDF can represent data structured by any data-model, and be represented in any metamodel (including RDF).



In the subsequent text, we represent signs, concepts, and predicates using Arial font.  Terms are denoted as [sign, concept] (e.g. [Adam, Chemist]) and statements are denoted using an intuitive triple representation, e.g. [Adam, Chemist] hasInventoryID [1001,InventoryID].



As illustrated in Figure 2, the DDF forms a layer of data and semantics (Layer 2) in the DISEP that lies between the indigenous source systems (Layer 1) and their data/knowledge models (Layer 3). A more detailed description of the layered architecture is presented in [13].   Layer 1 feeds the layers above, and Layers 2 and 3 interact:  Layer 3 provides the semantic context for Layer 2, and Layer 2 participates in the formation of an overarching knowledge model in Layer 3.   Together Layers 2 and 3 form what we call the unified DDF Data Space.

# DATA IN DDF

## Signs and the Objectivity of Data



Within the field of semiotics, what we think of as "data," are called _signs_ [11]. Signs capture and communicate our perceptions of the material world. The most common system of signs is language, which expresses our perceptions in a way that is understandable by most.  However, some signs express our perceptions more accurately than others do, and the same sign can have a different meaning for different people. For example, saying that a person's _height is 6'1" _gives a more accurate picture than saying a person _is tall_, and what is _tall_ for a child can be _short_ for an adult. Because of this ambiguity, signs alone cannot guarantee shared understanding.



In information systems, signs are organized within models or storage structures to enable efficient data processing and to facilitate some level of shared understanding. Within these systems, data-models provide the mechanism for access to and exchange of data. In other words, the data-model serves as the interface to the data.  Data consumers almost never see data directly, but rather through the lens of a data-model.



Because data-models impose additional meaning on data, mainly relating to its intended use, they present additional barriers to communication when taken outside that use. This is the case of data integration. In order to overcome these barriers and achieve true "data integration," we must perceive data, i.e. signs, objectively and work with them directly. This means data must be allowed to exist without semantics and have identity. The key to enabling this is to loosen the tight coupling between signs and data-models so that the former may be liberated from the strictures of the latter, and both can be dealt with on an equal footing.



A key principle of data integration is to acknowledge and actualize the primacy and objectivity of data.

## Trichotomy of Signs



Semiotics distinguishes three material types of signs [11]:



Qualisign or material quality, e.g. a ringing sound as a pure sensory experience independent of its source.



Sinsign or material indexicality, e.g. a ringing sound coming from a particular telephone.



Legisign or material meditation, e.g. a convention that the ringing sound means a telephone call.



 



In ordinary life, we commonly deal with all three types of signs depending on the perspective of the perceiver. What is perceived in one situation as a sinsign, may be perceived in another as a qualisign. For example, in Fig 3 a person transmits a sound. Perceiver A recognizes the sound as Suzi's voice (material indexicality, i.e. sinsign). Perceiver B recognizes the sound as a voice without association to a specific source (material quality, i.e. qualisign). Perceiver C conceptualizes the sound as a signal (material mediation, i.e. legisign).



As a user of an information system, we generally deal with only legisigns and sinsigns. For example, from the user's perspective the table attributes of a relational database represent conceptual abstractions, i.e. legisigns. The data values within the table represent indexical instances, i.e. sinsigns, where the indexicality stems from the internal organization and storage structure.



DDF goes beyond traditional information systems to support the trichotomy of signs: Mentions index sinsigns, DDF Signs are qualisigns, and Concepts are legisigns.  Qualisigns are what give the DDF the power to integrate data. They provide the means to state that disparate _data_ are the same from the perspective of the integrating process. Specifically, qualisigns are created when a perceiver (process) identifies sinsigns that are the same (from its perspective) and represents all such instances by a single qualisign (dropping indexicality). Having dropped the indexicality, qualisign provides a relatively abstract data object that represents instances of data elements that are perceived to be the same regardless of source. Qualisigns are therefore integrated objective representations of data.



![](http://media.eick.us/2010/05/052610_2018_PrinciplesI3.png)![](http://media.eick.us/2010/05/052610_2018_PrinciplesI4.png)



Because traditional physical integration approaches do not support the trichotomy of signs, they generally entail the loss and or distortion of data and semantics and consequently cannot provide viable _data_ integration in dynamic environments. For example, consider the  two data sources  (illustrated as relational tables) shown in Figure 4:



![](http://media.eick.us/2010/05/052610_2018_PrinciplesI5.png)![](http://media.eick.us/2010/05/052610_2018_PrinciplesI6.png)



If we aim to integrate these sources, and we assume that Person is a more general concept than Scientist, we may represent the concept Person in our integrated store and represent the values of Suzi and Suzanne under it. If we happen to know that Suzi and Suzanne represent the same person however, we will have to choose one value to represent both in the integrated store. As the result, some of the original semantics (Scientist) and data (Suzi) are lost. If later we wish to disambiguate the data differently, e.g. Suzanne is a Scientist, the integrated solution provides no means to do so.  We also would not be able to assert additional relationships – Suzanne the Person can participate only in the relations prescribed by the integration model. Finally, we could not easily change the integration model or introduce others.



In contrast, the structural elements of DDF (i.e. mentions, signs, and concepts) are independent and represent all three material aspects of data.  Thus the DDF can accommodate, all data and data-semantics without transformation, and stage both for data integration and semantic enhancement.

# DATA INTEGRATION  IN DDF



Data integration within the DDF proceeds as follows: The data sources to be integrated are ingested into the DDF Data Space, populating DDF structures in a way that captures data and semantics of the sources in their entirety [15]. This immediately results in a primal level of _data_ integration. In order to achieve _semantic_ integration, we then introduce an integration data-model in the Data Space. Within the DDF, this integration model is simply another data-model distinguished from source models only by its purpose, which is to provide a particular integrated view over the sources. This integrated view imparts a new perception of the underlying data, but does so without affecting the perceptions from the original data-models.



In what follows, we discuss three key aspects of the DDF –representation, integration, and evolution, which make the DDF a more powerful integration platform than traditional solutions.

## Representational Power



Traditional integration approaches employ a specific integration model constructed to reflect a particular view of data in support of operations. This model defines and thereby limits the representational scope of the store. Such an approach generally does not fully represent the original data and semantics, and cannot interoperate with other integration systems.



The DDF, on the other hand, is based on a data-model of a higher level of abstraction that provides an objective view of data. This higher level model is able to represent data and semantics regardless of source, model, and modality without loss or distortion [14]. It can also accommodate multiple integration models to provide different integrated views over the sources in support of diverse operations.



Although the expressiveness of the DDF is sufficient to capture the data and data-semantics of any structured data source, we illustrate this for the relational model since it is the most commonly used.  Similar arguments can be made for other model types, such as hierarchical, object-oriented, and graph.



In accordance with common relational formalism, a relation R is defined by the set of attributes A = {Ai} (1 ≤ i ≤ n).  The subset of attributes that comprise the primary key are denoted as K={Kl} (1 ≤ l ≤ k),  K ÍA.  The set of all data values in R is D = {dij},where dij is a value on the intersection of attribute Ai and row Wj (1≤ j ≤ m). We can integrate data and its original semantics from R into a DDF Data Space consisting of G0, C0, P0, T0, and S0 according to the following procedure:

- <div style="text-align: justify">All attributes <span style="font-family:Arial;font-size:10pt">A</span> of <span style="font-family:Arial;font-size:10pt">R</span> are added to the set of concepts:</div>

C = C0 U A



- Non-key attributes are added to the set of predicates:P = P0 U (A - K)Instead of deriving predicates from attributes we could use a generic predicate to capture the relational semantics, e.g. isInRDBRelationWith.  This might alleviate issues that some people have with mechanically assigning more specific predicate semantics to the attribute-derived predicates. However, having such a generic predicate would not allow us to build predicates hierarchies.  For example, we may have predicates hasDog, hasCat, and may introduce in Layer 3 the predicate hasPet which would be a super predicate that entails both.

- <div style="text-align: justify"><span style="font-family:Arial;font-size:10pt">D' = {d'<sub>i</sub>}</span>   is the set of unique values of <span style="font-family:Arial;font-size:10pt">D</span>: <span style="font-size:10pt"><span style="font-family:MS Mincho">∀</span><span style="font-family:Arial">i,j  (i<sub></sub>≠ j) d<sup>'</sup><sub>i </sub>≠ d<sup>'</sup><sub>j</sub></span></span> . The values in <span style="font-family:Arial;font-size:10pt">D'</span> that are not already present in <span style="font-family:Arial;font-size:10pt">G<sub>0</sub></span> are added to the set of signs:</div>

G = G0 U (D'– G0)



- <div style="text-align: justify">We build the set of terms <span style="font-family:Arial;font-size:10pt">T<sub>R</sub> =</span> {<span style="font-family:Arial;font-size:10pt">t<sub>ij</sub></span>} where <span style="font-family:Arial;font-size:10pt">t<sub>ij</sub>=&lt;d<sub>ij</sub>, A<sub>i</sub>&gt; </span>and <span style="font-family:Arial;font-size:10pt">1 ≤ i ≤ m</span>, <span style="font-family:Arial;font-size:10pt">1≤ j ≤ n</span>. <span style="font-family:Arial;font-size:10pt">T'<sub>R</sub></span> is the subset of unique terms of <span style="font-family:Arial;font-size:10pt">T<sub>R</sub></span>. Terms of <span style="font-family:Arial;font-size:10pt">T'<sub>R</sub></span> are added to <span style="font-family:Arial;font-size:10pt">T<sub>0</sub></span>.</div>

T = T0 U T'R



- <div style="text-align: justify">We build the set of statements <span style="font-family:Arial;font-size:10pt">S<sub>R</sub> =</span> {<span style="font-family:Arial;font-size:10pt">s<sub>ij</sub></span>} where <span style="font-family:Arial;font-size:10pt">s<sub>ij</sub> = &lt; &lt;d<sub>kj</sub>, K&gt;, A<sub>i</sub>, &lt;d<sub>ij</sub>, A<sub>i</sub>&gt; &gt;</span>, <span style="font-family:Arial;font-size:10pt">d<sub>kj</sub></span>  represents the combination of values of the key attributes for the row <span style="font-family:Arial;font-size:10pt">W<sub>j</sub></span>, <span style="font-family:Arial;font-size:10pt">A<sub>i</sub></span><span style="font-family:Symbol;font-size:10pt">Í</span><span style="font-family:Arial;font-size:10pt">A</span>-K, and <span style="font-family:Arial;font-size:10pt">k+1 ≤ i ≤ n</span>, <span style="font-family:Arial;font-size:10pt">1≤ j ≤ m</span>. Statements of  <span style="font-family:Arial;font-size:10pt">S<sub>R</sub></span> are added to <span style="font-family:Arial;font-size:10pt">S<sub>0</sub></span>:</div>

S = S0 U SR





The representation of R in DDF is lossless as the original data and semantics are preserved without modification and the original relation can be restored from the DDF.



Fig. 5 schematically shows the DDF representation of data and data semantics ingested from a simple relational source.

## Integration Power



The DDF exposes four levels of data and semantics (signs, terms, statements, and concepts and predicates), which support four levels of largely independent integration actions or patterns: establishing signs, disambiguation, association, and data-model enhancement.



**_Establishing Signs_**. Incorporating additional data in the DDF may result in the creation of new signs. Fig. 6 builds on Fig. 5 to  illustrate what happens when a new data source containing data value Suzi (sinsign) is ingested into the Data Space. In the case when the data ingest process determines that the sign does not exist in the Data Space, a new sign (qualisign) is created with an associated mention that links to the data element in the source (sinsign). The figure also shows what happens if the ingest process determines that for a source data item a sign (in the figure, a Voice1) already exists in the Data Space. In this case, the sign is re-used and a new mention is created, associating the source data element (sinsign) with that sign. This re-use of signs represents a primal level data integration. Note that the action of establishing signs is entirely independent with respect to other integration actions.



**_Data-model Enhancement_**. The data-models associated with the data sources incorporated within the DISEP are captured in Layer 3 and represented within the DDF as concepts and predicates.  Processes operating on Layer 3 may subsequently extend, enhance, or harmonize these models.  For example (Fig. 6d), a process (or user) may assert that a concept in one model is related to a concept in another: Person is more general than Scientist.  Such data-model enhancements do not affect the original data-models, but serve to establish new overarching ![](http://media.eick.us/2010/05/052610_2018_PrinciplesI7.png)data-models. Since the semantics of the underlying data is defined by the data-model through which it is perceived, multiple perspectives can co-exist (e.g. both the original and enhanced). Provided that existing data-model elements are not directly modified, data-model enhancement actions are independent of other integration actions.



![](http://media.eick.us/2010/05/052610_2018_PrinciplesI8.png)**_Disambiguation_**. Disambiguation actions create associations between signs and concepts.  This may occur when data is ingested into the DDF, or by a subsequent semantic process.  For example, Fig 6b shows the sign Voice1 representing an audio signal from a newly added source, associated with the source concept Audio resulting in the term [Voice1, Audio]. The figure also shows another term representing a different disambiguation of the same sign –  [Voice1, Sound] –  illustrating that signs and concepts may be associated regardless of their originating data source. Disambiguation actions are entirely independent of other integration actions.



**_Association._** Association actions create binary statements between terms / statements using a predicate.  Statements may come directly from semantic relationships expressed within a data source (e.g. the relations persisted in a relational data store) or may be created by a subsequent semantic process. For example, in Fig. 6c, terms [Voice1, Sound].and [Suzi, Scientist].are associated via predicate hasVoice to form statement. Any pair of terms regardless of origin can be associated via any predicate to form a statement. A particularly useful type of association is that of establishing the equivalence of terms. For example, we may say that [Suzi, Scientist] sameAs [Suzanne, Person] Note that association actions are independent of other integration actions.



By virtue of these integration actions, the DDF is able to support an essentially endless process of Data Space evolution and cultivation. New Data Space elements may be added on any integration level without necessarily affecting the other elements.

## Evolutionary Power



The independence of the integration actions imbues the DDF with extraordinary evolutionary power. New sources, modifications of the integrated data sources and changes of integration models can be accommodated without requiring the Data Space to be rebuilt. In particular:



The growth of a source system, both in terms of data and semantics, can be accommodated in the Data Space by the addition of new DDF elements (signs, terms, statements, concepts, and predicates) associated with that growth.



Source system modifications can be handled in several ways depending on how the integrated store is used. For example, we may simply add the elements that represent the source change to the Data Space.  We may also mark the changed elements as obsolete or incorrect using metadata and or reification statements (the discussion of which is beyond the scope of the paper).  Because the dependencies between all of the elements in the Data Space are known, we can always define how to proliferate / manage changes in the Data Space. For example, if we marked a term as obsolete, we may decide to mark the statements in which the term participates as obsolete as well. The Data Space modification approaches employed may also vary from a source to a source.



New integration models can be knitted into the Data Space by the integration actions (illustrated in 4.2).  These models will simply co-exist with all other models.



 



If an integration model needs to be modified, we can simply add the changed model to the Data Space, or we can additionally mark the changed elements of the Data Space as obsolete or incorrect and proliferate the changes.

## Limitations of Traditional Approaches



Physical integration solutions generally result in a monolithic data store that rarely captures the source data and semantics in their entirety and tightly couples data with the integration model (see Fig. 7). As a result, the representation, integration, and evolutionary power of these solutions is limited in the following ways:



Physical integration solutions do not support true _data_ integration because they do not treat data objectively – data is tightly bound to a particular data-model. There is no way to access or search for data but through that model, and there is no way to associate data with any other data-model.  Thus, for example, it is practically impossible to search the data store for a specific data value or its semantics. In other words, we cannot ask if Suzi exists in the data store or what it is. In contrast, DDF easily provides this capability.



The integrated store cannot be enriched freely. Data, disambiguated data, and statements can only be added if they fall within the structures of the integrated store.



The data store is not flexible and cannot support but one integration model / purpose. It is also difficult to sustain as changes in the integration data-model and or data sources generally requires re-building the integrated store.



 



Virtual integration solutions have similar representational limitations, and their integration and evolutionary capabilities are even more limiting (see Fig. 7). For example, there is no place to store new associations, even if allowed by the integration model without introducing yet another data store.



![](http://media.eick.us/2010/05/052610_2018_PrinciplesI9.png)![](http://media.eick.us/2010/05/052610_2018_PrinciplesI10.png)

# APPLICATIONS OF DISEP



To enable the rapid, ad-hoc assimilation of diverse data into a coherent knowledge repository, we must overcome system, structural, and semantic barriers between data sourced from different systems [15].  As illustrated in Fig. 7, traditional data integration approaches attempt to achieve this by imposing a tight commitment to a particular data-model or integration schema (i.e. canonical data-model).  Unfortunately, choosing which of the source data element to expose and mapping them to the canonical model inevitably leads to information loss, and or distortion, and the integration schema itself creates yet another semantic barrier.



In contrast, the DISEP breaks the barriers between data sources to accommodate all within a single coherent Data Space.  Simply loading data into the DDF in a largely automated fashion produces a fundamental level of data unity - the Unified Data Space Floor.  No data-model harmonization need be made and yet non-trivial data integration results.  Upon this floor, the DDF supports the construction of deeper integration and semantic enrichment at both the data instance and data-model levels without prescribing or constraining the processing by which such enrichment may be achieved.  Any fusion or data integration method can be applied alone or in combination.  Moreover, unlike other integration approaches, new data and associations, regardless of their origin, join seamlessly into the unified Data Space.



The DDF Data Space also supports the complete spectrum of applications and clients, from generic (i.e. those operating at the level of the DDF structure) to specific (i.e. those that have knowledge of a particular source data-model).  Generic clients seamlessly span across the entire Data Space regardless of data source or associated data-model to perform analysis.  Such clients require no modification as new data or semantics are introduced.  Specific clients are able to operate with the same semantic depth in the DDF Data Space as they would on the source system itself since the DDF Data Space preserves the data and semantics of the source systems.  In other words, the expressiveness and search capability native to those systems are retained.  As the Data Space is increasingly enriched with semantics that bridge data-models, the depth of specific clients is retained while their breadth increasingly widens toward that of a generic client.

# DATASPACES



The Dataspaces approach introduced by Halevy et al. [4, 5, 6, 7] is similar in philosophy to the DDF in that it supports the co-existence of disparate data sources regardless of their type.



"Dataspaces are not a data integration approach; rather, they are more of a _data co-existence_approach. The goal of Dataspaces support is to provide base functionality over all data sources, regardless of how integrated they are" [4].



With this approach, a mediated (general, global) schema serves as an integration model. Individual sources participate in the integration by exposing Local-As-View (LaV) schemas that comply with the mediated schema. In practice, a LaV is implemented as a view on the source, and the mediated schema provides an interface to Dataspaces participants. To support the storage of new associations between data (a shortcoming of  virtual integration) it may be necessary to introduce a Local Store for these associations. This provides Dataspaces with some limited data integration capability.



DDF and Dataspaces represent two different approaches to data management and have different niches: Dataspaces focuses on eliminating the barriers to data access and provides some limited data integration capability, whereas DDF focuses on comprehensive data integration and supports deep semantic enrichment. The DDF can leverage the Dataspaces as a mechanism of data access, and participate within Dataspaces as a semantically rich Integrated Local Store.

# ADDRESSING DATA Integration Challenges



The authors of the Dataspaces approach rightly acknowledge that there is no silver bullet for solving the problem of data integration [7], and that all integration approaches face deep challenges associated with scale, performance, query processing, data conditioning / pre-processing, semantic enrichment, viability, and sustainability.  The DISEP and DDF serve to address these challenges as follows:



**_Scalability_**. The challenge of scale is common to most integrated stores.  The "lossless" data representation of the DDF slightly exacerbates this problem because it generally requires several times more storage space than in the original source.  Fortunately, distributed database technologies, and cloud computing infrastructure in particular, provide viable means to manage this challenge.



**_Query Processing and Semantic Exploration_**. The DDF enables semantic navigation over the DDF Data Space by the action of a series of questions that "surf" across the entire DDF Data Space unimpeded by barriers between source systems. We distinguish two types of navigation and data retrieval on the DDF Data Space:



_Exploration_. A user navigates the Data Space having limited or no knowledge of the sources and their models. Navigation is data-driven; the result of the initial user's query is used to generate the next .



_Querying_ is similar to querying of traditional data sources when a user formulates a request assuming knowledge of a  data-model. Querying is model-driven; each query is independent from others.



 



A very important consequence of the unified representation of data and data-semantics in DDF is the unified structure of the queries. This allows querying patterns to be defined and processing optimized.  As a result, the ad-hoc querying and exploration of the data store can be performed naturally [15]. Ad-hoc querying of traditional integrated stores has serious performance issues and is constrained by the integration model. Moreover, some queries, such as search over data values, which are natural in the DDF, cannot be implemented in a practical way using other integration solutions.



**_Semantic enrichment_**. The scope of semantic enrichment achievable by the DDF is defined by the four integration actions that it supports. Because traditional  data integration approaches support only some aspects of data-model enhancement, their semantic enrichment power is severely limited. In addition, the DDF implementation supports extensive metadata [14] (not discussed in this paper), which may provide additional semantic enrichment by, for example, capturing information quality. Metadata also enable more sophisticated information retrieval processes.



**_Viability_**. One of the most important advantages of the DDF over other integration solutions is that it meets the challenge of the viability of an integration solution.  As described previously, the DDF accommodates new data and semantics and allows for virtually endless semantic enhancement through new data disambiguations (i.e. term formation) and new semantics associations (i.e. statements formation).



**_Sustainability_**. The authors of the Dataspaces approach emphasize the importance of "pay-as-you-go" management. An integration solution must "…offer some services immediately without any setup time, and improve the services as more investment is made into creating semantic relationships." [7]. The DDF actually achieves this:  Data sources can be integrated in the DDF without heavy preprocessing or data-model harmonization. The Data Space can be explored, and semantic relationships discovered, without a-priori understanding of source data-models. Additional refinement and enrichment of the Data Space servbes to increase the effectiveness of Data Space services.

# CONCLUSION



The DISEP and DDF support data integration and unencumbered semantic enrichment by implementing the following key principles:



Data must be perceived objectively, independent of intended use



Domain data-models must be considered from a higher level of abstraction



 



Data integration approaches, physical and virtual, generally manage to preserve only a portion of the original data and semantics, and present these with yet another single, restrictive data-model. In contrast, the DDF persists and presents the entirety of the source data and semantics by using a _higher level abstraction _that imposes no particular data-model yet supports any. The DDF populated with data produces a Unified Data Space that represents the primal integrated data layer of the DISEP.  Within this Data Space, the original data and data-models co-exist and may be enriched either through the ingestion and integration of additional data or semantic enhancement.



The DDF provides an _objective_ approach to storing and integrating data. In contrast, traditional _subjective_ approaches impose particular perceptions on data that define how data is represented and stored. Over decades of data processing, we have been formalizing our perception of data and then transforming (or even creating) and storing data according to this perception. Unfortunately, there has been very little effort to ensure correctness/durability/objectivity of those perceptions. As a  result, we work with numerous models and formats of data, and numerous versions of data buried beneath. The evolution of our perception and understanding of data cannot be reflected in these data stores. New data that does not conform to the store's model also can not be accommodated. Thus we are trapped in an endless loop of creating and integrating new data stores, each of which deals with only a fraction of the data surrounding us. None of these can be expanded to represent other data, and all are valid for a relatively short time. In DDF, on the other hand, data "lives" alongside data-models, not inside them. This enables loose coupling of data and perceptions (i.e. data-models), and allows multiple perceptions to co-exist in the Data Space.



Without imposing modifications on existing data stores, the DDF can expose their data and semantics for use and re-use without further increasing data entropy. The DDF Data Space is a live integrated store that evolves with our intentions (i.e. applications) and perceptions (i.e. data-models).

# ACKNOWLEDGEMENTS



The authors thank the following US Army CERDEC I2WD personnel for their continued support:  Mr. Anthony Lisuzzo, Director, Mr. Kesny Parent, DCGS-A Branch Chief, Ms. Virginia Goon IXFL Manager, and Mr. Norbert Antunes IXFL Computer Engineer.  The authors also thank Mr. Oscar Wood and Mr. David Salmen of Data Tactics Corporation, as well as Mr. Andrew Eick of MissionFoc.us for many productive and stimulating discussions. This work was funded by US Army CERDEC I2WD under contract number W15P7T-06-D-A401/009.

# REFERENCES



[1] Batini, C. et al. A comparative analysis of methodologies for database schema integration. _ACM Computing Surveys, (18) 4, 1986._



[2] Bernstein P., and Ho, H. Model Management and Schema Mappings: Theory and Practice. _Proceedings of VLDB Conference, 2007._



[3] Booth, D. _Why URI Declarations? A comparison of architectural approaches. HP Software, 2008_. http://sunsite.informatik.rwth-aachen.de/Publications/CEUR-WS/Vol-422/irsw2008-submission-9.pdf



[4] Franklin, M., Halevy, A., and Maier, D. From Databases to Dataspaces: A New Abstraction for Information Management. _ACM SIGMOD Record, 2005._



[5] Halevy, A. et al. Enterprise information integration: successes, challenges and controversies. _Proceedings of 24th International Conference on Management of Data, Baltimore, 2005._



[6] Halevy, A. Franklin, M., and Maier, D. Principles of Dataspace Systems. _Proceedings of the twenty-fifth ACM SIGMOD-SIGACT-SIGART symposium on Principles of database systems, 2006._



[7] Halevy, A., Rajaraman, A., and Ordille, J.Data Integration: The Teenage Years. _Proceedings of VLDB Conference, 2006._



 



[8]  Northrop, L., et al., Ultra-Large-Scale Systems The Software Challenge of the Future.  _Pittsburgh: Carnegie Mellon University, 2007._



[9]  Omelayenko, B. and Fensel, D.  An Analysis of B2B Catalogue Integration Problems.  _Proceedings of the International Conference on Enterprise Information Systems (ICEIS-2001),__2001_.



[10] Parent, C. and Spaccapietra, S. Issues and approaches of database integration. _Communications of the ACM, 41(5), 1998._



[11] Sowa, J. Knowledge Representation. Logical, Philosophical, and Computational Foundations. _Brooks/Cole, 2000_.



[12] Yero, J. Logical vs. Physical Data Integration: A Practical Decision Guide.  _The DAMA International Symposium & Wilshire Meta-Data Conference. San-Diego, CA, 2008_.



 [13] Yoakum-Stover, S. and Malyuta, T. _Unified Architecture for Integrating Intelligence Data_, _Proceedings of MIT Information Quality Industry Symposium, MIT, Cambridge, MA, 2008._



[14] Yoakum-Stover, S. and Malyuta, T. _Unified Integration Architecture for Intelligence Data_, _Proceedings of DAMA International Europe Conference, London, UK, 2008_.



[15] Yoakum-Stover, S. and Malyuta, T. _Unified Data Integration for Situation Management_, _Proceedings of the 4th IEEE Workshop on Situation Management (SIMA 2008) at MILCOM 2008, San Diego CA, 2008._



 

