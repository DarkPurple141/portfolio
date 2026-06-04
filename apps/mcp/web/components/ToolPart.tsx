import { useState } from 'react'

/**
 * Renders a single tool invocation from an assistant message.
 *
 * AI SDK surfaces typed tool calls as message parts named `tool-<name>` (and
 * `dynamic-tool` for runtime-named tools), each carrying a `state` that moves
 * input-streaming → input-available → output-available | output-error.
 */
export interface ToolUIPart {
  type: string
  toolName?: string
  state?: string
  input?: unknown
  output?: unknown
  errorText?: string
}

const LABELS: Record<string, string> = {
  get_resume: 'résumé',
  get_jobs: 'work experience',
  get_qualifications: 'education',
  get_skills: 'skills',
  get_posts: 'writing',
  get_post: 'article',
  get_user: 'profile',
}

function toolNameOf(part: ToolUIPart): string {
  if (part.type === 'dynamic-tool') return part.toolName ?? 'tool'
  return part.type.replace(/^tool-/, '')
}

export function ToolPart({ part }: { part: ToolUIPart }) {
  const [open, setOpen] = useState(false)

  const name = toolNameOf(part)
  const label = LABELS[name] ?? name
  const done =
    part.state === 'output-available' || part.state === 'output-error'
  const errored = part.state === 'output-error'

  const details =
    part.output !== undefined
      ? part.output
      : part.input !== undefined
        ? part.input
        : undefined
  const hasDetails = done && details !== undefined

  return (
    <div className="tool">
      <button
        type="button"
        className={`tool-header${hasDetails ? '' : ' is-static'}`}
        onClick={hasDetails ? () => setOpen((v) => !v) : undefined}
        aria-expanded={hasDetails ? open : undefined}
      >
        <span className="tool-icon">{errored ? '⚠' : '⌗'}</span>
        <span className="tool-label">
          {errored ? (
            <>
              Couldn&rsquo;t read <b>{label}</b>
            </>
          ) : done ? (
            <>
              Read <b>{label}</b>
            </>
          ) : (
            <>
              Looking up <b>{label}</b>&hellip;
            </>
          )}
        </span>
        {!done && <span className="spinner" aria-hidden="true" />}
        {hasDetails && (
          <span className={`tool-chevron${open ? ' open' : ''}`}>&rsaquo;</span>
        )}
      </button>
      {hasDetails && open && (
        <div className="tool-body">
          <pre>
            {errored
              ? part.errorText
              : typeof details === 'string'
                ? details
                : JSON.stringify(details, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
