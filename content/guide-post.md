---
title: Guide Post
private: true
list: never
tags:
  - exclude
---
# Notes on posting to eick.com

# Mux code (Video)
``` html
{{< mux >}}
```

# Audio shortcode
``` html
{{< audio >}}
```


## Images from imgix
Using markdown syntax emits a responsive picture element with srcset
![Vintage picture Montreal](/close_up_montreal_police_on_parade2.jpg "Figure 1: Montreal")

Using shortcode emits a figure element
{{< figure src="/close_up_montreal_police_on_parade2.jpg" caption="Figure 1: Montreal" >}}


## *More* 

Anything about the *more* tag will appear on the home page, everything after will appear on the post page

{{< highlight html >}}
<! -- more -->

(no space between the ! and the '--')
{{< /highlight >}}


# Hiding posts

1. `render`, which you can set to `always` or `never`. This will determine if the page is published, if an HTML file is created for it.
2. `list` which you can set to `always` or `never` which will determine is the page is returns with the site's collection methods like `site.RegularPages` or  a page context's `.Pages` etc...

So for a page to be removed from the various listing of the site but sill published with a URL you can add this to the front matter:

```yaml
---
title: That Post We Shall Not List
_build:
  render: always
  list: never
---
```

Because `render` defaults to `always`, you wouldn't technically have to mention it, but I added it for clarity.

Now if you want to set those settings to a whole section you can use [Front Matter Cascade](https://gohugo.io/content-management/front-matter/#front-matter-cascade) this way:
```yaml
---
# /hide-my-children/_index.md
title: This Section's Children We Shall Neither Publish Nor List
_build:
   render: always
   list: always
cascade:
  _build:
    render: never
    list: never
--- 
```

You will note that I set the build options are set twice. The first one is for the section page itself, the second one for its children! As any keys set in cascade will also apply to the page itself, it's important here to overwrite the `cascade`'s `_build` setting to ensure that if the children are not published, the section itself is!

Why `always` and `never` and not a simple boolean? This is to allow more options, for example, you can set unrenderered pages to sill have a `.RelPermalink` set with `render: link` or a page to be listed but only when invoked from its parent's `.Pages` (but not `site.RegularPages`) with `list: local`.

## Hide from Home Page
To hide posts from homepage, add the "exclude" tag

```yaml
---
title: Libby Plays Beethoven
tags:
  - piano
  - audio
  - exclude
---
```