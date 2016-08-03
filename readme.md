Personal website for Andrew Eick, built with Jekyll

## Deploy
Anything on origin/master will get built and pushed to www.eick.com.

```shell
JEKYLL_ENV=production bundle exec jekyll build --config=_config.yml
```

Anything pushed to any other branch will get built and pushed to stage.eick.com.

```shell
JEKYLL_ENV=stage bundle exec jekyll build --config=_config.yml,_config-stage.yml --drafts --future
```

## Front matter additions

### Layouts:

If you use layouts and have text, use the key *intro:* to define a title

```YAML
intro: "Soccer Peeps second to last game of the season."
```


```YAML
photo_layout: "three_up"
photo_layout: "two_up"
photo_layout: "full"
```

---

[example of two_up:](https://www.eick.us/family/2014/11/16/all-star-tournament-day-2%20copy/)

[example of full:](http://www.eick.us/family/2014/12/19/busy-week/)

[example of three_up:](https://www.eick.us/family/2014/11/15/all-star-tournament-day-1/)

### Homepage
To get an image up on the home page thumbnail grid put into the YAML

```YAML
featured_image: path/to/image.jpg
```


### Other Front Matter additions

```
allow-robots: true  # sets the ROBOTS meta tag in the HTML (defaults to true)
```

---

The Sass (bourbon) files are in assets/css

Type is loaded in _includes/global/scripts.html
