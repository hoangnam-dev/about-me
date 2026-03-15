import { motion } from "framer-motion"
import { personalInfo } from "@/data/personalInfo"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">Get in Touch</h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`mailto:${personalInfo.email}`}>
              <Button size="lg" className="h-12 px-8 gap-2">
                <Mail size={18} /> Say Hello
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
