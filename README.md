# Eick.com

## Configuration
To control the number of photos rendered by hugo (and not the netlify delayed build) change the parameter in ~/netlify.toml in the 'netlify-plugin-s3photo' part

## NPM Scripts
After having run `npm install` you should be able to use the following:
- `$ npm run dev:netlify`: Run the netlify cli (You can also test javascript functions!)
- `$ npm run gethugo`: Get the appropriate hugo version for OS and ARCH into your ~/bin
- `$ npm run start`: Run Hugo in a local dev server environment -> http://localhost/1313.
- `$ npm run deploy`: Deploy site and process ressources.
- `$ npm run hugo-cms`: Runs NetlifyCMS and Hugo

## To add a new post:
### Practice archetype (For Libby's piano audio recordings)

The practice archetype will parse the date from the file name and set the post data and the audio files correctly.

```bash
hugo new --kind=practice posts/2021-11-06-libby-practice.md
```

## CSS

Project uses TND Styles module to manage TailwindCSS and fonts.

### Configurations

- Tailwind Configuration is at `assets/css/config/tailwind.config.js`.
- Purge Configuration is at `assets/css/config/purge.config.js`.
- See `assets/css/tailwind/utilities.css` for declaring Tailwind custom utilities.

### CSS Files
`assets/css/style.scss` holds all relative imports.
SCSS syntax can be used in any files alongside Tailwind's own methods. `@apply` etc...

### Font files
Font files should live under `assets/fonts`. The TND Style module will handle every thing fonts from `@fontface` decleration to preloading.
User should declare fonts using the TND Styles Module API in its section of the `/config/params.yaml` file. See https://github.com/theNewDynamic/hugo-module-tnd-styles#fonts

## JS
Javascripts is built with Hugo's `js.Build` and can handle `jsx` as long as all the files' extension are `jsx`.

### JS Files
`assets/js/index.js` holds the relative imports.

## Multilingual

The template is setup as Multilingual. Check the `config/languages.yaml` file to remove/edit other languages.

String translations are handled via the `i18n`.

## Media

We're using TND MEDIA and its DX.

See [Settings](https://github.com/theNewDynamic/hugo-module-tnd-media#settings) and [Get function](https://github.com/theNewDynamic/hugo-module-tnd-media#get)

```
{{ $args := dict
  "path" "/uploads/an-image.jpg"
  "width" 1024
  "height" 100
}}
{{ with partial "tnd-imgix/Get" $args }}
  <img src="{{ .RelPermalink }}" alt="Something nice" />
{{ end }}
```

# Redirects

The netlify app domain redirection should be added through the params.tnd_redirects once code lives at final domain.


**Not Needed anymore for Eick.com**

# Google Analytics

See `config/_default/config`'s `googleAnalytics` key.


## Assets Processing

All assets are built by Hugo, their subsequent tags are loaded using the TND Styles module solution.

`$ npm run deploy` will process the assets and commit style related resources so that `production` does not compile the assets. (Thus gaining a good 3s of PostCSS)
