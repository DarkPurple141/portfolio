import { useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import type { UIMessage } from 'ai'
import { Logo } from './components/Logo'
import { Response } from './components/Response'
import { ToolPart, type ToolUIPart } from './components/ToolPart'

const SUGGESTIONS = [
  'Who is Al and what does he do?',
  'Walk me through his work experience',
  "What's his technical stack?",
  'What has he been writing about?',
]

function textOf(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('')
}

function isToolPart(part: { type: string }): part is ToolUIPart {
  return part.type.startsWith('tool-') || part.type === 'dynamic-tool'
}

export function App() {
  const { messages, sendMessage, status, error, stop, regenerate } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isBusy = status === 'submitted' || status === 'streaming'
  const hasMessages = messages.length > 0

  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, status])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isBusy) return
    sendMessage({ text: trimmed })
  }

  return (
    <>
      <header className="app-header">
        <div className="app-brand">
          <Logo />
          <div>
            <div className="app-title">Al Hinds</div>
            <div className="app-subtitle">
              <span className="status-dot" aria-hidden="true" />
              Portfolio assistant
            </div>
          </div>
        </div>
        <a className="app-docs-link" href="/docs">
          MCP&nbsp;server
        </a>
      </header>

      <div className="conversation" ref={scrollRef}>
        {hasMessages ? (
          <div className="conversation-inner">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message message-${message.role}`}
              >
                {message.role === 'user' ? (
                  <div className="bubble">{textOf(message)}</div>
                ) : (
                  message.parts.map((part, i) => {
                    if (part.type === 'text') {
                      return <Response key={i}>{part.text}</Response>
                    }
                    if (isToolPart(part)) {
                      return <ToolPart key={i} part={part as ToolUIPart} />
                    }
                    return null
                  })
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="hero">
            <Logo />
            <h1>Ask me about Al</h1>
            <p>
              I&rsquo;m Al Hinds&rsquo; portfolio assistant. Ask about his work
              experience, the things he&rsquo;s built and written, his
              education, or his technical skills.
            </p>
            <div className="suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="suggestion"
                  onClick={() => send(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <Composer
        isBusy={isBusy}
        error={!!error}
        onSend={send}
        onStop={stop}
        onRetry={() => regenerate()}
      />
    </>
  )
}

function Composer({
  isBusy,
  error,
  onSend,
  onStop,
  onRetry,
}: {
  isBusy: boolean
  error: boolean
  onSend: (text: string) => void
  onStop: () => void
  onRetry: () => void
}) {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function autoGrow() {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  function submit() {
    if (!value.trim() || isBusy) return
    onSend(value)
    setValue('')
    requestAnimationFrame(() => {
      if (textareaRef.current) textareaRef.current.style.height = 'auto'
    })
  }

  return (
    <div className="composer">
      <form
        className="composer-inner"
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <textarea
          ref={textareaRef}
          value={value}
          rows={1}
          placeholder="Ask about Al's experience, projects, or skills…"
          onChange={(e) => {
            setValue(e.target.value)
            autoGrow()
          }}
          onKeyDown={(e) => {
            if (
              e.key === 'Enter' &&
              !e.shiftKey &&
              !e.nativeEvent.isComposing
            ) {
              e.preventDefault()
              submit()
            }
          }}
        />
        {isBusy ? (
          <button
            type="button"
            className="send-btn"
            onClick={onStop}
            aria-label="Stop"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="7" y="7" width="10" height="10" rx="1.5" />
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            className="send-btn"
            disabled={!value.trim()}
            aria-label="Send"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        )}
      </form>
      <p className="composer-hint">
        {error ? (
          <span className="composer-error">
            Something went wrong.{' '}
            <button type="button" onClick={onRetry}>
              Try again
            </button>
          </span>
        ) : (
          <>Grounded in Al&rsquo;s real portfolio data via MCP tools.</>
        )}
      </p>
    </div>
  )
}
