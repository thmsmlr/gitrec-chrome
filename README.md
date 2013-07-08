# Gitrec Chrome Extension

This is a Google Chrome extension for the [Gitrec](http://gitrec.mortardata.com/) website. The website provides repository recommendations for users and other repositories on [GitHub](https://github.com/). The recommendations were built ontop of the [Mortardata Hadoop platform](http://mortardata.com/) using the techniques described in Jonathan Packer's [blog post](http://blog.mortardata.com/post/53294300530/gitrec-your-personalized-github-repo-recommender).

This Chrome extension injects as recommendation button on all public repo pages that you visit on GitHub.  

### Installation

***Not Yet Published***

Visit the chrome extensions website and click install.

## Development

Clone this repo, then go into the `Chrome Settings -> Extensions`, make sure developer mode is enabled (top left corner), and click `Load unpacked extension`. Point the finder to the cloned repo. the [Chrome Extension Development Documentation](http://developer.chrome.com/extensions/index.html) are a good resource for all that can be done.

## Future Work

- Make a better repo recommendation error message. Right now its just a `h2` element and its really ugly. Should really have a better designed error state
