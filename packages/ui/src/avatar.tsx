type AvatarProps = {
  src?: string
  size?: '48' | '24'
}

export function Avatar({ src }: AvatarProps) {
  return (
    <div
      className={`min-w-36 w-36 h-36 max-md:w-100% bg-brand overflow-hidden pointer-events-none`}
    >
      <img className="max-w-[120%]" src={src} alt="photo of Alex Hinds" />
    </div>
  )
}
