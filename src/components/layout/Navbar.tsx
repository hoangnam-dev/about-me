import { Link } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"
import { FileDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
        <div className="mr-8 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">John Doe</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="transition-colors hover:text-foreground/80 text-foreground/60">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Nav Toggle */}
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <div className="flex items-center md:hidden">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl tracking-tight">JD.</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <a href="/resume.pdf" download>
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                <FileDown size={16} /> Resume
              </Button>
            </a>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background"
          >
            <nav className="flex flex-col space-y-4 p-4 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path} 
                  className="font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="/resume.pdf" download onClick={() => setIsOpen(false)}>
                <Button className="w-full gap-2">
                  <FileDown size={16} /> Download Resume
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
