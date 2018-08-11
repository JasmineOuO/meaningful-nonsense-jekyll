---
layout: post
title: Writing and Formatting Posts
subtitle: One Word
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
subtitle: One Word
date: 2018-08-08
image: post-thumbnail.jpg
categories: life
tags: [everydaythoughts, learn]

#### Inserting Images

Click Edit -> Image Tools -> Insert Local Images then browse for the image you want

Next, change the image path to start with resources/ by removing the first part of the path. Even though you won't see the image in here anymore, you will see it appear on the blog.

![burano](resources\images\polaroids\post-thumbnail\burano.jpg)

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

Be sure to break up your text into paragraphs by including line breaks with <br/> on a new line.
You do not need line breaks if you separate paragraphs with a heading since headings have padding.

