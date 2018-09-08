---
layout: post
title: Writing and Formatting Posts
caption: One Word
date: 2018-08-08
image: post-thumbnail.jpg
categories: life
tags: learn
---

# Writing and Formatting Posts

#### YAML Front Matter

At the top of every post, include the YAML Front Matter which is a chart of the key values of your post

Click Paragraph -> YAML Front Matter and then Copy/Paste this:

layout: post
title: Writing and Formatting Posts
caption: One Word
date: 2018-08-08
image: post-thumbnail.jpg
categories: life
tags: [everydaythoughts, learn]

#### Inserting Images

Copy and paste this wherever you want to insert an image. You can leave some variables empty by setting it to an empty string "". Make sure to specify the folder and file.

```html
{% include post-image.html 
    folder="post-thumbnail" 
    file="burano.jpg"
    date="2018-07-26"
    location="Burano, Italy"
    photographer="Jessica Ou"
    caption="An island in the Venetian Lagoon"
%}
```



#### Tags and Categories

The categories correspond to the higher level hierarchy of the navigation bar and the tags are the dropdowns.

As you can see in the YAML Front Matter snippet above, you can include multiple tags or categories by using [] separated by commas.

| Category Name | YAML Front Matter |
| ------------- | ----------------- |
| Stories       | stories           |
| Life          | life              |

| Tag Name            | YAML Front Matter |
| ------------------- | ----------------- |
| Everyday Thoughts   | everydaythoughts  |
| What I Have Learned | learn             |
| Motivational        | motivational      |
| Humour              | humour            |

#### Line Breaks

Be sure to break up your text into paragraphs by including line breaks with

 <br/> on a new line.

You do not need line breaks if you separate paragraphs with a heading since headings have padding.

#### Quotations

```
<blockquote>The man who comes back through the door in the wall will never be quite the same as the man who went out.</blockquote>
<cite>Aldous Huxley</cite>
```

#### Author's Note

```html
{% include authorsnote.html 
    note="Your author's note here"
%}
```

Please include this at the very end of your blog post to ensure proper formatting with the rest of the page.