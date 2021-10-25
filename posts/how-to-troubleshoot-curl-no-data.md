---
title: How to troubleshoot curl
author: tomasz-janiszewski
tags: [tutorial, Linux, curl, troubleshooting]
publicationDate: Oct 25, 2021
description: Learn how to deal with curl returning no data.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: no data with curl
type: posts
---

If you are working with curl and receiving no data that could mean curl is not following redirects.

## Reproducing the error

```
curl sourcegraph.com
```

## Follow redirects

There is a chance that site you try to access redirects you to another site.

To make curl follow redirects you need to use `--location` flag or `-L` for short.

```
curl -L sourcegraph.com
```

## Fail on error

If server returns error – response code grater than 399 then curl by default will not set exit code to indicate error occurred,
so if no other data will be sent by a server then you will get nothing.
To prevent that you may want to add `--fail` (`-f`) flag to show error and set exit code to 22 if something is wrong.

```
curl --fail  -L -X POST sourcegraph.com
curl: (22) The requested URL returned error: 403
```

## Be verbose

If non of the above helped, turn verbose mode with `-v` flag. It will make could more talkative.

```
curl sourcegraph.com -v
* Rebuilt URL to: sourcegraph.com/
*   Trying 104.18.2.36...
* TCP_NODELAY set
* Connected to sourcegraph.com (104.18.2.36) port 80 (#0)
> GET / HTTP/1.1
> Host: sourcegraph.com
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Date: Mon, 25 Oct 2021 22:38:18 GMT
< Transfer-Encoding: chunked
< Connection: keep-alive
< Cache-Control: max-age=3600
< Expires: Mon, 25 Oct 2021 23:38:18 GMT
< Location: https://sourcegraph.com/
< X-Content-Type-Options: nosniff
< Server: cloudflare
< CF-RAY: 6a3eef377d875037-WAW
<
* Connection #0 to host sourcegraph.com left intact
```

## Learn more

Search across open source repositories that use the `curl` to understand the it more.

<SourcegraphSearch query="curl lang:Bash" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Linux](https://learn.sourcegraph.com/tags/linux).
