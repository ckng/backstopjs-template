# O8 BackstopJS template

## Getting started

### Installation

Global installation for BackstopJS.

*TIP: This is a one-time requirement, do not need to do per project.*

```bash
$ npm install -g backstopjs
```



### Start a QA for a project

Fork or clone https://github.com/ckng/backstopjs-template as a new repo to start a new project QA. This has a preconfigured

- viewports.
- dismiss iubenda cookie dialog.
- example scenarios.
- convention for separate environments for Dev, Test, Live, and Pantheon Multidev.

Update the config file with the project URLs you want to test for visual regression.



### Working with your config file

By default, BackstopJS places `backstop.json` in the root of your project. And also by default, BackstopJS looks for this file when invoked. This should be used as default for Live environment.

The different environments config files are respectively:

Dev: `backstop.dev.js`

Test: `backstop.test.js`

Live: `backstop.js`

For individual multidev: `backstop.MULTIDEV.js`



#### Required config properties

As a new user setting up tests for your project, you will be primarily concerned with these properties...

**`id`** – Used for screenshot naming. Set this property when sharing reference files with teammates -- otherwise omit and BackstopJS will auto-generate one for you to avoid naming collisions with BackstopJS resources.

**`viewports`** – An array of screen size objects your DOM will be tested against. Add as many as you like -- but add at least one.

**`scenarios`** – This is where you set up your actual tests. The important sub properties are...

- **`scenarios[n].label`** – Required. Also used for screenshot naming.
- **`scenarios[n].url`** – Required. Tells BackstopJS what endpoint/document you want to test. This can be an absolute URL or local to your current working directory.

*TIP: no other SCENARIO properties are required. Other properties can just be added as necessary*



**`delay`** - Recommended. Wait for x milliseconds before a screen capture.

**`hideSelectors`** - Optional. Array of selectors set to visibility: hidden. e.g.

```json
"hideSelectors": [
  "#someFixedSizeDomSelector"
]
```

**`removeSelectors`** - Optional. Array of selectors set to display: none.

```json
"removeSelectors": [
  "#someUnpredictableSizedDomSelector"
]
```



A full scenario example

```json
{
  "label": "BackstopJS Homepage",
  "cookiePath": "backstop_data/engine_scripts/cookies.json",
  "url": "https://garris.github.io/BackstopJS/",
  "referenceUrl": "",
  "readyEvent": "",
  "readySelector": "",
  "delay": 0,
  "hideSelectors": [],
  "removeSelectors": [],
  "hoverSelector": "",
  "clickSelector": "",
  "postInteractionWait": 0,
  "selectors": [],
  "selectorExpansion": true,
  "expect": 0,
  "misMatchThreshold" : 0.1,
  "requireSameDimensions": true
}
```



### Running for the first time

#### Generate reference baseline

 ```bash
$ backstop test
 ```

This will create a new set of bitmaps in `bitmaps_test//`

Once the test bitmaps are generated, a report comparing the most recent test bitmaps against the current reference bitmaps will display.

Pass a `--config=` argument to test using a different config file.



#### Approving baseline

```bash
$ backstop approve
```

When running this command, all images (with changes) from your most recent test batch will be promoted to your reference collection. Subsequent tests will be compared against your updated reference files.

Commit the baseline images into the repo.



### Testing multiple environment

Duplicate the primary backstop.js to the respective environment. Update the domain of the URLs in the config file.

To test Dev, for example

```bash
$ backstop test --config=backstop.dev.json
```

