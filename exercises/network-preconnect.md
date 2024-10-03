# Network analysis and optimization

Network is where every frontend starts.
We already have an overview of the dev tools "Network" tab and also know about different optimization
techniques.

In this exercise you will learn how to use them. And as a bonus to additional optimizations to improve UX.

## 1. Use `preconnect` to preemptively connect

The Movies app is based on [The Movie Database (TMDB)](https://www.themoviedb.org/) API.
We know for sure that user will need many images from `https://image.tmdb.org/` and will do API requests to
`https://api.themoviedb.org/`.

Your task is to improve the http connection time by using a `<link rel="preconnect" crossorigin="" />` tag in the `index.html`
files `head` for the two known resources.

<details>
    <summary>show solution</summary>

Go to `index.html` and extend `<head>` tag with following:

```html
<!--index.html-->

<link rel="preconnect" href="https://image.tmdb.org/" crossorigin="" />
<link rel="preconnect" href="https://api.themoviedb.org/" crossorigin="" />
```
</details>

Sadly, the outcome of this improvement isn't really measurable with the current application setup :-(.
