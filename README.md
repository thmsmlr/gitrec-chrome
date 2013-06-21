# Gitrec Chrome Extension

This is a Google Chrome extension for the [Gitrec](http://gitrec.mortardata.com/) website. The website provides repository recommendations for users and other repositories on [GitHub](https://github.com/). The recommendations were built ontop of the [Mortardata Hadoop platform](http://mortardata.com/) using the techniques described in Jonathan Packer's [blog post](http://blog.mortardata.com/post/53294300530/gitrec-your-personalized-github-repo-recommender).

This Chrome extension injects as recommendation button on all public repo pages that you visit on GitHub.  

### Installation

***Not Yet Published***

Visit the chrome extensions website and click install.

## Development

Clone this repo, then go into the `Chrome Settings -> Extensions`, make sure developer mode is enabled (top left corner), and click `Load unpacked extension`. Point the finder to the cloned repo. the [Chrome Extension Development Documentation](http://developer.chrome.com/extensions/index.html) are a good resource for all that can be done.


## Future Work

1.  ***Add user repo recommendations*** - It'd be really nice that instead of just linking out to the Gitrec site, we could inject the repo recommendations onto a users GitHub profile page.

2.  ***Add recommendation validation*** - Currently the extension simply checks if the repo is public or not - no private repo have recommendatinos on Gitrec. It'd be nice if we could validate whether the repo has recommendations and add some kind of visual queue.
