# hexo magnificent 主题

简体中文|[English](README-en.md)

> 各种笔记软件都用了一段时间，感觉不顺手，于是准备自己搭一个博客。本来打算直接使用smackgg的smackdown主题的，但是很多地方不符合我的需求，所以魔改了一下。没想到最后成了一个独立的主题。

本主题基于[yilia](https://github.com/litten/hexo-theme-yilia)和[smackdown](https://github.com/smackgg/hexo-theme-smackdown)开发，特别在此感谢两位作者。

**如果这个主题对你有用，还请star支持一下。** 欢迎大家多提issue，有改进也欢迎提PR。

---

Todo List：

- [ ] 添加手机端搜索功能
- [ ] 解决置顶文章无法置顶的问题

---

一、主题简介
---

- 基于hexo 6.0+ 开发，增加了很多小功能。
- 继承自smackdown主题的良好移动端兼容性。
- 修复了原主题的一些小bug，如表头颜色不清晰等。
- 使用hexo-renderer-pandoc增强对latex公式的支持。
- 增加了全局搜索功能，支持对标签、标题、正文的搜索。
- 增加了文章分类页面、Valine评论、文章阅读统计、不蒜子访问量统计和字数统计。
- 其他小功能：回顶部、到底部、进度条、亮暗主题切换、导航栏收起、目录栏、可选特效开关等。
- 主题不支持IE6，7，8。以后也不会（原作者的话）。

**电脑端效果：** 访问 https://renzehua1998.github.io/ ，国内访问 https://renzehua.gitee.io/

![电脑1](https://user-images.githubusercontent.com/48848908/175755287-32602d8f-c840-451f-9912-6254c1a4703a.png)

![电脑2](https://user-images.githubusercontent.com/48848908/175755282-d91a5b12-11ec-4f8b-b26f-c37c8aa21c36.png)

**手机端效果：**

![手机](https://user-images.githubusercontent.com/48848908/175755284-c663e67f-017f-4667-aaaa-1ec20347c300.png)

可以扫描查看手机端效果：

![手机二维码](https://user-images.githubusercontent.com/48848908/175758088-d2698f88-2ae7-4101-b329-c85f9026d98b.jpg)

二、快速上手
---

在你的hexo博客目录下

**安装**

```Bash
git clone https://github.com/Renzehua1998/hexo-theme-magnificent themes/magnificent
```

**配置**

修改hexo根目录下的 ```_config.yml``` 文件
```yml
theme: magnificent
```

*详细功能的配置，请在下一部分查看。*

**更新**

```Bash
cd themes/magnificent
git pull
```

三、配置
---
配置文件在主题目录```themes/magnificent```下的```_config.yml```，请根据自己的需要修改使用。 

```yml
# Header
menu:
  主页: /
  时间线: /archives
  # 分类: /categories

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
excerpt_link: 阅读全文
# excerpt_link: more

# 是否开启字数统计——不需要使用，直接设置值为false，或注释掉
# 单篇文章不想使用，可以在文中注明no_word_count: false
word_count: true

# 是否使用mathjax显示公式
mathjax:
  enable: true
  per_page: false
  # cdn: //cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML

# 是否开启动画效果
animate: true

# 是否在新窗口打开链接
open_in_new: false

# 百度统计、谷歌统计
# baidu_tongji: true
# google_analytics: true

# 你的网页icon
favicon: /img/favicon.ico

# 你的头像url
avatar: /img/avatar.jpeg

# 是否开启分享
share: true

# 是否开启多说评论，填写你在多说申请的项目名称 duoshuo: duoshuo-key
# 若使用disqus，请在博客config文件中填写disqus_shortname，并关闭多说评论
# duoshuo: your duoshuo id

# Valine评论 https://valine.js.org
# valine: false
valine: 
 app_id: #Leancloud应用的appId
 app_key: #Leancloud应用的appKey
 requiredFields: ['nick','mail'] # 需要填写昵称和邮箱
 verify: false # 验证码
 notify: true # 评论回复提醒
 avatar: monsterid # 评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
 placeholder: 因为开发版云服务器存在休眠的可能，可以多评论一次以便我尽快收到哦~\n您也可以选择留下邮箱，收到回复后会及时发邮件通知您 # 评论框占位符

# 是否开启云标签轮换菜单
tagcloud: true

# 是否开启文章阅读量
leancloud_visitors:
  enable: false
  app_id: #Leancloud应用的appId
  app_key: #Leancloud应用的appKey

# 是否开启不蒜子网页访问统计
busuanzi: true

# 是否开启友情链接
# 不开启——
# friends: false
# 开启——
friends:
  境外分流: https://yourname.github.io/
  国内分流: https://yourname.gitee.io/

# 是否开启“关于我”。
# 不开启——
# aboutme: false
# 开启——
aboutme: 很惭愧，只做了一些小工作

# 是否开启全局搜索（需要hexo-generator-json-content插件）
swift_search: true
```

四、其他依赖
---

1. 要加入分类页面，除了设置主题配置文件外，请在hexo根目录```source/categories```下新建```index.md```，并在其中编辑：

```markdown
   ---
   title: 分类导航
   type: "categories"
   ---
```

2. 头像和网页icon请在hexo根目录```source/img```下新建```avatar.jpeg```和```favicon.ico```即可。要想改变文件名或扩展名请在主题目录```themes/magnificent```下的```_config.yml```中改成您想要的名称。

3. 若要开启全局搜索功能，请先安装**hexo-generator-json-content**模块。

```bash
   hexo install hexo-generator-json-content --save
```

   并在hexo根目录下的 ```_config.yml``` 文件中添加：

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

4. 如果使用阅读字数统计，需要安装**hexo-wordcount**模块。

```bash
   hexo install hexo-wordcount --save
```

5. 如果修改后出问题，请先尝试清除缓存重新编译：

```bash
   hexo clean
   hexo g
   hexo server
```

6. [Valine](https://valine.js.org/)评论和阅读量统计都需要注册[leancloud](https://www.leancloud.cn/)账号，注册好后在上面提到的地方填写自己的```app_id```和```app_key```即可。

7. 多说评论系统已经关闭，此处仍然保留了原作者的多说评论框架，后续计划开发成基于gitment的评论系统。
