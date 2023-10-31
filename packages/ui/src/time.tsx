export function Time({ raw, formatted }: { raw: string; formatted: string }) {
  return (
    <time className="text-sm text-subtlest" dateTime={raw}>
      {formatted}
    </time>
  )
}
