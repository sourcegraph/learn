---
title: A short history of code search
authorSlug: lisa-tagliaferri
authorDisplayName: Tom Benevides
tags: [tutorial, PHP, composer]
publicationDate: November 14, 2021
updatedDate: January 2, 2022
description: Learn how to make a Composer package
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-08.png
imageAlt: Sourcegraph Learn
browserTitle: Making a Composer package
type: posts
---

In his story “The Library of Babel,” Argentine writer and librarian Jorge Luis Borges detailed a possibly infinite library that contains a superabundance of books. The trouble is that there is no order to this vast amount of information, so — ironically — the books are rendered effectively useless to those readers searching for knowledge, and the librarians are left in a state of intense despair. 

In our everyday life, we are likely familiar with well organized libraries in our communities, and may be quite adept at using search engines to find information online. When it comes to information outside of textual data — like searching for the code that runs software — there are still opportunities for innovation and improved indexing. While programmers may be well served through reading and learning from repositories of software they know and can access, they may be unable to search code they don’t yet know about or search across large and multiple code bases. Without the ability to meaningfully search code to understand how programs work, and to build on these past efforts towards more powerful software, the ability for developers to continually innovate may have diminishing returns.

Fortunately, humans have been working on indexing and searching across stores of knowledge for a long time and how to address Borges’s infinite library, even in terms of software. Here, we’ll discuss a brief history of indexing and search across written data, and then consider the recent advances in code search from the last several decades. As we continue to make advances in code indexing and search, more people will have the access needed to effectively understand and create technology, and emerging and expert developers alike will be able to learn from existing code and contribute code in service to their communities. 

## Analog and digital search

Across the written record, people have developed ways to find relevant information beginning with tables of contents two millennia ago, alphabetized topics or concordances in the 5th century, and the book index in the 13th century. Physical libraries, too, have a long history of information architecture to support the retrieval of relevant knowledge: in the 16th century, Swiss Polymath Konrad Gessner used paper slips to organize topics; the mid-19th century saw the introduction of ledger books; and by the 1870s physical card catalogues became commonplace in the United States and Britain. 

Analog knowledge indexing has paved the way for digital search engines that we use to rapidly search across websites and media today. As we continue to create, document, and share knowledge, we need to be able to continue to search for and find knowledge that is relevant to us from an ever-increasing volume of information, so that we too can participate in knowledge production. 

## Searching code, the beginnings

Like textual information, computer code is a site where information is stored. As more software is developed and code is created, we need to innovate the way we search for and retrieve code so that we can participate effectively in understanding and creating technology. Tools to search computer code and digital file systems have been developed alongside innovations in technology. 

Bell Labs was an early pioneer in text-based computer search, being the institution behind both `grep` and Cscope. In 1973, Ken Thompson wrote the command-line utility `grep`, which is a tool that allows users to search plain-text data sets for lines that match a given regular expression. The first formation of the tool was developed in order to support Lee E. McMahon’s research project of determining authorship of individual texts within the Federalist Papers via statistical language analysis, and was originally written by Thompson in PDP-11 assembly language. While `grep` has implications across all digital text search, and is not limited to code search, it is an important building block of later tools designed specifically to search code bases.

By the 1980s, Bell Labs had a large C codebase and Joe Steffen began writing a tool that would later be called Cscope in order to aid his own work. Beginning with shell scripts of `grep` and `sed` commands, Cscope eventually would become a C program with a graphical user interface. Because it led to such an increase in productivity across the computation teams at Bell Labs, Cscope was brought into the official AT&T Unix distribution.

## Searching within operating systems

Today, we are accustomed to being able to search within our graphical operating systems and to find lines of code in our IDEs, but these everyday experiences were not always possible. 

In 1991, Microsoft was working on a technology project with the code name Cairo, predating Windows 95. Within the Cairo operating system was a piece of technology called the Object File System, which would later become known as WinFS. The Object File System organized the data within the filesystem into a collection of objects in a strongly typed schema, providing a human readable interface so that users could search across files. Over time, this project became the backbone of file indexing and search within Windows, doing much of the backend work for users to be able to find files effectively. The Object File System also offered developers the ability to hook into this functionality via APIs.

Linux, too, would benefit from search innovation as early as 1994. Two Norwegian students by the names of Arne Georg Gleditsch and Per Kristian Gjermshus were learning about Linux architecture when they began writing a program to display Linux files through a web browser so that they could click on variables and inspect how they were used. As they understood that others working on the Linux kernel were also interested in this project, they posted it on SourceForge early in their development process to support collaboration. Today’s stable version of LXR — or Linux Cross-Referencer — indexes source code and provides code comprehension through web-based browsing of code. This provides definition and usage links to any identifier within the code base. LXR is such a popular tool because Linux enjoys a high number of contributors who need to familiarize themselves with the codebase quickly. 

