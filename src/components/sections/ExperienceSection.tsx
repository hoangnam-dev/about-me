import { motion } from "framer-motion"
import { experience } from "@/data/experience"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <div className="relative w-full max-w-3xl mt-8 flex flex-col items-center">
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="flex flex-col gap-8 w-full">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full flex flex-col md:flex-row items-center justify-between ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-5/12 hidden md:block" />
                  
                  {/* Timeline Dot */}
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shadow-sm hidden md:flex">
                    <span className="w-3 h-3 bg-background rounded-full" />
                  </div>
                  
                  <div className="w-full md:w-5/12">
                    <Card className="text-left w-full hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-primary font-medium">{exp.company} • {exp.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
