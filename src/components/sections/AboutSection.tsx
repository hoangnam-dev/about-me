import { motion } from "framer-motion"
import { personalInfo } from "@/data/personalInfo"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
          </div>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mt-8 text-left md:text-center">
            Hello! I am {personalInfo.name}, a passionate {personalInfo.role} dedicated to creating beautiful and functional user experiences. 
            With a strong foundation in modern web technologies, I love transforming complex problems into elegant, intuitive interfaces.
            When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
