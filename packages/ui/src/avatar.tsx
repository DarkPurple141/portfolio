type AvatarProps = {
  src?: string
  size?: '48' | '24'
}

export function Avatar({ src }: AvatarProps) {
  return (
    <div
      className={`min-w-[192px] w-48 h-48 max-sm:w-[100vw] bg-brand sm:rounded-full overflow-hidden pointer-events-none`}
    >
      <img
        className="max-w-[150%]"
        src={src}
        alt="photo of Alex Hinds"
        width={240}
        height={240}
      />
    </div>
  )
}
