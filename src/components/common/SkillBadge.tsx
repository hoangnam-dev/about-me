import { Badge } from "@/components/ui/badge"

export function SkillBadge({ skill }: { skill: string }) {
  return (
    <Badge variant="outline" className="px-3 py-1 text-sm font-medium hover:bg-secondary transition-colors cursor-default">
      {skill}
    </Badge>
  )
}
