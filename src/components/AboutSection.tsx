const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm a Computer Science student with a passion for creating 
              digital solutions that blend functionality with great user experience. 
              My journey in tech started when I first wrote my "Hello World" program, 
              and I've been hooked ever since.
            </p>
            <p>
              Currently, I'm focused on expanding my skills in full-stack development, 
              working with modern technologies and frameworks. I love tackling challenging 
              problems and turning ideas into reality through code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or working on personal projects 
              that push my boundaries.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-card rounded-lg border border-border overflow-hidden card-hover">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-primary rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
