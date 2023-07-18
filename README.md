<!-- prettier-ignore-start -->
Learning Sveltekit 👨‍💻
> Markdown 🗞, Threlte ✴, and More...

- [Overview](#overview)
- [Tutorial Resources](#tutorial-resources)
- [Useful Snippets](#useful-snippets)

---

#### Overview

- Building a sveltekit project from scratch: Using pnpm, setting up configuration, etc...
  [from_scratch_🧩](from_scratch_🧩/package.json)

- Building a markdown blog: Using pnpm, mdsvex, making your own api, etc...
  [blog_📰](blog_📰/package.json)

- Going over the basics (and not so basics) of sveltekit's routing system.
  [routing_🧭](routing_🧭/package.json)

#### Tutorial Resources

▶ Joy of Code
- [Sveltekit for Beginners Playlist](https://www.youtube.com/playlist?list=PLA9WiRZ-IS_zXZZyW4qfj0akvOAtk6MFS)
- [Sveltekit Intermediate Playlist](https://www.youtube.com/playlist?list=PLA9WiRZ-IS_zfHpxmztJQLeBISsQkh9-M)
- [Routing Tutorial](https://www.youtube.com/watch?v=7hXHbGj6iE0&ab_channel=JoyofCode)
- [Markdown Blog Tutorial](https://www.youtube.com/watch?v=RhScu3uqGd0)

▶ Huntabyte
- [Svelte & Sveltekit Playlist](https://www.youtube.com/playlist?list=PLq30BP0TIcqXP149TyFMfRhnMT6T5--e5)

#### Useful Snippets

<!-- TODO look up :app.html showLineNumbers... -->
```html {.line-numbers}
<!-- Preloads page data on hover!
     You can do this with multiple components! -->
<body data-sveltekit-preload-data="hover">
  <div style="display: contents">%sveltekit.body%</div>
</body>
```

<!-- prettier-ignore-end -->
