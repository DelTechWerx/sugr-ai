import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Shield, 
  Cpu, 
  Cloud, 
  Zap, 
  ArrowRight, 
  Layers, 
  Globe, 
  BarChart3, 
  Lock,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ item, onClick, className }: { item: string, onClick?: () => void, className?: string, key?: string }) => {
    const href = `#${item.toLowerCase()}`;
    const baseClass = className || "text-sm font-semibold text-white/50 hover:text-white transition-colors tracking-wide";
    
    if (isHome) {
      return (
        <a 
          href={href} 
          className={baseClass}
          onClick={onClick}
        >
          {item}
        </a>
      );
    }
    return (
      <Link 
        to={`/${href}`}
        className={baseClass}
        onClick={onClick}
      >
        {item}
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Dynamic Frontier Group" className="h-10 w-auto" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }} />
            <div className="hidden flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center">
                <Layers className="text-black w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Dynamic<span className="text-brand-green">Frontier</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {['Solutions', 'Technology', 'Vision', 'Partnership'].map((item) => (
              <NavLink key={item} item={item} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://calendly.com/dynamicfrontiergroup-info/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-sm"
            >
              Request Demo
            </a>
            <a 
              href="https://calendly.com/dynamicfrontiergroup-info/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-green text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-brand-green/90 transition-all duration-300 glow-green"
            >
              Sign Up
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden"
        >
          <div className="glass rounded-2xl p-6 flex flex-col gap-4">
            {['Solutions', 'Technology', 'Vision', 'Partnership'].map((item) => (
              <NavLink 
                key={item} 
                item={item} 
                className="text-lg font-medium text-white/70"
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
            <button className="btn-primary w-full py-3 rounded-xl font-bold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["banking", "finance", "retail", "corporate"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 70 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold leading-[0.9] mb-12 tracking-tighter text-white">
            The future <br />
            of <span className="text-brand-green relative inline-block min-w-[3ch] text-left">
              {text}
              <span className="absolute right-[-0.05em] top-0 bottom-0 w-[4px] md:w-[8px] bg-brand-green animate-pulse" />
            </span> is <br />
            <span className="flex items-center justify-center gap-4">
              <span className="inline-flex items-center justify-center w-16 h-16 md:w-28 md:h-28 rounded-full border border-brand-green/20">
                <Shield className="text-brand-green w-8 h-8 md:w-14 md:h-14" />
              </span>
              <span className="text-white">human +</span>
              <span className="inline-flex items-center justify-center w-16 h-16 md:w-28 md:h-28">
                <Zap className="text-brand-green w-10 h-10 md:w-20 md:h-20 animate-pulse" />
              </span>
              <span className="text-white">AI</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-14 max-w-2xl mx-auto font-medium">
            We help institutions chart their digital frontier, brave their daily challenges, and navigate the evolution of business, 
            and close the divide and globally compete in this new AI-driven world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://calendly.com/dynamicfrontiergroup-info/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-lg"
            >
              Join The Community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Clients = () => {
  const clients = [
    { name: "ScallopX", domain: "scallopx.com", logo: "scallopx.png" },
    { name: "Mynt", domain: "mynt.xyz", logo: "mynt.png" },
    { name: "PBCom", domain: "pbcom.com.ph", logo: "pbcom.png" },
    { name: "Home Credit", domain: "homecredit.ph", logo: "homecredit.png" },
    { name: "UnionBank", domain: "unionbankph.com", logo: "unionbank.png" },
    { name: "GCash", domain: "gcash.com", logo: "gcash.png" },
    { name: "Maya", domain: "maya.ph", logo: "maya.png" },
    { name: "BDO", domain: "bdo.com.ph", logo: "bdo.png" },
    { name: "Metrobank", domain: "metrobank.com.ph", logo: "metrobank.png" }
  ];

  return (
    <section className="py-20 border-y border-white/5 overflow-hidden relative bg-brand-dark">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-sm font-medium text-white/30">
          Empowering the next generation of financial leaders
        </p>
      </div>
      
      <div className="flex relative overflow-hidden bg-white/[0.30] backdrop-blur-sm py-8 border-y border-white/5">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-20 items-center whitespace-nowrap px-6"
        >
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex items-center gap-4 transition-all duration-500 cursor-default group">
              <div className="w-10 h-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <img 
                  src={`/asset/customer/${client.logo}`} 
                  alt={client.name}
                  title={client.name}
                  className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter brightness-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to Clearbit if local file is missing
                    (e.target as HTMLImageElement).src = `https://logo.clearbit.com/${client.domain}`;
                    (e.target as HTMLImageElement).onerror = () => {
                      // Final fallback to initials
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${client.name}&background=0D1117&color=00FF9D`;
                    };
                  }}
                />
              </div>
              <span className="text-white/20 text-xs font-bold tracking-[0.2em] uppercase group-hover:text-brand-green/60 transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark/50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark/50 to-transparent z-10" />
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="glass p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group cursor-default"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
      <Icon className="text-brand-green w-7 h-7" />
    </div>
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-white/40 leading-relaxed text-sm font-medium">
      {description}
    </p>
    <div className="mt-10 flex items-center gap-2 text-brand-green font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Learn More <ChevronRight className="w-4 h-4" />
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "White-Label Banking",
      description: "Comprehensive digital banking platforms ready for deployment. Scalable, secure, and fully customizable to your brand's identity.",
      delay: 0.1
    },
    {
      icon: Cpu,
      title: "AI Automation",
      description: "Intelligent systems that streamline complex financial workflows, reduce operational risk, and enhance decision-making through data.",
      delay: 0.2
    },
    {
      icon: Cloud,
      title: "Cloud-Native Engineering",
      description: "Resilient, high-performance infrastructure built for the modern era. We leverage microservices to ensure infinite scalability.",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Legacy Modernization",
      description: "Seamlessly transitioning traditional financial systems into the digital age without disrupting core operations or security.",
      delay: 0.4
    }
  ];

  return (
    <section id="solutions" className="py-32 relative scroll-mt-20">
      <div id="technology" className="absolute -top-20 scroll-mt-20" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Innovative Solutions for a <span className="text-brand-green">Fluid Economy</span></h2>
          <p className="text-white/40 text-lg font-medium">
            We bridge the gap between complex legacy systems and the futuristic demands of digital-first banking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-green/10 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.95] tracking-tighter">
                The <span className="text-brand-green">Transparent</span> <br /> Frontier
              </h2>
              <p className="text-lg text-white/40 mb-10 leading-relaxed font-medium">
                We believe that the future of finance lies in transparency and elegance. 
                Our engineering philosophy is centered on creating "glass systems"—where 
                complexity is visible but managed, and every transaction flows with 
                unprecedented clarity.
              </p>
              <div className="space-y-8">
                {[
                  { t: "Futuristic Trust", d: "Building systems that earn confidence through performance." },
                  { t: "Weightless Interaction", d: "Interfaces that feel natural and responsive to human intent." },
                  { t: "Intelligent Harmony", d: "AI and human expertise working together seamlessly." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white/90 tracking-tight">{item.t}</h4>
                      <p className="text-sm text-white/30 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square glass rounded-[2.5rem] flex items-center justify-center p-12 relative overflow-hidden group">
                {/* Animated Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-green/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Futuristic Data Visualization Graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-brand-green"
                      initial={{ pathLength: 0, rotate: 0 }}
                      animate={{ pathLength: 1, rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                      className="text-white"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <motion.line
                        key={i}
                        x1="100"
                        y1="100"
                        x2={100 + 90 * Math.cos((angle * Math.PI) / 180)}
                        y2={100 + 90 * Math.sin((angle * Math.PI) / 180)}
                        stroke="currentColor"
                        strokeWidth="0.2"
                        className="text-brand-green/30"
                      />
                    ))}
                  </svg>
                </div>

                {/* Central Stat with Pulse Effect */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="text-8xl font-bold mb-2 tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                      99.9<span className="text-brand-green">%</span>
                    </div>
                    <div className="absolute -inset-4 bg-brand-green/10 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                    System Reliability <span className="text-brand-green ml-1">Live</span>
                  </div>
                </div>

                {/* Floating Data Nodes */}
                {[
                  { top: '15%', left: '20%', label: 'SEC' },
                  { top: '20%', right: '15%', label: 'AI' },
                  { bottom: '20%', left: '15%', label: 'OPS' },
                  { bottom: '15%', right: '20%', label: 'NET' }
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom }}
                    animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute flex flex-col items-center gap-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_8px_#00FF9D]" />
                    <span className="text-[8px] font-bold text-white/20 tracking-widest">{node.label}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -bottom-20 -left-10 w-64 h-64 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="partnership" className="py-40 relative scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter leading-[0.95]">Ready to Step into <br />the <span className="text-brand-green">Future?</span></h2>
          <p className="text-xl text-white/40 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the elite financial institutions transforming their digital landscape with Dynamic Frontier. 
            Let's build something luminous together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://calendly.com/dynamicfrontiergroup-info/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-10 py-5 text-lg"
            >
              Start Your Transformation
            </a>
            <a 
              href="https://calendly.com/dynamicfrontiergroup-info/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary px-10 py-5 text-lg"
            >
              Schedule a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Dynamic Frontier Group" className="h-8 w-auto" onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }} />
              <div className="hidden flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-brand-purple to-brand-green rounded flex items-center justify-center">
                  <Layers className="text-white w-4 h-4" />
                </div>
                <span className="font-display font-bold text-lg tracking-tight">
                  Dynamic<span className="text-brand-purple">Frontier</span>
                </span>
              </div>
            </Link>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="mailto:info@dynamicfrontiergroup.com" className="hover:text-white transition-colors">info@dynamicfrontiergroup.com</a>
          </div>
          
          <div className="text-sm text-white/20">
            © 2026 Dynamic Frontier Solutions Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Vision />
      <CTA />
    </>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-green origin-left z-[100] shadow-[0_0_10px_rgba(0,255,157,0.5)]"
          style={{ scaleX }}
        />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Global Background Noise/Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </Router>
  );
}

