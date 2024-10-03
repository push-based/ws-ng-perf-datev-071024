# Network: Lazy Load Resources

## 0. Investigate the current state 

Refresh the app (with / without cache - u probably should try both). 
Also see how the app behaves when throttling is enabled.

Search for images in particular, see how they affect LCP.

## 1. Introduce loading=lazy for movie-card

Use `loading="lazy"` on the `movie-card > img`.

Measure, you should see how images are now switched in priority and timing. Also the app behaves different now in terms of rendering.

## 2. Prioritize LCP candidate

You probably want to have the first image of the list always rendered eagerly. Use the `index` property to determine which image
should be loaded `loading="eager"`.

Measure again, your LCP should be improved now. Make sure you don't hit the cache when measuring before/after!
