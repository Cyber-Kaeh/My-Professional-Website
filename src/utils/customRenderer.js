import { marked } from "marked"

const renderer = new marked.Renderer()

renderer.link = function (hrefObj, title, text) {
  const href =
    typeof hrefObj === "object" && hrefObj.href ? hrefObj.href : hrefObj
  const displayText =
    text || hrefObj.raw?.match(/\[(.+?)\]/)?.[1] || "Untitled Link"

  console.log("Link Debug: ", { href, title, text: displayText })
  return `<a href="${
    href || "#"
  }" target="_blank" rel="noopener noreferrer">${text}</a>`
}

export default renderer
