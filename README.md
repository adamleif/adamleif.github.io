# Using Jekyll
- `$ bundle exec jekyll clear` -- remove \_site manually
- `$ bundle update` -- update Gemfile (already specified for github-pages)
- `$ bundle exec jekyll serve` -- runs site locally at https://127.0.0.1:4000 with live updates (changes to [_config.yml](_config.yml) require rerunning)

# This Site
- Currently, every page uses [default.html](_layouts/default.html):
    - Each page should, at minimum, specify a `title` in its header
    - Pages can also name an alternate `main_class`, where the default for \<main\> is usually `''`
    - Additionally, a `post_main_script` that runs after \<main\> is generated can be specified 
- [sidebar.html](_includes/sidebar.html) is a dynamic sidebar that works on both desktop and mobile:
    - This uses [sidebar.yml](_data/sidebar.yml), which contains the titles and urls (internal or external), to generate each component of the sidebar other than the headings 
    - Desktop components use the class `default` -- these are made `display: none` [on mobile](static/css/styles.css?plain=1#L36)
    - On mobile, the sidebar is converted into a dropdown menu (also automatically generated from the `sidebar.yml` data)