import { motion } from 'motion/react';
import { Shield, Zap, Cpu, Globe, Linkedin } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Daniel Alberto",
      role: "Founder & Managing Director",
      bio: "A visionary leader in the fintech space, Dan has dedicated his career to bridging the gap between traditional banking and the digital frontier. With a deep understanding of market evolution, he steers Dynamic Frontier's strategic mission to empower financial institutions with human-centric AI.",
      linkedin: "https://www.linkedin.com/in/danfrancisalberto/",
      image: "./asset/customer/danny.jpg"
    },
    {
      name: "Del Feliciano Arabiana",
      role: "Co-Founder and Engineering Director",
      bio: "The technical architect behind Dynamic Frontier's luminous solutions. Del brings extensive expertise in engineering complex financial systems and AI integration. His focus on technical excellence and scalable architecture ensures that our partners stay ahead in an ever-evolving technological landscape.",
      linkedin: "https://www.linkedin.com/in/darabiana/",
      image: "./asset/customer/darabiana.jpg"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
            Mapping the <span className="text-brand-green">Digital Frontier</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
            Dynamic Frontier Solutions Group is a specialized a Tech-Enablement Service Provider, AI & Automation Consultancy and Solutions Engineering firm dedicated to helping organizations navigate the complexities of the AI-driven world. We believe the future of industries will be a luminous blend of human intuition and artificial intelligence.
          </p>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="bg-white/[0.02] py-32 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Visionaries</h2>
            <p className="text-white/40 text-lg">The leaders driving the evolution of fintech.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-brand-green/30 p-1">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 bg-brand-green text-black p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-brand-green font-medium mb-4">{founder.role}</p>
                  <p className="text-white/50 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="container mx-auto px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Pioneering AI Banking Solutions</h2>
          <p className="text-white/40 leading-relaxed italic">
            As a leading fintech consultancy, Dynamic Frontier specializes in digital transformation, AI integration for banking, and strategic fintech advisory. Our mission is to close the gap between legacy systems and the future of finance, ensuring security, scalability, and human-centric innovation in every solution we deliver.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
