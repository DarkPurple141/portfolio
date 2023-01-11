type AvatarProps = {
  src?: string
}

export function Avatar({ src }: AvatarProps) {
  return (
    <div className="min-w-[192px] w-48 h-48 bg-brand rounded-full overflow-hidden">
      <img
        className="max-w-none"
        src={src}
        alt="photo of Alex Hinds"
        width={240}
        height={240}
      />
    </div>
  )
}
