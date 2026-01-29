const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Xavier, a junior Computer Science student at Central Connecticut 
              State University with a Software Engineering concentration, expecting to 
              graduate in Spring 2027. My journey in tech started with curiosity about 
              how software works, and I've been building ever since.
            </p>
            <p>
              I'm currently focused on expanding my full-stack development skills, 
              working with technologies like React, Node.js, Java, and Python. I enjoy 
              tackling challenging problems and turning ideas into functional applications 
              that make a real impact.
            </p>
            <p>
              Outside of coding, I'm passionate about fitness and personal growth. 
              I'm actively involved with ColorStack and the National Society of Black 
              Engineers (NSBE), where I connect with other professionals and expand 
              my network in the tech industry.
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
