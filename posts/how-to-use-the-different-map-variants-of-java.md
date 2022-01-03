---
title: How to use the different Map variants of Java
authorSlug: william-bezuidenhout
authorDisplayName: William Bezuidenhout
tags: [tutorial, Java]
publicationDate: January 2, 2022
description: Overview of different implementations of Java Map
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-4.png
imageAlt: Sourcegraph Learn
browserTitle: "Java Maps: Hashtable, HashMap, LinkedHashMap, TreeMap"
type: posts
---

In Java, a Map is an object that maps keys to values that cannot contain duplicate keys. It takes the place of the Dictionary class. The generic name of Hashtable is used for hash-based maps, and there are three classes that provide implementations that can provide various benefits such as guaranteeing the order of a map.

In this tutorial, we’ll provide an overview of the Map interface, then discuss Hashtable, and the three class implementations: `HashMap`, `LinkedHashMap`, and `TreeMap`. We'll showcase the differences and benefits of each with an example program.

## The Map interface

Whenever a developer needs to associate one value with another and wants to look the association up, they reach for a dictionary or Map in Java. When using a dictionary data structure, the keys are hashed using a hashing function which determines the position of where the value associated with the key will be stored.

In Java, this hashing function is `hashCode()` which is a method on the base `Object` class from which all objects in Java inherit. By using this method, a map is able to achieve constant lookup times for keys.

Let's review a small program that uses Map in Java.

<PrismSyntaxHighlighter
input={`import java.util.Hashtable;
import java.util.Map;
 
public class WorldMap {
 
    public static class Country {
        public String name;
 
        public static Country of(String name) {
            Country c = new Country();
            c.name = name;
            return c;
        }
 
        public String toString() {
            return this.name;
        }
 
    }
 
 
    public static void main(String[] args) {
        Map<String, Country> globe = new Hashtable<>();
 
        globe.put("North America", Country.of("United States of America"));
        globe.put("South America", Country.of("Brazil"));
        globe.put("Europe", Country.of("France"));
        globe.put("Asia", Country.of("China"));
        globe.put("Oceania", Country.of("Australia"));
        globe.put("Africa", Country.of("Nigeria"));
 
        System.out.println(globe.get("North America") + " is on the continent of North America");
        System.out.println(globe.get("South America") + " is on the continent of South America");
        System.out.println(globe.get("Europe") + " is on the continent of Europe");
        System.out.println(globe.get("Asia") + " is on the continent of Asia");
        System.out.println(globe.get("Oceania") + " is on the continent of Oceania");
        System.out.println(globe.get("Africa") + " is on the continent of Africa");
    }
}`}
language='java'
/>

In our program above, we create a Map whose underlying implementation is a `Hashtable`. In Java, Map is an interface and we can choose from various concrete implementations of Map to slightly alter how a Map behaves. Using our Map, we associate continents (our keys) to countries (our values) by using the `put()` method.

With our Map filled with values, we ask the Map for the value associated with each continent in our globe. For each continent key, the country value is printed out as indicated by the following output.

<Highlighter
input='United States of America is on the continent of North America
Brazil is on the continent of South America
France is on the continent of Europe
China is on the continent of Asia
Australia is on the continent of Oceania
Nigeria is on the continent of Africa'
/>

In Java, there are various implementations of the Map interface in the standard library, namely `Hashtable`, `HashMap`, `LinkedHashMap`, and `TreeMap`. In the following sections we'll describe the key differences between each of these implementations starting off with Hashtable.

## `Hashtable`

Originally introduced in Java 1.2, Hashtable was later added as part of the [Java Collections Framework](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html). Out of the box, Hashtable is fully synchronized and therefore thread safe (for highly concurrent applications use `ConcurrentHashMap` instead) but on the downside, Hashtable does not accept `null` for keys or values.

We implemented the generic Hashtable interface for our Map in the section above. Let's now consider what happens when `null` is added to a Hashtable.

