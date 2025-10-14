
 
# Mahalaxmi Developer Website Project with TailwindCSS 4.0

CSS Framework : [Tailwindcss 4.0](https://tailwindcss.com/)

  `npm install tailwindcss @tailwindcss/cli`
  
 installation full Gide [Tailwindcss 4.0](https://tailwindcss.com/docs/installation/tailwind-cli)
 
Animation : [Tialwind CSS Animate](https://www.tailwindcss-animated.com/)
# Tailwind CSS Animated

Extended animation utilities for Tailwind CSS<br>
https://tailwindcss-animated.com

## Installation

First, install the plugin via npm:

```sh
npm install tailwindcss-animated
```

## Import

Second, import it alongside Tailwind CSS in your CSS file:

```css
/* tailwind css v4.x */
@import "tailwindcss";
@import "tailwindcss-animated";
```

Or, if you are using **Tailwind CSS v3.x** or the legacy JavaScript configuration file, import the plugin like this:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-animated')
  ],
}
```

## Usage

This plugin brings various utility classes as well as several ready-to-use CSS animations. Here are some simple examples:

```html
<button class="animate-wiggle">
  Hej, look at me!
</button>

<button class="animate-jump-in animate-delay-300 animate-once">
  Wait a bit, then jump right in.
</button>
```

### Ready-to-use animations

There are several animations that can be integrated with a single utility class. These extend the Spin, Ping and Pulse animations of Tailwind CSS.

Open the configurator to see them in action:<br>
https://tailwindcss-animated.com/configurator.html
# Tailwind CSS Intersection Plugin

Imagine you could write an Intersection Observer like a Tailwind CSS variant:
```html
<div class="opacity-0 intersect:opacity-100 transition-opacity"></div>
```

### Demo
[Click here to see it in action](https://heidkaemper.github.io/tailwindcss-intersect/example/)
([View Source](https://github.com/heidkaemper/tailwindcss-intersect/blob/main/docs/example/index.html))

---

## Installation
This package has two parts. A Tailwind CSS plugin and a tiny JavaScript snippet.<br>
Download and install it via npm:
```sh
npm install tailwindcss-intersect
```

### Import
Import it just like Tailwind CSS in your CSS file:
```css
/* tailwind css v4.x */
@import "tailwindcss";
@import "tailwindcss-intersect";
```

If you are using **Tailwind CSS v3** or a JavaScript configuration file, import it like this:
```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-intersect')
  ],
}
```

### Add the necessary JavaScript snippet

#### Via CDN
You can include the CDN build of this plugin as a `<script>` tag to your site:
```html
<script defer src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js"></script>
```

#### Via NPM
Alternatively, you can add the plugin to your JavaScript bundle:
```js
import { Observer } from 'tailwindcss-intersect';

Observer.start();
```
Hot Tip: When building a SPA, it may be necessary to restart the Observer on route changes. You can call `Observer.restart()` to do so.

---

## Usage
Use the `intersect:` variant in your classes like you would with every other Tailwind CSS Variant:
```html
<div class="bg-cyan-500 intersect:bg-indigo-600 transition-colors"></div>
```

## Modifiers

### intersect-once
You can use `intersect-once` if you want to trigger the event only on the first appearance of an element.
```html
<div class="intersect:animate-spin intersect-once"></div>
```

### intersect-half
Use the `intersect-half` utility to trigger the event when at least half of the element is visible. (threshold is set to 0.5)
```html
<div class="intersect:animate-spin intersect-half"></div>
```

### intersect-full
Use the `intersect-full` utility to trigger the event when when the element is fully visible. (threshold is set to 0.99)
```html
<div class="intersect:animate-spin intersect-full"></div>
```

## Custom classes
If you want to define the intersection behavior in a custom class (e.g. with the @apply directive), add a `intersect` class to your HTML element.
```html
<div class="intersect custom-class"></div>
```



