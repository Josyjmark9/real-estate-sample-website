import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { 
  Map, Home, Building, ClipboardList, ArrowRight, Instagram, Linkedin, Facebook, 
  Phone, Mail, Menu, ChevronLeft, ChevronRight, Star, Check,
  Briefcase, GraduationCap, User, Lightbulb, Shield, Award, Clock, Compass, Globe, Users, MessageSquare, Heart,
  ArrowDown, Bed, Bath, Grid, Layers, MessageCircle, X, Send
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { HeroVideoCanvas } from './components/HeroVideoCanvas';
import { Logo } from './components/Logo';

const teamMembers = [
  {
    name: "Graham Updegrove",
    role: "Managing Broker",
    license: "Lic 01873454",
    email: "Graham@redsrealestatebroker.com",
    phone: "805.459.1865",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
    interests: [
      { icon: Compass, label: "Outdoors", color: "text-emerald-500", bg: "bg-emerald-100" },
      { icon: Map, label: "Hiking", color: "text-blue-500", bg: "bg-blue-100" },
      { icon: Globe, label: "Travel", color: "text-indigo-500", bg: "bg-indigo-100" }
    ],
    cards: [
      {
        title: "Professional Experience",
        icon: Briefcase,
        iconColor: "text-indigo-500",
        fullWidth: true,
        content: "Graham Updegrove started his real estate career in 2007 working for Sunrise Mortgage & Investment Company, a commercial mortgage banking company that secured financing for retail, office, industrial, multi-family and special use developments. He functioned primarily as a loan-servicing correspondent and was responsible for servicing a loan portfolio of over $750 million of real estate across the country.\n\nIn 2009, Graham earned his Broker’s License and a few years after turned his efforts toward the residential sales market in San Luis Obispo County focusing on buyer/seller representation, investments and foreclosures. His success has been attributed to hard work, dedication and providing local, honest expertise to his clients. This dedication has led him to being one of the most active and knowledgeable Realtors in the area, having successfully closed over 250 sale transactions in the last ten years. Graham has been involved with the San Luis Obispo Association of Realtors in numerous ways and was recognized as the 2015 Realtor of the Year. He then served as the 2018 President and is currently a member of the Association's Local Government Relations Committee. His commitment to professionalism has helped develop strong relationships with local service providers in the real estate industry and he looks forward to helping clients with their real estate needs."
      },
      {
        title: "Education",
        icon: GraduationCap,
        iconColor: "text-blue-500",
        content: "Graham graduated from the University of California, Santa Barbara in 2007, with a Bachelors Degree focusing on Business Economics and International Relations. He regularly attends California Association of Realtor conferences, trainings and workshops to stay informed of the most recent laws, regulations and technology that help him better serve his clients."
      },
      {
        title: "Personal",
        icon: User,
        iconColor: "text-emerald-500",
        content: "Graham was born and raised in San Luis Obispo and has a passion for real estate / architecture. He currently resides near downtown San Luis Obispo and thoroughly enjoys the outdoors. He can often be found exploring local hiking trails, camping with his family or hitting the slopes during the winter. Graham volunteered with Habitat for Humanity of SLO County on their Community Development Committee (2012-2017) and served as the 2017 President of the Central Coast Realtors Charitable Foundation, spearheading a $50,000 \"Agents for Change\" capital campaign to benefit the homeless services center at 40 Prado. Graham is a member of the San Luis Obispo Chamber of Commerce and joined many other respected business leaders participating in Leadership SLO Class XXV."
      }
    ]
  },
  {
    name: "Steve Hopkins",
    role: "Founding Broker",
    license: "Lic 01721304",
    email: "Steve@redsrealestatebroker.com",
    phone: "805.458.5506",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    interests: [
      { icon: Users, label: "Community", color: "text-amber-500", bg: "bg-amber-100" },
      { icon: Home, label: "Real Estate", color: "text-rose-500", bg: "bg-rose-100" },
      { icon: MessageSquare, label: "Consulting", color: "text-cyan-500", bg: "bg-cyan-100" }
    ],
    cards: [
      {
        title: "My Philosophy",
        icon: Lightbulb,
        iconColor: "text-amber-500",
        content: "To me, real estate is about relationships. It’s about caring enough to discover what is truly important to a client and using that knowledge to find the home that best embodies those particular values. I get a real sense of accomplishment from doing my homework, asking the right questions, and listening carefully to each client’s answers so that together, we can make the most well-informed, advantageous, and confident decisions."
      },
      {
        title: "My Principles",
        icon: Shield,
        iconColor: "text-emerald-500",
        content: "My principles are deeply rooted in a community that has given me so much. Above all else, I value persistence, enthusiasm, and integrity. These are principles that I infuse into my business practices not just through the transaction process, but in my role as a resource to clients long after they've moved in."
      },
      {
        title: "My Experience",
        icon: Award,
        iconColor: "text-indigo-500",
        content: "Having negotiated everything from small contracts to million dollar deals, my portfolio speaks to the insights I’ve gained along the way. In addition to helping hundreds of families and individuals successfully buy or sell their Central Coast homes, I leverage my past experience on the Architectural Review Commission to give me an edge when faced with obscure details that can prolong or threaten a deal."
      },
      {
        title: "My Background",
        icon: Clock,
        iconColor: "text-blue-500",
        content: "Prior to being a real estate broker, I worked for over 20 years in management, operations, and consulting. From earning my MBA and working in a large Atlanta medical center as the Director of Cardiopulmonary Services, to acting as the Senior Director of Business Development for a leading rehabilitation program in St. Louis – I’ve developed a broad skill set that helps me identify needs, find creative solutions, and negotiate complicated contracts."
      }
    ]
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    quote: "REDS made buying our first home an absolute breeze. Their attention to detail and market knowledge is unmatched."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    quote: "I've worked with many agencies, but the level of professionalism and strategy here is on another level. Highly recommended for serious investors."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Seller",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    quote: "They managed the sale of my property perfectly. The marketing was stunning, and we closed above asking price in record time."
  },
  {
    id: 4,
    name: "David Smith",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    quote: "Such a warm, consultative approach. I never felt pressured, and they found exactly what I was looking for. An amazing experience."
  },
  {
    id: 5,
    name: "Jessica Taylor",
    role: "Relocating Professional",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200",
    quote: "Moving across the country was stressful, but finding a home wasn't, thanks to their incredible team and local expertise."
  }
];

const getOffset = (index: number, activeIndex: number, total: number) => {
  let offset = (index - activeIndex) % total;
  if (offset > Math.floor(total / 2)) offset -= total;
  if (offset < -Math.floor(total / 2)) offset += total;
  return offset;
};

const buyerRepresentation = [
  "14555 San Miguel, Atascadero", "21892 J Street, Santa Margarita", "421 Woodland Drive, Arroyo Grande", 
  "1885 Huasna Drive, San Luis Obispo", "2708 Augusta Street, San Luis Obispo", "936 Saint Ann Drive, Paso Robles", 
  "2045 Skylark Lane, San Luis Obispo", "354 Woodbridge Street, San Luis Obispo", "237 Via San Blas, San Luis Obispo", 
  "1540 Via Vista, Nipomo", "1138 Samantha Drive, Paso Robles", "1351 Royal Way #32, San Luis Obispo", 
  "2865 Ironwood Avenue, Morro Bay", "2696 Cottontail Lane, Los Osos", "Noveno Lot 47, San Luis Obispo", 
  "Noveno Lot 55, San Luis Obispo", "204 Daly Avenue, San Luis Obispo", "550 Spanish Springs Drive, San Luis Obispo", 
  "1351 Royal Way #26, San Luis Obispo", "8823 Arcade Rd, Atascadero", "4616 Snapdragon Way, San Luis Obispo", 
  "110 Coral Court, Pismo Beach", "227 Bridge Street, San Luis Obispo", "856 Marsala Drive, Grover Beach", 
  "227 Bridge Street, San Luis Obispo", "71 Benton Way, San Luis Obispo", "2138 Beebee Street, San Luis Obispo", 
  "210 Branch Street, San Luis Obispo", "645 Morro Avenue #2A, Morro Bay", "1256 Galleon Way #3, San Luis Obispo", 
  "55 Stenner Street #A, San Luis Obispo", "3995 Amargon Road, Atascadero", "879 Mirada Drive, San Luis Obispo", 
  "1405 Slack Street, San Luis Obispo", "1041 Bishop Street, San Luis Obispo", "714 Shannon Hill Drive, Paso Robles", 
  "808 Plata Road, Arroyo Grande", "1655 14th Street, Los Osos", "645 Morro Ave #3D, Morro Bay", 
  "4048 Hillside Drive, San Luis Obispo", "299 Canyon Way, Arroyo Grande", "335 Branch Street, San Luis Obispo", 
  "924 Inverness Drive, Paso Robles", "153 Tango Way, San Luis Obispo", "531 Lemoore Ave, Pismo Beach", 
  "3921 Carissa Ct, San Luis Obispo", "1797 Spooner Drive, San Luis Obispo", "2797 Flora Street, San Luis Obispo", 
  "3190 Violet Street, San Luis Obispo", "3960 S. Higuera #105, San Luis Obispo", "1056 Bay Oaks Drive, Los Osos", 
  "16 Flag Way, Paso Robles", "1327 Tanglewood Drive, San Luis Obispo", "279 Branch Street, San Luis Obispo", 
  "132 Quail Way, Avila Beach"
];

const sellerRepresentation = [
  "3175 Calle Malva, San Luis Obispo", "0 Lyle Lane, Paso Robles", "121 Countryside Lane, San Luis Obispo", 
  "3076 Lucca Lane, San Luis Obispo", "1667 Quail Drive, San Luis Obispo", "1607 Lima Drive, San Luis Obispo", 
  "3592 Broad Street #204, San Luis Obispo", "3195 Lirio Ct, San Luis Obispo", "534 Playa Circle, Paso Robles", 
  "680 Chorro Street #13, San Luis Obispo", "2221 King Ct #22, San Luis Obispo", "943 Humbert Avenue, San Luis Obispo", 
  "1350 16th Street, Oceano", "2221 King Ct #20, San Luis Obispo", "1397 Ironbark Street, San Luis Obispo", 
  "359 Highland Ave, San Luis Obispo", "528 Hathway #B, San Luis Obispo", "350 San Miguel Ave, San Luis Obispo", 
  "570 Peach Street #23, San Luis Obispo", "233 Colt Lane, Nipomo", "5155 Escarpa Avenue, Atascadero", 
  "9319 Musselman Drive, Atascadero", "3317 Oak Knoll Drive, Paso Robles", "9317 Musselman Drive, Atascadero", 
  "1033 Southwood Drive #G, San Luis Obispo", "3596 Broad Street #204, San Luis Obispo", "1225 Pismo Street, San Luis Obispo", 
  "545 Paseo Bella Montana, San Luis Obispo", "1302 Miraleste Dr, San Luis Obispo", "3 Los Palos Drive, San Luis Obispo", 
  "126 Jeffrey Drive, San Luis Obispo", "1873 10th Street, Los Osos", "244 Scarlett Circle, Nipomo", 
  "781 Highland Way, Grover Beach", "2230 Exposition Dr #28, San Luis Obispo", "66 Contenta Ct, San Luis Obispo", 
  "164 San Jose Ct, San Luis Obispo", "235 N 3rd Street, Grover Beach", "22263 I Street, Santa Margarita", 
  "1787 Oceanaire Ct, San Luis Obispo", "5861 Tamarisk Way, San Luis Obispo", "1684/1688 Mill Street, San Luis Obispo", 
  "2220 Exposition Drive #77, San Luis Obispo", "1238 Coral Street, San Luis Obispo", "1190 Buchon Street, San Luis Obispo", 
  "1194 Ella Street, San Luis Obispo", "141 Newport Avenue, Grover Beach", "1860 San Luis Ranch Drive, San Luis Obispo", 
  "1344 Mill Street, San Luis Obispo", "820 Casals Drive, Paso Robles", "1031 Southwood Drive #B, San Luis Obispo", 
  "312 Luneta Drive, San Luis Obispo", "1480 Island Ct, Oceano", "874 Bougainvillea Street, San Luis Obispo", 
  "0 Parkhill Rd, Santa Margarita"
];

const stockHouseImages = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600607687920-4e2a09c15468?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600585153280-e34d1ab5debc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509378122396-1abccab90ccf?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1510627498534-bcde60ae4d4f?auto=format&fit=crop&q=80&w=800"
];

