# hexo theme magnificent

[简体中文](README.md)|English

> I have been using various note-taking software for a while, but I did not get used of them. So I was going to set up a blog myself. I originally planned to use the smackdown theme of smackgg directly, but many places did not meet my needs. Thus, I changed smackdown alot. Unexpectedly, it ended up being a separate theme.

This theme is developed based on [yilia](https://github.com/litten/hexo-theme-yilia) and [smackdown](https://github.com/smackgg/hexo-theme-smackdown), many thanks to the two authors.

**If this theme is useful to you, please leave a star to support me. ** If you have any questions, please raise issue. And if you have something new to change this theme, it is welcome to pull request.

---

Todo List：

- [ ] Added mobile phone search function.
- [ ] Solve the problem that pinned articles cannot be pinned.

---

1. Introduction to the theme
---

- Developed based on hexo 6.0+, many small functions have been added.
- Good mobile compatibility inherited from smackdown theme.
- Fixed some tiny bugs in the original theme, such as the color of the header is not clear, etc.
- Enhanced support for latex formulas with hexo-renderer-pandoc.
- Added global search function to support search for tags, titles, and context.
- Added article classification pages, Valine comments, article reading statistics, traffic statistics and word count statistics.
- Other small functions: back to the top, to the bottom, progress bar, light and dark theme switching, navigation bar collapse, directory bar, optional special effect switch, etc.
- The theme does not support IE6, 7, 8. Neither will (original author's words).

**Computer effect:**

![电脑1](https://user-images.githubusercontent.com/48848908/175755287-32602d8f-c840-451f-9912-6254c1a4703a.png)

![电脑2](https://user-images.githubusercontent.com/48848908/175755282-d91a5b12-11ec-4f8b-b26f-c37c8aa21c36.png)

**Mobile phone effect:**

![手机](https://user-images.githubusercontent.com/48848908/175755284-c663e67f-017f-4667-aaaa-1ec20347c300.png)

2. Quick start
---

In your hexo blog directory:

**Install**

```Bash
git clone https://github.com/Renzehua1998/hexo-theme-magnificent themes/magnificent
```

**Config**

Modify the ```_config.yml``` file in the hexo root directory

```yml
theme: magnificent
```

*For the configuration of detailed functions, please check in the next section. *

**Update**

```Bash
cd themes/magnificent
git pull
```

3. Theme config
---

The configuration file is in the ```_config.yml``` under the theme directory ```themes/magnificent```, please modify it according to your own needs. 

```yml
# Header
menu:
  Home: /
  Timeline: /archives
  # Categories: /categories

# SubNav
subnav:
  github: "#"
  zhihu: "#"
  CSDN: "#"
  cnblogs: "#"
  # mail: "mailto:your-email-address"
  # qq: "#"
  # weibo: "#"
  # rss: "#"
  # douban: "#"
  # facebook: "#"
  # google: "#"
  # twitter: "#"
  # linkedin: "#"

rss: /atom.xml

# Content
excerpt_link: more
# excerpt_link: 阅读全文

# Whether to turn on word count - no need to use, directly set the value to false, or comment out
# If you don't want to use a single article, you can indicate no_word_count: false in the text
word_count: true

# Whether to use mathjax to display formulas
mathjax:
  enable: true
  per_page: false
  # cdn: //cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML

# Whether to enable animation effects
animate: true

# Whether to open the link in a new window
open_in_new: false

# Baidu analytics, Google analytics
# baidu_tongji: true
# google_analytics: true

# Your web icon
favicon: /img/favicon.ico

# Your avatar url
avatar: /img/avatar.jpeg

# Whether to enable sharing
share: true

# You can open duoshuo, you should have a duoshuo-key. duoshuo: duoshuo-key
# You can use disqus
# duoshuo: your duoshuo id

#Valine commit https://valine.js.org
# valine: false
valine: 
 app_id: #Leancloud's appId
 app_key: #Leancloud's appKey
 requiredFields: ['nick','mail'] # Need to fill in nickname and email
 verify: false # verification code
 notify: true # Comment reply reminder
 avatar: monsterid # Comment list avatar style:''/mm/identicon/monsterid/wavatar/retro/hide
 placeholder: Because the development version of the cloud server may be dormant, you can comment once more so that I can receive it as soon as possible~\nYou can also choose to leave an email, and an email will be sent to you in time after receiving a reply # Comment box placeholder

# Whether to open the cloud tab menu
tagcloud: true

# Whether to enable article reading statistics
leancloud_visitors:
  enable: false
  app_id: #Leancloud' appId
  app_key: #Leancloud's appKey

# Whether to enable the busuanzi statistics of website visits
busuanzi: true

# Whether to open the friendship link
# No——
# friends: false
# Yes——
friends:
  Github pages: https://yourname.github.io/
  Gitee pages: https://yourname.gitee.io/

# Whether to enable "About Me".
# No——
# aboutme: false
# Yes——
aboutme: I only did some small work

# Whether to enable global search (requires hexo-generator-json-content plugin)
swift_search: true
```

4. Other issues
---

1. To add a category page, in addition to setting the theme configuration file, please create a new ```index.md``` under the hexo root directory ```source/categories```, and edit it:

```markdown
   ---
   title: Categories
   type: "categories"
   ---
```

2. For avatar and web icon, please create ```avatar.jpeg``` and ```favicon.ico``` in the hexo root directory ```source/img```. To change the filename or extension please change it to your desired name in ```_config.yml``` under the theme directory ````themes/magnificent```.

3. To enable the global search function, please install the **hexo-generator-json-content** module first.

```bash
   hexo install hexo-generator-json-content --save
```

   And in the ```_config.yml``` file in the hexo root directory, add:

```yml
   jsonContent:
     meta: false
     pages: false
     posts:
       title: true
       date: true
       path: true
       text: true
       tags: true
       raw: false
       content: false
       slug: false
       updated: false
       comments: false
       link: false
       permalink: false
       excerpt: false
       categories: false
```

4. If you use reading word count, you need to install the **hexo-wordcount** module.

```bash
   hexo install hexo-wordcount --save
```

5. If there is a problem after modification, please try to clear the cache and recompile:

```bash
   hexo clean
   hexo g
   hexo server
```

6. [Valine](https://valine.js.org/) comments and reading statistics need to register [leancloud](https://www.leancloud.cn/) account, after registration, fill in your ```app_id`` and ```app_key``` in the place mentioned above.

7. The Duoshu comment system has been closed, and the original author's Duoshu comment framework is still retained here, and the follow-up plan is to develop a gitment-based comment system.