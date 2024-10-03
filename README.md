# Push-Based Angular Performance Workshop

## Installation Instructions

**System Requirements**

* `node > 20`
* `npm > 8`

**Clone and install**

```bash
git clone https://github.com/push-based/ws-ng-perf-datev-071024.git

cd ws-ng-perf-datev-071024
npm install

# (optional) if the step before didn't work, please try the following
npm install --force
```

**Run the application**

```bash
npm run start
```

## Workshop Information

* [ws info doc](https://docs.google.com/document/d/1AFjrVb3gDNV_jsknv05EbzC2ABFUlG2V1X561ar2mAw/edit?usp=drive_link)
* [slides](https://drive.google.com/drive/folders/1LJCDzItO1fLi2N9TyiK6dxDRSjeT-5Dw?usp=sharing)

## Exercises

[0. Project Setup](./exercises/project%20setup.md)

#### Day 1

* [Signals Introduction](./exercises/signal-introduction.md)
* [Change Detection: Dirty Check](./exercises/change-detection%20-%20Dirty%20Check.md)
* [Change Detection: OnPush](./exercises/change-detection%20-%20OnPush.md)
* [Change Detection: Manual Change Detection](./exercises/change-detection%20-%20manual%20cd.md)
* [Change Detection: signals](./exercises/change-detection%20-%20signals.md)
* [Change Detection: zoneless](./exercises/change-detection%20-%20zoneless.md)
* [Change Detection: trackBy](./exercises/change-detection%20-%20trackBy.md)
* [Tooling: Performance Analysis & Flame Charts](./exercises/performance-tab-flame-charts.md)
* [Tooling: JS Event Loop](./exercises/event-loop.md)
* [INP: Scheduling - chunk work](./exercises/scheduling-chunk-work.md)
* [INP: Scheduling - Prioritize Work](./exercises/scheduling-prioritize-work.md)
* [Network: Preconnect](./exercises/network-preconnect.md)
* [Network: Lazy Loading Resources](./exercises/network-lazy-loading.md)
* [Network: Priority Hints](./exercises/network-priority-hints.md)
* [Network: Prefetch LCP Data](./exercises/network-prefetch-lcp-data.md)
* [Network: Cancel In-Flight Requests](./exercises/network-cancel-requests.md)
* [Network: Image Optimizations](./exercises/ng-optimized-images.md) 

#### Day 2

* [Bundle Analysis: Code Coverage](TBD)
* [Bundle Analysis: explore bundle](TBD)
* [Bundle Analysis: router lazy loading](TBD)
* [Defer](./exercises/defer.md)
* [CSS: TBD](./exercises/dom-access%20-%20layout%20thrashing.md)
* [CSS: TBD](./exercises/dom-access%20-%20forced%20reflow.md)
* [CSS: TBD](./exercises/css-performance%20-%20containment.md)
* [Tooling: Sources Tab](./exercises/sources%20tab.md)
* [Tooling: Lighthouse](TBD)
* [SSR: TBD](TBD)
* [SSR: TBD](TBD)
* [SSR: TBD](TBD)