<PrismSyntaxHighlighter
input={`import java.util.Map;
import java.util.Hashtable;
 
public class WorldMap {
 
    public static class Country {
        public String name;
 
        public static Country of(String name) {
            Country c = new Country();
            c.name = name;
            return c;
        }
 
        public String toString() {
            return this.name;
        }
 
    }
 
 
    public static void main(String[] args) {
        Map<String, Country> globe = new Hashtable<>();
 
        globe.put("North America", Country.of("United States of America"));
        globe.put("South America", Country.of("Brazil"));
        globe.put("Europe", Country.of("France"));
        globe.put("Asia", Country.of("China"));
        globe.put("Oceania", Country.of("Australia"));
        globe.put("Africa", Country.of("Nigeria"));
        globe.put("Antarctica", null);
 
        for(Map.Entry entry : globe.entrySet()) {
            System.out.println(entry.getValue() + " is on the continent " + entry.getKey());
        }
    }
}`}
language='java'
/>


In our program above, we add the continent of Antarctica with no country. For our particular implementation, we chose to represent `"no country"` with the value `null`. 
When we run our program, `Hashtable` will not accept the `null` value for Antarctica as is indicated by the following exception.

<Highlighter
input='Exception in thread "main" java.lang.NullPointerException
    at java.base/java.util.Hashtable.put(Hashtable.java:475)
    at WorldMap.main(WorldMap.java:47)'
/>

We can fix this issue either by using a sentinel value like `Country.of("No Country")` or we can change the backing implementation of our map to something that is `null` friendly like HashMap.

## `HashMap`

In the previous section, we saw that `Hashtable` does not accept `null` values and one of our options was to use `HashMap` which will accept `null` values. Below our program has been altered to use a `HashMap` instead of a `Hashtable`.

<PrismSyntaxHighlighter
input={`import java.util.Map;
import java.util.HashMap;
 
// class definitions omitted for brevity
 
    public static void main(String[] args) {
        Map<String, Country> globe = new HashMap<>();
 
        globe.put("North America", Country.of("United States of America"));
        globe.put("South America", Country.of("Brazil"));
        globe.put("Europe", Country.of("France"));
        globe.put("Asia", Country.of("China"));
        globe.put("Oceania", Country.of("Australia"));
        globe.put("Africa", Country.of("Nigeria"));
        globe.put("Antarctica", null);
 
        for(Map.Entry entry : globe.entrySet()) {
            System.out.println(entry.getValue() + " is on the continent " +$
        }
    }
}`}
language='java'
matcher='HashMap'
/>


Our `globe` map now uses `HashMap` instead of `Hashtable`. When we execute our program with this change, we’ll receive the following output. 

<Highlighter
input='Brazil is on the continent South America
China is on the continent Asia
France is on the continent Europe
Nigeria is on the continent Africa
null is on the continent Antarctica
United States of America is on the continent North America
Australia is on the continent Oceania'
/>


We can see that all the continents are now printed, including `Antarctica`. Printing `null` is not the most user-friendly message but at least we're not throwing a `NullPointerException` exception anymore.

As we discussed when using `Hashtable`, there is a slight trade off to using `HashMap`. A `HashMap` is not synchronized and therefore isn’t thread safe. Depending on your use case, if you really need to share a map between threads, either use `Hashtable` or use the recommended `ConcurrentHashMap`, which is a `HashMap` that’s optimized for highly concurrent use cases. Next, we’ll review `LinkedHashMap`.

## `LinkedHashMap`

We've executed our program twice now with two different Maps, namely `HashMap` and `Hashtable`. If you review the output of each execution and compare it to the order we insert continents into our globe, you’ll notice that both of them ignore the order we insert the continents in, which can prove to be an issue as it may not be expected.

Luckily in Java, there is a map implementation that preserves the order of a Map. If the order that things get added to the Map is important for your use case, then you’re going to want to use `LinkedHashMap`. Below we've changed our program to use `LinkedHashMap`.

<PrismSyntaxHighlighter
input={`import java.util.Map;
import java.util.LinkedHashMap;
 
// omitted for brevity
 
    public static void main(String[] args) {
        Map<String, Country> globe = new LinkedHashMap<>();
 
        globe.put("North America", Country.of("United States of America"));
        globe.put("South America", Country.of("Brazil"));
        globe.put("Europe", Country.of("France"));
        globe.put("Asia", Country.of("China"));
        globe.put("Oceania", Country.of("Australia"));
        globe.put("Africa", Country.of("Nigeria"));
        globe.put("Antarctica", null);
 
        for(Map.Entry entry : globe.entrySet()) {
            System.out.println(entry.getValue() + " is on the continent " + entry.getKey());
        }
    }
}`}
language='java'
matcher='LinkedHashMap'
/>


