import { motion } from "framer-motion"
import { personalInfo } from "@/data/personalInfo"
import { SocialLinks } from "@/components/common/SocialLinks"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-24 md:py-32 lg:py-40 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {personalInfo.role}
            </p>
            <p className="mx-auto max-w-[600px] text-lg mt-4">
              {personalInfo.bio}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#projects">
              <Button size="lg" className="gap-2 rounded-full px-8">
                View My Work <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Contact Me
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8"
          >
            <SocialLinks links={personalInfo.socialLinks} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
