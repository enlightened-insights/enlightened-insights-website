// Renders a hand-edited HTML file from content/ without adding a wrapper box:
// `contents` lets the file's own elements sit directly in the page layout.
export default function HtmlBlock({ html }: { html: string }) {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: html }} />;
}
