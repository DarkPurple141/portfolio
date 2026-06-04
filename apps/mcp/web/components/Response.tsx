import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/** Renders streamed assistant markdown, styled with the portfolio tokens. */
export function Response({ children }: { children: string }) {
  return (
    <div className="response">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (props) => (
            <a href={props.href} target="_blank" rel="noreferrer noopener">
              {props.children}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
