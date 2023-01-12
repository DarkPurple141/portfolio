type AvatarProps = {
  src?: string
  size?: '48' | '24'
}

export function Avatar({ src, size = '48' }: AvatarProps) {
  return (
    <div
      className={`min-w-[${
        Number(size) * 4
      }px] w-${size} h-${size} max-sm:w-[100vw] bg-brand sm:rounded-full overflow-hidden`}
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
