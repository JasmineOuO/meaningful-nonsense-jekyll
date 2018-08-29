# Building with Jekyll

To build and serve the site to view locally at localhost:4000:

run `bundle exec jekyll build` and then `bundle exec jekyll serve`

The site will automatically regenerate unless you use `bundle exec jekyll serve --no-watch` 

For convenience sake, you can use `bundle exec jekyll serve --livereload` to refresh the browser after a change.



#### Google Analytics

To prevent tracking any visits to the blog when you are developing it, the analytics scripts are not included when JEKYLL_ENV == production

By default, the blog is built in the "development" mode.

**Before** pushing any changes to the master branch on git, **make sure to rebuild** the jekyll site using `JEKYLL_ENV=production bundle exec jekyll build` so that the google analytics code is included in every webpage.



#### Indexing with Elasticsearch

##### Use the Bash Script to Automate the Process

Just run `./IndexBlog.sh <BONSAI_URL Key Here>`

Then verify that it doesn't index on regeneration be doing steps 8 and 9 below.

##### The process

Whenever there is a new post, you must re-index the blog to the elasticsearch cluster on bonsai in order to include it in the search results of the blog's search function. 

1. uncomment lines from _config.yml
   - \- searchyll
   - elasticsearch:
   - index_name: blog
2. uncomment lines from Gemfile
   - gem "searchyll"
3.  run `bundle install`
4. run `BONSAI_URL=<YOUR KEY HERE> bundle exec jekyll build `
5. re-comment the lines
6. run `bundle install`
7. run `JEKYLL_ENV=production bundle exec jekyll build `
8. run `bundle exec jekyll serve `
9. Verify that there is no indexing by running `BONSAI_URL=<WRONG KEY HERE> bundle exec jekyll build `