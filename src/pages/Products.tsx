import { motion } from 'motion/react';
import { Shield, Zap, Cpu, Globe, BarChart3, Lock } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Cpu className="text-brand-green" />,
      title: "AI Core Integration",
      description: "Seamlessly integrate advanced AI models into your existing banking infrastructure to automate complex workflows and enhance decision-making."
    },
    {
      icon: <Shield className="text-brand-green" />,
      title: "Luminous Security",
      description: "Next-generation security protocols that use predictive analytics to identify and neutralize threats before they impact your operations."
    },
    {
      icon: <BarChart3 className="text-brand-green" />,
      title: "Fintech Analytics",
      description: "Deep-dive data visualization and predictive modeling to track market evolution and identify growth opportunities in real-time."
    },
    {
      icon: <Globe className="text-brand-green" />,
      title: "Digital Frontier Gateway",
      description: "A unified platform for managing cross-border transactions and multi-currency digital assets with institutional-grade compliance."
    },
    {
      icon: <Lock className="text-brand-green" />,
      title: "Quantum-Safe Vaults",
      description: "Future-proof encryption and storage solutions designed to protect sensitive financial data against the next generation of cyber threats."
    },
    {
      icon: <Zap className="text-brand-green" />,
      title: "High-Velocity Ops",
      description: "Optimize your internal processes with automated operational intelligence, reducing latency and increasing throughput across all departments."
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
            Luminous <span className="text-brand-green">Solutions</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
            Our suite of products is designed to transform financial institutions into agile, AI-driven leaders. We provide the tools to map, track, and conquer the digital frontier.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-brand-green/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <p className="text-white/40 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Section */}
      <section className="bg-white/[0.02] py-32 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Innovative Fintech Products for Modern Banking</h2>
            <p className="text-white/40 leading-relaxed">
              Explore our range of AI-powered financial technology products. From secure core integration to advanced predictive analytics, Dynamic Frontier provides the essential infrastructure for digital banking transformation. Our solutions are built for scalability, security, and superior user experience, helping banks and fintechs thrive in the modern digital economy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
