import { motion } from "framer-motion"
import { skills } from "@/data/skills"
import { SkillBadge } from "@/components/common/SkillBadge"

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-center gap-4 max-w-[800px] mt-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SkillBadge skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
