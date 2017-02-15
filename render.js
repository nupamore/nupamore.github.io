
const fs = require('fs')
const ejs = require('ejs')
const marked = require('marked')

const template = fs
  .readFileSync('template.ejs')
  .toString()

const data = fs
  .readFileSync('README.md')
  .toString()
  .split('<br><!-- split --><br>')


fs.writeFileSync('index.html', ejs.render(template, {
  header: marked(data[0]),
  content: marked(data[1]),
}))
