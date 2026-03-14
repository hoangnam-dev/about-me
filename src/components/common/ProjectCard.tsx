import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

type ProjectCardProps = {
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    demoLink?: string
    githubLink?: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md h-full">
      <div className="w-full aspect-video overflow-hidden border-b bg-muted relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400';
          }}
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1">
            <Button className="w-full gap-2">
              <ExternalLink size={16} /> Demo
            </Button>
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1">
            <Button variant="outline" className="w-full gap-2">
              <Github size={16} /> Code
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
