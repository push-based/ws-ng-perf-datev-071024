# Network: Priority Hints

## 1. Use `preload` to load critical resources

We know for sure our users most likely will see the `logo.svg` as well as the `launcher` (initial loader) on slow connections.
In order to make those elements appear faster for the user, we can `preload` them.

Your task is to preload those two critical resources by again using a `<link />` in the `index.html`s `head`.

* preload `/assets/images/logo.svg`
* preload `/assets/icons/android-chrome-192x192.png`

don't forget to use the correct `as` tag, as it will have an impact on the fetch priority!

<details>
    <summary>show solution</summary>

Go to `index.html` and extend the `<head>` tag with following:

```html
<!--index.html-->

<link rel="preload" as="image" href="/assets/images/logo.svg" />
<link rel="preload" as="image" href="/assets/icons/android-chrome-192x192.png" />
```
</details>

Great, you can verify your changes by inspecting the network traffic of your application on a refresh.

To do so, open "Network" tab in the Chrome Dev tools. Make sure to have `disable cache` checked.
You should see that the requests for the preloaded resources are happening at a very early stage in the waterfall.

![preload-logo-and-launcher](images/network/preload-logo-and-launcher.png)

Please also note the change in priority when you remove the `as` attribute.

Please verify by commenting out those lines and repeat the measurement.

## 2. Use `prefetch` to preemptively fetch resources

You can use `prefetch` to make a hint to the browser that the resource will be needed for other pages.
Links with this attribute will be preemptively fetched and cached by the browser.
We need a backup image for movies that don't have a poster so let's fetch it.

Your task is to `prefetch` the `assets/images/no_poster_available.jpg` image by
using `link` tag.

Add it to the `index.html` files `head` tag.

<details>
    <summary>show solution</summary>

Go to `index.html` and extend `<head>` tag with following:

```html
<!-- index.html -->

<link rel="prefetch" href="assets/images/no_poster_available.jpg" />
```

</details>

Great, you can verify your changes by inspecting the network traffic of your application on a refresh.

To do so, open "Network" tab in the Chrome Dev tools. Make sure to have `disable cache` checked.
You should see that the request for the prefetched resource is happening right after the javascript bundles are loaded.

![prefetch-no-poster-available](images/network/prefetch-no-poster-available.png)
