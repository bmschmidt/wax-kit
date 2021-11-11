import { promises as fs } from 'fs'
import MarkdownIt from 'markdown-it'
const marker = new MarkdownIt({
  html: true, // pass through HTML tags. Very important for us!
  linkify: true, // Autoconvert URL-like text to links
  typographer: true //  // Enable some language-neutral replacement + quotes beautification
})
export async function get({params}) {
  const { slug } = params
  const data = await fs.readFile(`_exhibits/${slug}.md`, 'utf8')
  return {
    status: 200
  , body: marker.render(data)
}
};