In our program, we're inserting continents into our globe with the following order:

1. North America
1. South America
1. Europe
1. Asia
1. Oceania
1. Africa
1. Antarctica

When we run our program using a `LinkedHashMap` we get the same order as can be verified below — unlike when we used `Hashtable` and `HashMap`.

<Highlighter
input='United States of America is on the continent North America
Brazil is on the continent South America
France is on the continent Europe
China is on the continent Asia
Australia is on the continent Oceania
Nigeria is on the continent Africa
null is on the continent Antarctica'
/>

`LinkedHashMap` uses `insert-ordering` for keys, but it also supports `access-ordering`. By using `access-ordering` whenever a key is accessed, the ordering of keys will change in the `LinkedHashMap` since the keys will now be ordered based on when they were last _accessed_. 

With `access-ordering`, a `LinkedHashMap` can be used as a LRU (**L**east **R**ecently **U**sed) cache. Like `HashMap`, `LinkedHashMap` is not synchronized. If you need a thread-safe `LinkedHashMap`, then you can wrap the map using `Collections.synchronizedMap`.

## `TreeMap`

All our previous maps had constant lookup time for keys, which is pretty performant, but with our next map — `TreeMap` — that is not the case. A `TreeMap` uses a _red-black tree_ to store its key-value pairs. A red-black tree is auto-balancing, meaning the tree rebalances itself continuously as items get added or removed from it, which leads to O(logn) in the worst case for lookup times.

Self organizing comes with a slight performance cost but we also gain the ability to provide some order to keys. By default, keys in a `TreeMap` will be sorted based on their natural ordering, but by giving the `TreeMap` an object that implements the `Comparable` interface, we can change how keys are ordered.

Let’s modify our program to use a `TreeMap`.

<PrismSyntaxHighlighter
input={`import java.util.Map;
import java.util.TreeMap;
 
// omitted for brevity
 
    public static void main(String[] args) {
        Map<String, Country> globe = new TreeMap<>();
 
        globe.put("North America", Country.of("United States of America"));
        globe.put("South America", Country.of("Brazil"));
        globe.put("Europe", Country.of("France"));
        globe.put("Asia", Country.of("China"));
        globe.put("Oceania", Country.of("Australia"));
          globe.put("Africa", Country.of("Nigeria"));
        globe.put("Antarctica", null);
 
        for(Map.Entry entry : globe.entrySet()) {
            System.out.println(entry.getValue() + " is on the continent " + entry.getKey());
        }
    }
}`}
language='java'
matcher='TreeMap'
/>

In all our previous programs, we either got a random ordering of our keys when we printed them out (`HashMap` and `Hashtable`) or we got the exact order we inserted our keys into the Map (`LinkedHashMap`). With `TreeMap`, we get the following output:

<Highlighter
input='Nigeria is on the continent Africa
null is on the continent Antarctica
China is on the continent Asia
France is on the continent Europe
United States of America is on the continent North America
Australia is on the continent Oceania
Brazil is on the continent South America'
/>

From the output above we can determine that our continent keys are lexicographically sorted. Though it was inserted into our map second-to-last, `Africa` was printed out first, while `South America`, which was inserted second, was printed last.

As with `HashMap` and `LinkedHashMap`, `TreeMap` is not synchronized and therefore not thread-safe. If a thread-safe map is desired, one can wrap the map using `Collections.synchronizedMap`.

## Learn more

Now that you have an understanding of the various ways you can work with Map in Java, you can peruse how open source projects are using these different implementations by searching across them on Sourcegraph, using the queries below.

<SourcegraphSearch query="new Hashtable<>(); lang:java" patternType="literal"/>
<SourcegraphSearch query="new HashMap<>(); lang:java" patternType="literal"/>
<SourcegraphSearch query="new LinkedHashMap<>(); lang:java" patternType="literal"/>
<SourcegraphSearch query="new TreeMap<>(); lang:java" patternType="literal"/>

You can also review the official Oracle documentation on [Map in Java](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html), or review our other [tutorials on Java](https://learn.sourcegraph.com/tags/java).