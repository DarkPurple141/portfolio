export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border p-8 text-center body-sm">
      <p className="text-subtlest">Designed in Figma. Made in Sydney 🇦🇺</p>
      <p className="copyright mt-1 text-subtlest">
        © {new Date().getFullYear()} Alex Hinds
      </p>
    </footer>
  )
}
