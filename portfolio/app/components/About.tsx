'use client';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold gradient-text mb-8">About Me</h2>
        <div className="prose prose-lg mx-auto text-text">
          <p className="mb-6">
            I'm a Computer Science student at the University of Maryland, passionate about building innovative software solutions. 
            My focus areas include full-stack development, cloud computing, and AI/ML applications.
          </p>
          <p className="mb-6">
            Currently, I'm working on several projects that combine modern web technologies with AI capabilities, 
            aiming to create impactful solutions that solve real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or participating in hackathons to expand my skills and network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 