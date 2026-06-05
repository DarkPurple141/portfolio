import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/** Renders streamed assistant markdown, styled with the portfolio tokens. */
export function Response({ children }: { children: string }) {
  return (
    <div className="response">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (props) => {
            // Footnote refs/backrefs are same-page fragment links (#…); they
            // must stay in-document so they scroll instead of opening a new tab.
            const isExternal = /^https?:\/\//.test(props.href ?? '')
            return (
              <a
                href={props.href}
                {...(isExternal
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
                {props.children}
              </a>
            )
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
