type IconProps = {
  size?: ''
  src?: string
  alt: string
}

export function Icon({ src, alt }: IconProps) {
  return <img className="block w-5 h-5" src={src} alt={alt} />
}
