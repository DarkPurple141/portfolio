export function Time({ raw, formatted }: { raw: string; formatted: string }) {
  return (
    <time className="heading-xs text-subtlest" dateTime={raw}>
      {formatted}
    </time>
  )
}
