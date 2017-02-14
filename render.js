
const ejs = require('ejs')
const marked = require('marked')
const fs = require('fs')

const template =
  fs.readFileSync('template.ejs').toString()
const data =
  fs.readFileSync('data.md')
  .toString()
  .split('--- split ---')


fs.writeFileSync('index.html', ejs.render(template, {
  header: marked(data[0]),
  content: marked(data[1]),
}))
