import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

type SocialLinksProps = {
  links: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-4 items-center">
      {links.github && (
        <a href={links.github} target="_blank" rel="noreferrer">
          <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground rounded-full">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Button>
        </a>
      )}
      {links.linkedin && (
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground rounded-full">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </a>
      )}
      {links.twitter && (
        <a href={links.twitter} target="_blank" rel="noreferrer">
          <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground rounded-full">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Button>
        </a>
      )}
    </div>
  )
}