const allListingsData = [...buyerRepresentation, ...sellerRepresentation].map((item, index) => {
  const basePrice = 500000 + ((index * 617) % 800) * 1000;
  return {
      id: index,
      address: item.split(' - Sold')[0],
      status: 'Sold',
      price: `$${(basePrice / 1000).toLocaleString()},000`,
      image: stockHouseImages[index % stockHouseImages.length],
      beds: 3 + (index % 3),
      baths: 2 + (index % 2),
      sqft: 1500 + (index * 50) % 1500
  };
});

function Navigation({ lightMode = false }: { lightMode?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 ${lightMode ? 'bg-black/20 border-white/10' : 'bg-white/80 border-slate-200/50'}`}
    >
      <nav className="max-w-7xl mx-auto w-full px-5 sm:px-6 py-4 flex items-center justify-between relative">
      <Link to="/" className="flex items-center">
        <Logo compact light={lightMode} />
      </Link>

      <div className={`hidden lg:flex items-center space-x-12 text-sm font-medium ${lightMode ? 'text-white/90' : 'text-slate-800'}`}>
        {[
          { name: 'Home', path: '/' },
          { name: 'Our Team', path: '/our-team' },
          { name: 'Listings', path: '/listings' },
          { name: 'Blog', path: '/blog' },
          { name: 'Contact Us', path: '#contact' }
        ].map((item) => (
          <Link to={item.path} key={item.name} className="relative group py-1 overflow-hidden">
            <span className={`transition-colors relative z-10 ${location.pathname === item.path ? (lightMode ? 'text-white font-semibold' : 'text-slate-950') : (lightMode ? 'hover:text-white' : 'group-hover:text-slate-950')}`}>{item.name}</span>
            <span className={`absolute bottom-0 left-0 h-[2px] ${lightMode ? 'bg-white' : 'bg-slate-800'} transition-all duration-300 ease-out ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        ))}
      </div>

      <div className="hidden lg:block">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`${lightMode ? 'bg-white text-brand-crimson hover:bg-slate-50' : 'bg-brand-crimson text-white hover:opacity-90'} text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-lg ${lightMode ? 'shadow-black/20' : 'neomorphic-glow border-b-2 border-brand-crimson/80'}`}>
          Schedule a Consultation
        </motion.button>
      </div>
      
      <button className={`lg:hidden ${lightMode ? 'text-white' : 'text-slate-800'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu (simplified) */}
      {isMenuOpen && (
        <div className="absolute top-20 left-5 right-5 bg-white p-6 rounded-2xl shadow-2xl flex flex-col gap-4 lg:hidden text-slate-800 z-50">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/our-team" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
          <Link to="/listings" onClick={() => setIsMenuOpen(false)}>Listings</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
      )}
      </nav>
    </motion.header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#384252] text-white py-16 px-6 mt-12 max-w-[96rem] mx-auto sm:rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 mb-8 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <Logo light compact className="scale-125 origin-left" />
            </div>
            <p className="text-slate-300 text-sm mt-8">Strong Values. Clear Paths. Personally There For You.</p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3 text-slate-200 text-sm">
              <Phone className="w-4 h-4" />
              <span>+1 555 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200 text-sm mb-4">
              <Mail className="w-4 h-4" />
              <span>info@redsrealestatebroker.com</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
               <a href="#" className="bg-white text-[#384252] p-1.5 rounded-full hover:bg-slate-200 transition-colors">
                 <Instagram className="w-4 h-4" />
               </a>
               <a href="#" className="bg-white text-[#384252] p-1.5 rounded-full hover:bg-slate-200 transition-colors">
                 <Linkedin className="w-4 h-4" />
               </a>
               <a href="#" className="bg-white text-[#384252] p-1.5 rounded-full hover:bg-slate-200 transition-colors">
                 <Facebook className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-slate-400 text-sm">
          <p>REDS &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.4]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 50]);

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-800 selection:bg-slate-200">
      <HeroVideoCanvas />
      
      <div id="video-scroll-container" className="relative z-10 w-full">
        {/* Navigation & Hero Section Container */}
        <div className="relative overflow-hidden min-h-[100svh] lg:min-h-[90vh] flex flex-col justify-start text-white">
          
          {/* Subtle top gradient for the nav bar */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

          {/* Navigation */}
          <Navigation lightMode={true} />

          {/* Hero Content */}
          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="max-w-7xl mx-auto w-full px-5 sm:px-6 relative z-20 flex-1 flex flex-col justify-center py-20 lg:py-32">
            <div className="max-w-xl">
              <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 sm:mb-8 leading-[1.1]">
                Your real estate partner on the <span className="text-slate-300">California Coast</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-base sm:text-xl text-slate-200 font-medium mb-8 sm:mb-10 max-w-md leading-relaxed">
                With experience, sensitivity, and a clear strategy, we bring people and properties together.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-brand-crimson hover:opacity-90 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all neomorphic-glow flex items-center gap-2 border-b-2 border-brand-crimson/80">
                  Request Valuation
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* About Us Section */}
        <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-5 sm:px-6 max-w-5xl mx-auto text-center relative z-20 text-white">
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 1, type: "spring", bounce: 0.2 }} className="bg-black/30 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
             <h2 className="text-slate-300 font-semibold mb-6 tracking-wider uppercase text-sm">About Us</h2>
             <p className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-3xl mx-auto">
               REDS is a premier real estate firm. We take great effort to understand the needs and expectations of our clients. Whether buying or selling property, our consultative approach enables you to make an informed decision on what may be one of the largest financial commitments of your life. Understanding the local markets and knowing a property’s full potential empowers you to make the best possible decision for you and your family. Discover REDS today!
             </p>
          </motion.div>
        </div>

        {/* Services / Why Choose Us */}
        <div className="pt-12 pb-24 sm:pt-16 sm:pb-40 px-6 max-w-7xl mx-auto text-center relative z-20 text-white">
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 1, type: "spring", bounce: 0.2 }} className="bg-black/30 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl mb-16 max-w-4xl mx-auto">
            <h2 className="text-slate-300 font-semibold mb-4 tracking-wider uppercase text-sm">Why Choose Us?</h2>
            <p className="text-2xl sm:text-3xl font-medium text-white max-w-3xl mx-auto leading-snug">
              Whether selling, renting, or valuing a property – we accompany you from the first assessment to the handover of the keys.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-left">
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.2 }} className="group flex flex-col items-center text-center cursor-pointer bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl hover:bg-black/40 transition-colors">
              <div className="mb-6 text-slate-800 bg-white p-5 rounded-2xl group-hover:-translate-y-3 group-hover:bg-brand-crimson group-hover:text-white group-hover:shadow-[0_0_30px_rgba(139,30,34,0.3)] transition-all duration-500 ease-out">
                <Home className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white transition-colors duration-300">Property Sales</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                From market analysis and pricing strategy to final handover – we manage the entire sales process transparently, ensuring you achieve the best possible sale price.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }} className="group flex flex-col items-center text-center cursor-pointer bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl hover:bg-black/40 transition-colors">
              <div className="mb-6 text-slate-800 bg-white p-5 rounded-2xl group-hover:-translate-y-3 group-hover:bg-brand-crimson group-hover:text-white group-hover:shadow-[0_0_30px_rgba(139,30,34,0.3)] transition-all duration-500 ease-out">
                <Building className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white transition-colors duration-300">Property Rentals</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We take care of everything – from listings and credit checks to lease agreements. Fast, reliable, and effortless for you. You relax, we take care of the rest.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.2 }} className="group flex flex-col items-center text-center cursor-pointer bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl hover:bg-black/40 transition-colors">
              <div className="mb-6 text-slate-800 bg-white p-5 rounded-2xl group-hover:-translate-y-3 group-hover:bg-brand-crimson group-hover:text-white group-hover:shadow-[0_0_30px_rgba(139,30,34,0.3)] transition-all duration-500 ease-out">
                <ClipboardList className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white transition-colors duration-300">Valuation & Consulting</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A sound valuation is the foundation of any decision. We provide a clear, market-based assessment and personally guide you through the next steps.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-white w-full">
        <div className="absolute top-0 left-0 w-full h-40 -mt-40 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>

      {/* Testimonials */}
      <div className="py-24 sm:py-32 px-5 sm:px-6 max-w-[100vw] overflow-hidden relative z-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto text-center mb-16 sm:mb-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 1, type: "spring", bounce: 0.2 }}>
            <h2 className="text-slate-600 font-semibold mb-6 tracking-wider uppercase text-sm">What Our Clients Say</h2>
            <p className="text-3xl sm:text-4xl text-slate-800 font-medium tracking-tight max-w-2xl mx-auto">
               Trusted by home buyers and sellers across the coast.
            </p>
          </motion.div>
        </div>
        
        <div className="relative h-[460px] w-full max-w-6xl mx-auto flex items-center justify-center z-10">
          {testimonials.map((testimonial, i) => {
            const offset = getOffset(i, activeIndex, testimonials.length);
            const isActive = offset === 0;
            
            const scale = isActive ? 1 : 0.85;
            const zIndex = 10 - Math.abs(offset);
            const opacity = isActive ? 1 : 0.4;
            const blur = isActive ? 0 : 6;

            return (
              <motion.div
                key={testimonial.id}
                onClick={() => setActiveIndex(i)}
                animate={{
                  x: isActive ? "0%" : (offset > 0 ? `${80 + offset * 12}%` : `-${80 + Math.abs(offset) * 12}%`),
                  scale,
                  zIndex,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
                whileHover={isActive ? { y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" } : { scale: 0.88 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute group w-[90%] sm:w-[500px] p-8 sm:p-12 bg-white rounded-xl shadow-2xl cursor-pointer border border-slate-100 ${isActive ? 'shadow-slate-300/50' : 'shadow-slate-200/30'}`}
              >
                <div className="flex gap-1 text-slate-800 mb-8 w-fit transition-transform duration-300 group-hover:scale-105">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-current transition-colors duration-300 group-hover:text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-xl leading-relaxed mb-10 italic font-medium transition-colors duration-300 group-hover:text-slate-900">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-5">
                  <motion.img whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-transparent hover:border-slate-800 transition-colors duration-300" />
                  <div className="text-left origin-left transition-transform duration-300 group-hover:scale-105">
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 font-medium mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <div className="flex items-center justify-center gap-8 mt-12 relative z-30">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevTestimonial} className="p-3 rounded-full bg-white shadow-xl text-slate-600 hover:text-slate-900 border border-slate-100 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-slate-800 w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'}`}
              />
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextTestimonial} className="p-3 rounded-full bg-white shadow-xl text-slate-600 hover:text-slate-900 border border-slate-100 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Track Record Section */}
      <div className="py-24 sm:py-32 px-5 sm:px-6 max-w-[100vw] overflow-hidden relative z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 1, type: "spring", bounce: 0.2 }}>
              <h2 className="text-slate-600 font-semibold mb-6 tracking-wider uppercase text-sm">Track Record of Sales Success</h2>
              <p className="text-3xl sm:text-4xl text-slate-800 font-medium tracking-tight max-w-2xl mx-auto">
                 Proven results over the last 3 years.
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }}>
            <div className="flex justify-center mb-10 w-full overflow-x-auto pb-4 sm:pb-0">
              <div className="bg-brand-canvas p-2 rounded-full inline-flex shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,1)] min-w-max border border-white">
                <button 
                  className={`px-6 sm:px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'buyer' ? 'bg-brand-crimson text-white neomorphic-glow' : 'text-slate-500 hover:text-brand-crimson'}`}
                  onClick={() => setActiveTab('buyer')}
                >
                  Buyer Representation
                </button>
                <button 
                  className={`px-6 sm:px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'seller' ? 'bg-brand-crimson text-white neomorphic-glow' : 'text-slate-500 hover:text-brand-crimson'}`}
                  onClick={() => setActiveTab('seller')}
                >
                  Seller Representation
                </button>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-brand-canvas rounded-3xl p-6 sm:p-10 shadow-[8px_8px_16px_rgba(0,0,0,0.05),-8px_-8px_16px_rgba(255,255,255,0.8)] border border-white overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
              <motion.div 
                 key={activeTab}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, ease: "easeOut" }}
                 className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-h-[400px] overflow-y-auto pr-4 scroll-smooth custom-scrollbar"
              >
                {(activeTab === 'buyer' ? buyerRepresentation : sellerRepresentation).map((item, index) => {
                  const parts = item.split(' - Sold');
                  const address = parts[0];
                  return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.02 }} key={index} className="flex items-start gap-3 py-3 border-b border-slate-50 last:border-0 group">
                      <div className="bg-brand-gold/20 text-brand-gold-dark p-1 rounded-full flex-shrink-0 mt-0.5 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.05),inset_-1px_-1px_3px_rgba(255,255,255,1)]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors duration-300">{address}</span>
                        <span className="text-brand-gold-dark text-xs font-semibold track-wider uppercase mt-0.5">Sold</span>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Split Info Section */}
      <div className="px-5 sm:px-6 pb-24 max-w-[90rem] mx-auto">
         <motion.div 
           initial={{ opacity: 0, y: 80, scale: 0.95 }} 
           whileInView={{ opacity: 1, y: 0, scale: 1 }} 
           viewport={{ once: false, margin: "-100px" }} 
           transition={{ duration: 1, type: "spring", bounce: 0.2 }} 
           whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
           className="group/section bg-[#EAECEF] rounded-[2rem] sm:rounded-[3rem] flex flex-col lg:flex-row items-stretch cursor-pointer transition-all duration-500 ease-out"
         >
            <div className="p-10 sm:p-12 lg:p-24 flex-1 z-10 bg-[#EAECEF] rounded-[2rem] sm:rounded-[3rem] lg:rounded-r-none relative flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-800 mb-2 transition-colors group-hover/section:text-slate-950 duration-500">Sell. Rent. Value.</h2>
              <p className="text-xl sm:text-2xl text-slate-700 mb-8">With passion and expertise</p>
              
              <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mb-12">
                <p>
                  With experience, sensitivity, and a clear strategy, we bring people and properties together professionally and with trust.
                </p>
                <p>
                  Strong values. Clear strategies. Personal guidance. We combine precision with a human touch — ensuring every transaction is secure, transparent, and tailored to your goals.
                </p>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group/btn bg-brand-crimson text-white hover:opacity-90 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-4 neomorphic-glow border-b-2 border-brand-crimson/80 w-fit">
                Free Consultation
                <span className="bg-white/20 text-white group-hover/btn:bg-white group-hover/btn:text-slate-900 rounded-full p-1.5 transition-colors duration-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.button>
            </div>
            
            <div className="flex-1 w-full relative min-h-[400px] lg:min-h-full self-stretch overflow-hidden lg:rounded-r-[3rem] rounded-b-[2rem] lg:rounded-bl-none z-0">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern property exterior" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-[2s] ease-out group-hover/section:scale-105"
              />
            </div>
         </motion.div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-6 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 1, type: "spring", bounce: 0.2 }}>
          <p className="text-slate-600 font-semibold mb-2 tracking-wider uppercase text-sm">Request a consultation</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-500 mb-16">Let's talk about your process</h2>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.2 }} className="space-y-12 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative group cursor-text">
              <input type="text" id="name" placeholder=" " className="peer w-full border-b border-slate-300 bg-transparent pt-4 pb-2 focus:border-slate-400 hover:border-slate-400 outline-none transition-colors text-sm" />
              <label htmlFor="name" className="absolute left-0 top-4 text-slate-500 group-hover:text-slate-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-800 -translate-y-full peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs">
                Name
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-400 transition-all duration-300 ease-out group-hover:w-full peer-focus:w-full peer-focus:bg-slate-800 pointer-events-none"></div>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative group cursor-text">
              <input type="email" id="email" placeholder=" " className="peer w-full border-b border-slate-300 bg-transparent pt-4 pb-2 focus:border-slate-400 hover:border-slate-400 outline-none transition-colors text-sm" />
              <label htmlFor="email" className="absolute left-0 top-4 text-slate-500 group-hover:text-slate-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-800 -translate-y-full peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs">
                Email
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-400 transition-all duration-300 ease-out group-hover:w-full peer-focus:w-full peer-focus:bg-slate-800 pointer-events-none"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative group cursor-text">
              <input type="tel" id="mobile" placeholder=" " className="peer w-full border-b border-slate-300 bg-transparent pt-4 pb-2 focus:border-slate-400 hover:border-slate-400 outline-none transition-colors text-sm" />
              <label htmlFor="mobile" className="absolute left-0 top-4 text-slate-500 group-hover:text-slate-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-800 -translate-y-full peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs">
                Mobile
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-400 transition-all duration-300 ease-out group-hover:w-full peer-focus:w-full peer-focus:bg-slate-800 pointer-events-none"></div>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative group cursor-text">
              <input type="text" id="subject" placeholder=" " className="peer w-full border-b border-slate-300 bg-transparent pt-4 pb-2 focus:border-slate-400 hover:border-slate-400 outline-none transition-colors text-sm" />
              <label htmlFor="subject" className="absolute left-0 top-4 text-slate-500 group-hover:text-slate-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-800 -translate-y-full peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs">
                Subject
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-400 transition-all duration-300 ease-out group-hover:w-full peer-focus:w-full peer-focus:bg-slate-800 pointer-events-none"></div>
            </motion.div>
          </div>

          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative mt-12 group cursor-text">
            <input type="text" id="requirements" placeholder=" " className="peer w-full border-b border-slate-300 bg-transparent pt-4 pb-2 focus:border-slate-400 hover:border-slate-400 outline-none transition-colors text-sm" />
            <label htmlFor="requirements" className="absolute left-0 top-4 text-slate-500 group-hover:text-slate-700 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-slate-800 -translate-y-full peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs">
              Tell us about your requirements
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-400 transition-all duration-300 ease-out group-hover:w-full peer-focus:w-full peer-focus:bg-slate-800 pointer-events-none"></div>
          </motion.div>

          <div className="pt-8 text-center flex justify-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="bg-brand-crimson hover:opacity-90 text-white text-sm font-medium px-10 py-4 rounded-full transition-all neomorphic-glow w-full sm:w-auto border-b-2 border-brand-crimson/80">
              Request a consultation
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
}

function OurTeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-slate-200">
      <Navigation />
      
      {/* Our Team Section */}
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 max-w-7xl mx-auto relative z-20">
         <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
               <ChevronLeft className="w-4 h-4" />
               <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
            </Link>
         </div>
         <div className="text-center mb-20 sm:mb-28">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h2 className="text-slate-600 font-semibold mb-6 tracking-wider uppercase text-sm">Our Team</h2>
              <p className="text-4xl sm:text-5xl text-slate-800 font-medium tracking-tight max-w-3xl mx-auto">
                 Meet the experts behind your success.
              </p>
            </motion.div>
         </div>

         <div className="space-y-32">
            {teamMembers.map((member, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-start`}>
                 {/* Left Panel */}
                 <motion.div initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, type: "spring", bounce: 0.2 }} className="w-full lg:w-[35%] bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/40">
                    <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-slate-50 shadow-sm relative group">
                       <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 w-full shadow-sm border border-slate-100">
                       <h4 className="font-bold text-slate-800 mb-5 text-sm uppercase tracking-wider">Interests</h4>
                       <div className="flex justify-between px-2">
                          {member.interests.map((interest, i) => {
                             const Icon = interest.icon;
                             return (
                               <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                                  <div className={`w-12 h-12 rounded-full ${interest.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm border border-white`}>
                                     <Icon className={`w-5 h-5 ${interest.color}`} />
                                  </div>
                                  <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-slate-900">{interest.label}</span>
                               </div>
                             );
                          })}
                       </div>
                    </div>
                 </motion.div>
                 
                 {/* Right Panel */}
                 <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }} className="w-full lg:w-[65%] pt-4 lg:pt-8">
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">{member.name}</h3>
                    <p className="text-slate-500 font-medium mb-6 text-lg">{member.role}, <span className="text-slate-400">{member.license}</span></p>
                    
                    <div className="flex flex-wrap gap-4 mb-10">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md">
                        <Mail className="w-4 h-4 text-slate-400" />
                        {member.email}
                      </a>
                      <a href={`tel:${member.phone.replace(/\./g, '-')}`} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md">
                        <Phone className="w-4 h-4 text-slate-400" />
                        {member.phone}
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                       {member.cards.map((card, i) => {
                          const Icon = card.icon;
                          const isFullWidth = (card as any).fullWidth;
                          return (
                             <motion.div whileHover={{ y: -4 }} className={`bg-white border border-slate-100 shadow-lg shadow-slate-200/50 rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-200 ${isFullWidth ? 'md:col-span-2' : ''}`} key={i}>
                                 <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2 bg-slate-50 rounded-xl">
                                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-lg">{card.title}</h4>
                                 </div>
                                 <p className="text-sm text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                                    {card.content}
                                 </p>
                             </motion.div>
                          );
                       })}
                    </div>
                 </motion.div>
              </div>
            ))}
         </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/listings/:id" element={<ListingDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <ChatWidget />
    </>
  );
}

function ListingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-slate-200">
      <Navigation />
      
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 max-w-[90rem] mx-auto relative z-20">
         <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
               <ChevronLeft className="w-4 h-4" />
               <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
            </Link>
         </div>
         <div className="text-center mb-16 sm:mb-20">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h2 className="text-slate-600 font-semibold mb-6 tracking-wider uppercase text-sm">Track Record of Sales</h2>
              <p className="text-4xl sm:text-5xl text-slate-800 font-medium tracking-tight max-w-3xl mx-auto">
                 Discover our extensive portfolio of successfully sold properties.
              </p>
            </motion.div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {allListingsData.map((listing, idx) => (
              <Link to={`/listings/${listing.id}`} key={idx} className="group cursor-pointer flex flex-col">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ duration: 0.5, delay: (idx % 10) * 0.05 }}
                  className="flex flex-col h-full"
                >
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 mb-5 relative">
                  <motion.img 
                    src={listing.image} 
                    alt={listing.address} 
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <div className="absolute top-4 left-4 bg-brand-crimson text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md neomorphic-glow">
                    {listing.status}
                  </div>
                  <div className="absolute top-4 right-4 bg-brand-gold/90 backdrop-blur-sm text-brand-crimson-dark text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                    {listing.price}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 truncate transition-colors group-hover:text-slate-600">
                  {listing.address}
                </h3>
                
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    <span>{listing.beds} Beds</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                    <span>{listing.baths} Baths</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                    <span>{listing.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
         </div>
      </div>
      
      <Footer />
    </div>
  );
}

function ListingDetailPage() {
  const { id } = useParams();
  const listingId = parseInt(id || '1', 10);
  const listing = allListingsData.find(l => l.id === listingId) || allListingsData[0];
  const agent = teamMembers[0];
  
  // Create some mock gallery indices
  const galleryIndices = [0, 1, 2, 3, 4, 5, 6, 7].map(i => (listing.id + i) % stockHouseImages.length);
  const galleryImages = galleryIndices.map(idx => stockHouseImages[idx]);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [mapType, setMapType] = useState<'m' | 'k'>('m');

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % galleryImages.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-slate-200">
      {/* Lightbox / Slideshow */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={() => setSelectedPhotoIndex(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2" onClick={() => setSelectedPhotoIndex(null)}>
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <button className="absolute left-6 text-white/50 hover:text-white p-4 hidden sm:block" onClick={handlePrevPhoto}>
             <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img 
            src={galleryImages[selectedPhotoIndex]} 
            className="max-h-[90vh] max-w-[90vw] object-contain select-none" 
            alt={`Gallery image ${selectedPhotoIndex + 1}`} 
            onClick={(e) => e.stopPropagation()}
          />
          
          <button className="absolute right-6 text-white/50 hover:text-white p-4 hidden sm:block" onClick={handleNextPhoto}>
             <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm font-medium tracking-widest">
            {selectedPhotoIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="relative h-[80vh] min-h-[600px] w-full relative">
        <div className="absolute inset-0">
          <img src={listing.image} alt={listing.address} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Navigation Overlay */}
        <div className="relative z-10 pt-8 px-8 sm:px-12 flex justify-between items-center text-white">
          <div className="flex items-center gap-4 sm:gap-6">
             <Link to="/listings" className="flex items-center gap-1 sm:gap-2 hover:text-white/70 transition-colors border border-white/20 sm:border-transparent px-3 py-1.5 sm:px-0 sm:py-0 rounded-full backdrop-blur-sm sm:backdrop-blur-none">
               <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
               <span className="text-xs sm:text-sm font-medium tracking-widest uppercase">Back</span>
             </Link>
             <div className="w-px h-6 bg-white/30 hidden sm:block"></div>
             <div className="text-lg sm:text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                <Link to="/">
                  <div className="flex flex-col">
                    <span>REDS</span>
                    <span className="text-[10px] sm:text-xs text-white/80 font-medium">Real Estate</span>
                  </div>
                </Link>
             </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
             <a href="#overview" className="hover:text-white/70 transition-colors">Overview</a>
             <a href="#photos" className="hover:text-white/70 transition-colors">Photos</a>
             <a href="#floorplans" className="hover:text-white/70 transition-colors">Floor Plans</a>
             <a href="#map" className="hover:text-white/70 transition-colors">Map</a>
             <a href="#contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-8 sm:left-12 text-white z-10 w-full pr-12 sm:pr-24 flex justify-between items-end">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-wide">{listing.address}</h1>
          <a href="#overview" className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors shrink-0">
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Stats Banner */}
      <div id="overview" className="bg-slate-50 border-b border-slate-200 py-10 px-8 sm:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">Offered At</p>
          <p className="text-3xl sm:text-5xl font-serif text-slate-800">{listing.price}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-4 lg:gap-12 text-center md:text-right md:justify-items-end">
           <div className="flex flex-col items-center">
             <Bed className="w-6 h-6 sm:w-8 sm:h-8 font-light text-slate-600 mb-2 stroke-[1.5]" />
             <p className="text-sm sm:text-lg font-serif">{listing.beds} Beds</p>
           </div>
           <div className="flex flex-col items-center">
             <Bath className="w-6 h-6 sm:w-8 sm:h-8 font-light text-slate-600 mb-2 stroke-[1.5]" />
             <p className="text-sm sm:text-lg font-serif">{listing.baths} Baths</p>
           </div>
           <div className="flex flex-col items-center">
             <Grid className="w-6 h-6 sm:w-8 sm:h-8 font-light text-slate-600 mb-2 stroke-[1.5]" />
             <p className="text-sm sm:text-lg font-serif">{listing.sqft.toLocaleString()} sqft</p>
             <p className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest mt-1">Home Size</p>
           </div>
           <div className="flex flex-col items-center">
             <Layers className="w-6 h-6 sm:w-8 sm:h-8 font-light text-slate-600 mb-2 stroke-[1.5]" />
             <p className="text-sm sm:text-lg font-serif">1,125 sf</p>
             <p className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest mt-1">Lot Size</p>
           </div>
        </div>
      </div>

      {/* Description & Images Intro */}
      <div className="max-w-[90rem] mx-auto py-24 sm:py-32 px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col justify-center max-w-xl">
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-8 sm:mb-10 text-slate-900 leading-tight">{listing.address.replace(',', ' \n')}</h2>
           <p className="text-slate-600 leading-loose text-sm sm:text-base font-light mb-8">
              Beautifully remodeled end unit condo in one of the best locations within the community. This light filled {listing.beds} bedroom, {listing.baths} bathroom home offers approximately {listing.sqft.toLocaleString()} square feet of updated living space with scenic views of the surrounding area. The home has been fully remodeled and features a modern kitchen with new white cabinetry, quartz countertops, designer backsplash, and stainless steel appliances. Additional upgrades include remodeled bathrooms, new flooring, fresh interior paint, updated fixtures and lighting, newer windows, and a new garage door. The end unit location provides excellent natural light and privacy, while a bonus space on the lower level offers flexibility.
           </p>
           <button className="text-[10px] sm:text-xs border-b border-slate-900 self-start pb-1 uppercase tracking-[0.2em] font-semibold text-slate-900 group">
              Read More <span className="group-hover:translate-x-1 inline-block transition-transform">&#8250;</span>
           </button>
        </div>
        <div className="relative pt-12 pr-12 sm:pt-16 sm:pr-16 w-full lg:w-11/12 mx-auto lg:ml-auto">
           <div className="w-full aspect-[4/5] bg-slate-100 shadow-2xl relative z-10 overflow-hidden">
              <img src={stockHouseImages[galleryIndices[1]]} className="w-full h-full object-cover" alt="Property Exterior" />
           </div>
           {/* Offset image decoration */}
           <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#2d2d2d] z-0 hidden sm:block"></div>
           <div className="absolute -bottom-12 -left-4 sm:-bottom-16 sm:-left-16 w-3/4 sm:w-4/5 aspect-video bg-white p-2 sm:p-4 shadow-xl z-20">
              <img src={stockHouseImages[galleryIndices[2]]} className="w-full h-full object-cover" alt="Property Interior" />
           </div>
        </div>
      </div>

      {/* Features List */}
      <div className="max-w-[90rem] mx-auto py-16 px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-200">
         <div className="col-span-1">
            <h3 className="text-2xl font-serif font-light text-slate-900 mb-6">Home Features</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">This stunning home is packed with high-end upgrades and thoughtful details designed for modern living.</p>
         </div>
         <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start gap-4">
               <Check className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-semibold text-sm mb-1 text-slate-900">Updated Kitchen</h4>
                  <p className="text-sm text-slate-500">Quartz countertops, stainless appliances, designer backsplash.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <Check className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-semibold text-sm mb-1 text-slate-900">Custom Flooring</h4>
                  <p className="text-sm text-slate-500">Premium wide-plank hardwood floors throughout the living areas.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <Check className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-semibold text-sm mb-1 text-slate-900">Smart Home Tech</h4>
                  <p className="text-sm text-slate-500">Integrated smart thermostat, lighting controls, and security.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <Check className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-semibold text-sm mb-1 text-slate-900">Bonus Room</h4>
                  <p className="text-sm text-slate-500">Finished lower level, ideal for a media room or home office.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <Check className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-semibold text-sm mb-1 text-slate-900">Remodeled Baths</h4>
                  <p className="text-sm text-slate-500">Spa-like primary bath with walk-in shower and dual vanities.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <Check className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-semibold text-sm mb-1 text-slate-900">Outdoor Space</h4>
                  <p className="text-sm text-slate-500">Private outdoor patio offering scenic views of the surrounding area.</p>
               </div>
            </div>
         </div>
      </div>

      {/* Photo Gallery Grid */}
      <div id="photos" className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-4 pb-20 sm:pb-32">
         {galleryImages.slice(0, 8).map((src, idx) => (
           <div 
             key={idx} 
             onClick={() => setSelectedPhotoIndex(idx)}
             className="aspect-[4/3] bg-slate-100 overflow-hidden relative group cursor-pointer"
           >
             <img src={src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" alt={`Gallery item ${idx + 1}`} />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
           </div>
         ))}
      </div>

      {/* Floor Plans */}
      <div id="floorplans" className="py-24 sm:py-32 bg-slate-50 flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-900 mb-10 pb-4 relative">
          Floor Plans
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 border-b border-slate-400"></div>
        </h2>
        <div className="flex gap-6 sm:gap-10 mb-12 sm:mb-16 border-b border-slate-200 px-4 sm:px-0 scrollbar-hide overflow-x-auto max-w-full">
           <button className="pb-4 border-b border-slate-900 text-xs sm:text-sm uppercase tracking-widest font-semibold text-slate-900 whitespace-nowrap">1st Floor</button>
           <button className="pb-4 text-slate-500 text-xs sm:text-sm uppercase tracking-widest hover:text-slate-900 whitespace-nowrap">2nd Floor</button>
           <button className="pb-4 text-slate-500 text-xs sm:text-sm uppercase tracking-widest hover:text-slate-900 whitespace-nowrap">3rd Floor</button>
           <button className="pb-4 text-slate-500 text-xs sm:text-sm uppercase tracking-widest hover:text-slate-900 whitespace-nowrap">All Floors</button>
        </div>
        <div className="w-full max-w-5xl px-6">
           <div className="bg-white p-6 sm:p-16 shadow-sm border border-slate-100 flex flex-col items-center justify-center">
              <div className="w-full max-w-3xl border-[6px] sm:border-[8px] border-slate-900 min-h-[200px] sm:min-h-[300px] flex items-center justify-center relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 border-t-2 border-b-2 border-slate-900 h-10 sm:h-12 border-r-2 flex items-center justify-center">
                    <span className="text-[8px] sm:text-[10px] font-bold">HALL &#8594;</span>
                 </div>
                 <span className="text-lg sm:text-xl font-bold tracking-[0.3em] sm:tracking-[0.5em] text-slate-900">GARAGE</span>
              </div>
              <p className="text-[6px] sm:text-[8px] text-slate-400 mt-6 sm:mt-12 uppercase tracking-widest text-center">
                 Floor plan created by cubicasa app. Measurements deemed highly reliable but not guaranteed.
              </p>
           </div>
        </div>
      </div>

      {/* Presented By */}
      <div className="py-24 sm:py-32 w-full bg-white">
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-center mb-16 text-slate-900 border-b border-slate-300 pb-4 inline-block mx-auto flex w-max">Presented By</h2>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-0 border border-slate-100 drop-shadow-sm bg-slate-50">
             <div className="p-8 sm:p-12 flex justify-center items-center border-b md:border-b-0 md:border-r border-slate-200">
               <img src={agent.image} className="w-40 h-40 sm:w-56 sm:h-56 object-cover bg-slate-200 rounded-lg shadow-sm" alt={agent.name} />
             </div>
             <div className="p-8 sm:p-12 sm:pl-16 flex flex-col justify-center bg-white">
               <h3 className="text-3xl sm:text-5xl font-serif font-light mb-8 sm:mb-12 text-slate-900">{agent.name}</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-semibold">Company</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">REDS</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-semibold">Phone</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">(805) 459-1865</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-semibold">Email</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">{agent.name.split(' ')[0].toLowerCase()}@redsrealestatebroker.com</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-semibold">Web</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 border-b border-slate-400 inline-block pb-0.5 w-max">www.redsrealestatebroker.com</p>
                  </div>
                  <div className="sm:col-start-1 lg:col-start-4">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-semibold">License #</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">01873454</p>
                  </div>
               </div>
               
               <div className="flex gap-3 mt-8 sm:mt-12">
                 <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center cursor-pointer hover:bg-opacity-90"><Facebook className="w-4 h-4" /></div>
                 <div className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center cursor-pointer hover:bg-opacity-90"><Linkedin className="w-4 h-4" /></div>
                 <div className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center cursor-pointer hover:bg-opacity-90"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></div>
                 <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center cursor-pointer hover:opacity-90"><Instagram className="w-4 h-4" /></div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Map Parallax Banner / Interactive Map */}
      <div id="map" className="relative h-[80vh] min-h-[700px] w-full bg-slate-900 flex flex-col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden">
          <img src={listing.image} className="w-full h-full object-cover opacity-20 scale-105" alt="" />
        </div>
        <div className="relative z-10 text-center py-6 sm:py-8 px-6 bg-slate-900 flex-shrink-0 flex flex-col justify-center items-center">
           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light mb-2 text-white">{listing.address}</h2>
           <p className="text-sm sm:text-base text-slate-300 font-light tracking-wide mb-6">San Luis Obispo, CA 93405</p>
           
           <div className="flex bg-slate-800 p-1 rounded-lg">
             <button 
               onClick={() => setMapType('m')}
               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${mapType === 'm' ? 'bg-brand-crimson text-white neomorphic-glow' : 'text-white hover:text-brand-gold hover:bg-slate-700'}`}
             >
               Map View
             </button>
             <button 
               onClick={() => setMapType('k')}
               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${mapType === 'k' ? 'bg-brand-crimson text-white neomorphic-glow' : 'text-white hover:text-brand-gold hover:bg-slate-700'}`}
             >
               Satellite View
             </button>
           </div>
        </div>
        <div className="relative flex-grow w-full z-20">
          <iframe 
             width="100%" 
             height="100%" 
             style={{ border: 0 }}
             loading="lazy"
             allowFullScreen
             src={`https://maps.google.com/maps?q=${encodeURIComponent(listing.address + ', San Luis Obispo, CA 93405')}&t=${mapType}&z=18&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="py-24 sm:py-32 w-full max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-center mb-16 text-slate-900">Get in touch</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12" onSubmit={e => e.preventDefault()}>
          <div className="relative border-b border-slate-300">
             <input type="text" className="w-full py-2 bg-transparent outline-none focus:border-slate-900 transition-colors text-sm" placeholder="First Name *" />
          </div>
          <div className="relative border-b border-slate-300">
             <input type="text" className="w-full py-2 bg-transparent outline-none focus:border-slate-900 transition-colors text-sm" placeholder="Last Name *" />
          </div>
          <div className="relative sm:col-span-2 border-b border-slate-300">
             <input type="email" className="w-full py-2 bg-transparent outline-none focus:border-slate-900 transition-colors text-sm" placeholder="Email *" />
          </div>
          <div className="relative sm:col-span-2 border-b border-slate-300">
             <input type="tel" className="w-full py-2 bg-transparent outline-none focus:border-slate-900 transition-colors text-sm" placeholder="Phone *" />
          </div>
          <div className="relative sm:col-span-2 border-b border-slate-300">
             <input type="text" className="w-full py-2 bg-transparent outline-none focus:border-slate-900 transition-colors text-sm" placeholder="Comment *" />
          </div>
          <button type="submit" className="sm:col-span-2 py-4 border border-slate-900 uppercase tracking-widest text-xs font-semibold hover:bg-slate-900 hover:text-white transition-colors mt-6 text-slate-900">
            Send Inquiry
          </button>
        </form>
      </div>
      
      {/* Footer Area specialized for details */}
      <div className="bg-[#f9f9f9] py-16 px-6 relative overflow-hidden">
         {/* Subtle background abstract lines pattern visualization */}
         <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-slate-900 fill-none" strokeWidth="0.5" preserveAspectRatio="none">
               <path d="M0,0 L100,100 M100,0 L0,100 M50,0 L50,100 M0,50 L100,50 M25,0 L75,100 M75,0 L25,100 M0,25 L100,75 M0,75 L100,25" />
               <circle cx="50" cy="50" r="25" />
               <circle cx="50" cy="50" r="10" />
            </svg>
         </div>
         
         <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
            <div>
               <h3 className="text-xl sm:text-2xl font-serif font-light mb-2">{listing.address}</h3>
               <p className="text-slate-500 text-xs sm:text-sm">San Luis Obispo, CA 93405</p>
            </div>
            
            <div className="flex flex-col items-end">
               <div className="text-right">
                 <p className="text-sm sm:text-base font-serif mb-1 text-brand-crimson">REDS</p>
                 <p className="text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-widest">Real Estate</p>
               </div>
            </div>
         </div>
         
         <div className="max-w-[90rem] mx-auto text-center mt-16 relative z-10 border-t border-slate-200 pt-8">
           <p className="text-[10px] text-slate-400">Professional Real Estate Media provided by Aspect Visuals www.aspectvisuals.co</p>
         </div>
      </div>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-slate-200">
      <Navigation />
      <div className="pt-28 sm:pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
               <ChevronLeft className="w-4 h-4" />
               <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
            </Link>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-16">
           <h1 className="text-4xl sm:text-6xl font-serif font-light mb-6 text-slate-900">The Coastal Journal</h1>
           <p className="text-lg text-slate-600 font-light">Insights, market trends, and stories from the Central Coast.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
              { title: 'The Rise of Coastal Modernism', date: 'Oct 12, 2026', image: stockHouseImages[0], category: 'Design' },
              { title: 'San Luis Obispo Market Update Q3', date: 'Sep 28, 2026', image: stockHouseImages[2], category: 'Market Data' },
              { title: 'Maximizing Your Home\'s ROI Before Selling', date: 'Sep 15, 2026', image: stockHouseImages[4], category: 'Sellers' },
           ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="aspect-video w-full overflow-hidden bg-slate-100">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={post.title} />
                 </div>
                 <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{post.category}</span>
                       <span className="text-[10px] text-slate-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif mb-3 group-hover:text-amber-700 transition-colors">{post.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">Discover the latest insights and trends shaping the real estate landscape across the beautiful California coast.</p>
                 </div>
              </div>
           ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowNotification(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-[72px] right-0 bg-white shadow-xl rounded-2xl p-4 border border-slate-200 pointer-events-auto flex items-start gap-4 w-[300px] cursor-pointer"
            onClick={() => { setIsOpen(true); setShowNotification(false); }}
          >
            <button 
              className="absolute -top-2 -right-2 bg-white border border-slate-200 rounded-full p-1.5 text-slate-400 hover:text-slate-600 shadow-sm"
              onClick={(e) => { e.stopPropagation(); setShowNotification(false); }}
            >
              <X className="w-3 h-3" />
            </button>
            <img src={teamMembers[0].image} alt="Agent" className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-100 flex-shrink-0" />
            <div className="flex-1 mt-0.5">
              <p className="text-sm text-slate-800 font-semibold leading-snug tracking-tight mb-1">Have a question?</p>
              <p className="text-xs text-slate-500 leading-relaxed">Enter your question and an agent will be in touch with you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-brand-canvas text-slate-800 w-[350px] shadow-[0_0_20px_rgba(163,35,40,0.2)] rounded-2xl mb-4 overflow-hidden border border-brand-crimson/20 pointer-events-auto origin-bottom-right"
          >
            <div className="bg-brand-crimson text-white p-4 flex justify-between items-center neomorphic-glow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">REDS Real Estate Bot</h3>
                  <p className="text-[10px] text-slate-300 font-medium tracking-wide">Typically replies right away</p>
                </div>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors focus:outline-none">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-[380px] overflow-y-auto w-full flex flex-col bg-slate-50 relative">
               {isSubmitted ? (
                 <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                       <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Message Sent!</h4>
                    <p className="text-sm text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
                 </motion.div>
               ) : (
                 <>
                  <div className="p-4 space-y-4 flex-grow">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                      </div>
                      <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                        Hi! Welcome to REDS Real Estate Broker 👋{"\n\n"}Are you looking to buy or sell a home, or do you need help with something else like HOA rules or CC&Rs?{"\n\n"}Whatever brought you here, we'd love to help! Please leave your name, email, and a brief message and we'll get back to you shortly.
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white border-t border-slate-100">
                     <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-3">
                        <input required type="text" placeholder="Name" className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 focus:bg-white transition-colors" />
                        <input required type="email" placeholder="Email" className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 focus:bg-white transition-colors" />
                        <textarea required placeholder="Message" className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 focus:bg-white transition-colors resize-none h-20"></textarea>
                        <button type="submit" className="w-full bg-brand-crimson text-white font-medium text-sm py-2.5 rounded-lg hover:opacity-90 transition-colors flex justify-center items-center gap-2">
                           Send Message <Send className="w-4 h-4" />
                        </button>
                     </form>
                  </div>
                 </>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={handleOpenChat}
        className="w-14 h-14 bg-brand-crimson text-white rounded-full neomorphic-glow flex items-center justify-center hover:opacity-90 hover:scale-105 active:scale-95 transition-all focus:outline-none pointer-events-auto"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
             <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
               <X className="w-6 h-6" />
             </motion.div>
          ) : (
             <motion.div key="chat" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }}>
               <MessageCircle className="w-6 h-6" />
             </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

