module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    page1: {
      entry: 'src/pages/page1/main.js',
      template: 'public/page1.html',
      filename: 'page1.html',
      title: 'page1'
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/page2.html',
      filename: 'page2.html',
      title: 'page2'
    }

  }
}