## Innovating on search

As search tools advanced, implementations continued to be built on top of existing tools. Expanding on `grep`, [agrep](https://github.com/Wikinaut/agrep) added fuzzy search — or _approximate_ matches — to text string- and regex-matching search (hence, “approximate” `grep`). The agrep tool was developed between 1988 and 1991 by Sun Wu and Udi Manber at the University of Arizona. Implementing the methods provided by the Levenshtein algorithm to search text files, agrep interprets relatively simple patterns, but its benefits over `grep` are that it can find similar terms and is often faster. 

Extending on approximate matching and developed by Ville Laurikari, [TRE](https://laurikari.net/tre/) is a command line search tool that offers greater functionality including allowing full regexps of any length, and can be used on Linux via the `tre-agrep` command. The work done on agrep served as a crucial foundation for GLIMPSE (GLobal IMPlicit SEarch), a tool for searching through entire file systems, first [described in a paper](https://www.usenix.org/conference/usenix-winter-1994-technical-conference/glimpse-tool-search-through-entire-file-systems) published in 1994 by Manber and Wu. From GLIMPSE, [Webglimpse](https://web.archive.org/web/20191001112623/http://webglimpse.net/) was developed, which provided developers with with a way to add search capability to the web.

In the 2000s, Mozilla created a [cross reference tool](https://web.archive.org/web/20080513070520/http://mxr.mozilla.org/) to display and search Mozilla source code, that was built from a fork of LXR with free-text search implemented using GLIMPSE. This search tool was first called MXR (Mozilla Cross Reference), later DXR (Dehydra Cross Reference), and is currently operative as [Searchfox](https://searchfox.org/). Initially written for code navigation across C++ and JavaScript, today it also supports Rust. 

Many search tools would eventually extend the functionality of Apache Lucene, an open-source search engine library originally written in Java by Doug Cutting in 1999. Providing functionality to implement internet search engines as well as local search, Lucene offers approximate search and can be used to generate recommendations as well. The enterprise search server Elasticsearch is notably built off of Lucene, and both [GitHub](https://www.elastic.co/customers/github) and [GitLab](https://about.gitlab.com/blog/2019/03/20/enabling-global-search-elasticsearch-gitlab-com/) use Elasticsearch to enable code search across their code host platforms. 

Also built on Apache Lucene is [OpenGrok](https://oracle.github.io/opengrok/), which is an open-source project built in Java and maintained by Oracle. Originally written by Chandan B.N., OpenGrok offers fast code search as well as a cross reference engine allowing developers to navigate their source tree. OpenGrok is very popular and actively maintained. 

## The future of code search 

Google has had an internal code search tool that has long been considered a gold standard of code search. The work on the internal tool began with gsearch by Jeff Dean in the early 2000s, later became Google Code Search in 2006 (led by Russ Cox), in 2010 developed into Grok (Steve Yegge). A version of Grok was eventually open-sourced as Kythe in 2015 and is actively under development. Google Code Search was a free beta public product that debuted in Google Labs in 2006 but was shut down in 2011. There currently is a [publicly re-released](https://cs.opensource.google/) version that debuted in 2020 for use exclusively with Google open source software and Google Cloud Source Repositories.

Founded in 2013 by Quinn Slack and Beyang Liu, Sourcegraph is open-core software that offers universal code search across large code bases. Currently used by many enterprise companies as on-premisis software, Sourcegraph also offers a [cloud version](https://sourcegraph.com) that offers developers with the opportunity to search across open source software. Sourcegraph's [long-term mission](https://handbook.sourcegraph.com/strategy-goals/strategy) is to help more people code, and, as we have seen with indexing books, being able to search across code can help more people understand others’ code and write their own code effectively. 

GitHub, the popular code hosting platform that is a part of Microsoft, announced at the end of 2021 that it was developing improved code search capabilities. Their intention is to improve developer productivity

Investors are also interested in the value that code search can bring. Mintlify, co-founded by Hahnbee Lee and Han Wang, raised a pre-seed round in 2022. Offering a “search engine in your code base,” Mintlify leverages AI to help developers search code.

As the number of software libraries increasingly resembles Borges’s infinite library, it is more apparent that we need to be able to meaningfully search across this form of knowledge, just as we do with any other text. User-friendly, sophisticated code search and indexing can allow developers to innovate effectively from existing code bases, get onboarded onto existing software projects more quickly, and ultimately enable more people to build software through increased coding literacy. 