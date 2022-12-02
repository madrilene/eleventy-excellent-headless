# Eleventy starter

Opiniated but easy to use Eleventy starter, based on the workflow suggested by Andy Bell's buildexcellentwebsit.es.

If you end up using this starter, feel free to send me a link, I'd love to see it!
Also let me know if you miss any features. Currently in planning: automatically generated OpenGraph images (as fallback) and dark mode.

- [Eleventy starter](#eleventy-starter)
  - [Preview](#preview)
  - [Features](#features)
  - [First steps](#first-steps)
  - [Deploy directly to Netlify](#deploy-directly-to-netlify)
  - [Development](#development)
    - [Install dependencies](#install-dependencies)
    - [Working locally](#working-locally)
    - [Creating a production build](#creating-a-production-build)
  - [Logbook](#logbook)
    - [22-11-24](#22-11-24)
    - [22-10-10](#22-10-10)
    - [22-10-03](#22-10-03)
  - [Credits and Thank yous](#credits-and-thank-yous)

## Preview

https://eleventy-excellent.netlify.app/

## Features

**This starter includes:**

- The whole CSS workflow as suggested by buildexcellentwebsit.es
- Accessible site navigation, editable in `src/_data/navigation.js`
- Image optimization with Eleventy-img _(see blog post)_
- Youtube embed with lite-youtube _(see blog post)_
- Easy resource fetching with eleventy-fetch _(see blog post)_
- Syntax highlighting via eleventy-plugin-syntaxhighlight _(see blog post)_
- SEO basics (XML-sitemap, metadata)
- dayjs handling dates & times
- 301 redirects for Netlify
- Advanced markdown handling
- Bundling via esbuild
- RSS feed
- Links to social networks in footer
- Mastodon domain verification snippet
- Eleventy Fetch plugin set to fetch Wordpress Posts via REST API

## First steps

- **Important:** edit meta data in `src/_data/meta.js`, it's being used all over the template.
- Use your own Wordpress source for posts in `src/_data/posts.js`
- Search for 'eleventy-excellent.netlify.app'. You'll find an entry in `src/assets/css/global/global-styles.css`. Replace with your own domain.
- Edit your social media in `src/_data/social.js` and `src/_includes/icons`. If you add new icons they must be prefixed with "social-". By default you have rss, mastodon, twitter, ko-fi, linkedin and github. Great resource: https://lucide.dev/
- Not required, but recommended: Delete `github.js` in `src/_data/github.js` and the blog posts, as these serve only as an example.
- Edit your preferences (colors, fluid text sizes etc.) in `src/assets/css/design-tokens`.
- Optional: set your (favicon) icons in `src/assets/images/favicon`.

## Deploy directly to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/madrilene/eleventy-excellent)

## Development

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify JS, inline and minify CSS.

```
npm run build
```

## Logbook

### 22-11-24

- updated required node version in package.json
- meta.js now controls most of the templates defaults
- added RSS feed, because of course!!
- made twitter and other meta data OPTIONAL
- added Mastodon verification and more social icon defaults
- focus-within for the cards

### 22-10-10

Added Wordpress posts via REST API

### 22-10-03

- first commit. Updated

## Credits and Thank yous

**Andy Bell**

His CSS methodology "CUBE" makes sense to me. It goes hand in hand with _Every Layout_ (which he co-authors). He has recently published an approach that incorporates Tailwind CSS into his methodology. Also, I learned how to use Eleventy in 2020 with his (now free) course.

- https://cube.fyi/
- https://buildexcellentwebsit.es/
- https://learneleventyfromscratch.com/

**Heydon Pickering**

I strongly orientate myself on Heydon's approaches and really love his books.

- https://every-layout.dev/
- https://inclusive-components.design/

**Zach Leatherman**

He is developing Eleventy and is constantly making it even better!

- https://www.11ty.dev/
- https://www.zachleat.com/

**Stephanie Eckles**

Stephanie provides a lot of resources for Eleventy and modern CSS.

- https://smolcss.dev/
- https://moderncss.dev/

**Aleksandr Hovhannisyan**

I love order and structure. Aleksandr does this in an exemplary way, which is why I based the structure of eleventy.js on his personal site. The 301 redirect solution I'm using is from his blog.

- https://github.com/AleksandrHovhannisyan
- https://www.aleksandrhovhannisyan.com/blog/eleventy-netlify-redirects/

**Manuel Matuzović**

Manuel is an accessibility expert. The menu I'm using is from one of his articles on web.dev.

- https://web.dev/website-navigation/
- https://www.matuzo.at/
