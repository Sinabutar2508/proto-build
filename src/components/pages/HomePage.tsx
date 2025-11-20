// HPI 1.5-V
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Users, Wifi, Coffee, Car, Shield, ArrowRight, Building, Star, CheckCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';

// --- Types ---
type OfficeSpace = {
  id: string;
  title: string;
  description: string;
  price: string;
  capacity: string;
  features: string[];
  gradient: string;
  image: string;
};

type AboutCard = {
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
};

type PricingPlan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  gradient: string;
};

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: string;
};

// --- Animated Element for Safe Scroll Reveals ---
const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                element.classList.add('is-visible');
                observer.unobserve(element);
            }
        }, { threshold: 0.1 });

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const style = delay ? { transitionDelay: delay } : {};

    return <div ref={ref} className={`animate-reveal ${className || ''}`} style={style}>{children}</div>;
};

// --- Main Homepage Component ---
const HomePage = () => {
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const officeSpaces: OfficeSpace[] = [
    {
      id: 'private-office',
      title: 'Private Office Suite',
      description: 'An enclosed, lockable space designed for focus and confidentiality. Perfect for teams and individuals needing privacy.',
      price: '£40/hour',
      capacity: '1-4 people',
      features: ['Private & Secure', 'High-speed WiFi', '24/7 Access'],
      gradient: 'from-yellow-400 to-orange-500',
      image: 'https://static.wixstatic.com/media/41c79f_78ece90649ad47f2b68324da72f03cee~mv2.png?originWidth=768&originHeight=576'
    },
    {
      id: 'meeting-room',
      title: 'Dynamic Meeting Room',
      description: 'A professional environment equipped with presentation tools, ideal for client meetings and team workshops.',
      price: '£60/hour',
      capacity: '4-12 people',
      features: ['Conference Tech', 'Whiteboard', 'Catering Options'],
      gradient: 'from-green-400 to-blue-500',
      image: 'https://static.wixstatic.com/media/41c79f_7ba57ba6698c40a68be33afbbaa8d382~mv2.png?originWidth=768&originHeight=576'
    },
    {
      id: 'coworking-space',
      title: 'Collaborative Coworking',
      description: 'An open-plan, flexible workspace designed to foster networking and creative collaboration among professionals.',
      price: '£25/hour',
      capacity: '1-20 people',
      features: ['Open Desk Seating', 'Networking Events', 'Community Access'],
      gradient: 'from-purple-400 to-pink-500',
      image: 'https://static.wixstatic.com/media/41c79f_0a1059960ad5475cb503352302e16a10~mv2.png?originWidth=768&originHeight=576'
    }
  ];

  const aboutCards: AboutCard[] = [
    {
      title: 'Design & Architecture',
      description: 'Located in the heart of the business district with easy access to transportation and amenities.',
      gradient: 'from-primary to-secondary',
      icon: <Building className="w-10 h-10" />
    },
    {
      title: 'Our Vision for Business',
      description: 'State-of-the-art facilities including high-speed internet, modern furniture, and premium coffee to fuel your success.',
      gradient: 'from-accent-purple to-accent-orange',
      icon: <Star className="w-10 h-10" />
    },
    {
      title: 'Masterful Flexibility',
      description: 'Book by the hour, day, or month. We provide the ultimate flexibility to scale with your business needs.',
      gradient: 'from-secondary to-primary',
      icon: <Calendar className="w-10 h-10" />
    }
  ];

  const pricingPlans: PricingPlan[] = [
    {
        title: 'Standard Membership',
        price: '£250',
        description: 'Access to all shared amenities and a set number of private office hours.',
        features: ['High-speed Internet', 'Breakout room access', 'Community events'],
        gradient: 'from-primary/80 to-secondary/80'
    },
    {
        title: 'Workspace Plus',
        price: '£450',
        description: 'Designated desk, parking spot, and extended access to private offices.',
        features: ['Everything in Standard', 'Designated Desk', 'Free Parking'],
        gradient: 'from-accent-purple/80 to-accent-orange/80'
    },
    {
        title: 'Premium Partnership',
        price: '£800',
        description: 'Full access to networking opportunities, mentorship, and all premium services.',
        features: ['Everything in Plus', 'Exclusive Networking', 'Mentorship Programs'],
        gradient: 'from-secondary/80 to-primary/80'
    }
  ];

  const handleBooking = (officeTitle: string) => {
    alert(`Booking process initiated for: ${officeTitle}. A representative will contact you shortly.`);
  };

  return (
    <>
      <style>{`
        .animate-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .gradient-button {
          background-size: 200% 100%;
          transition: background-position 0.5s ease;
        }
        .gradient-button:hover {
          background-position: -100% 0;
        }
        .hero-gradient-bg {
          background: linear-gradient(270deg, #FFDA63, #00B8A9, #9D53E8, #FF9F43);
          background-size: 800% 800%;
          animation: gradientAnimator 18s ease infinite;
        }
        @keyframes gradientAnimator {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
      `}</style>
      <div className="min-h-screen bg-background text-foreground font-paragraph overflow-clip">
        
        {/* Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 bg-background 231, 235)] border-[0px] border-[rgb(229, 231, 235)] border-solid opacity-[1]">
              <Link to="/" className="text-2xl font-heading font-bold text-foreground">{"Keystone HQ"}</Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                  Home
                </Link>
                <Link to="/office-spaces" className="text-foreground hover:text-primary transition-colors font-medium">
                  Spaces
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                  About
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                  Contact
                </Link>
                <Link to="/booking">
                  <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl">
                    Book Now
                  </Button>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                <nav className="flex flex-col space-y-4">
                  <Link 
                    to="/" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/office-spaces" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Spaces
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl">
                      Book Now
                    </Button>
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full min-h-screen lg:h-screen flex items-center pt-32 pb-20 lg:pt-24 lg:pb-0">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <AnimatedElement>
                <Image
                  src="https://static.wixstatic.com/media/11062b_b687b5a078ef4bb886c0d14af32f0373~mv2.jpg"
                  width={1200}
                  height={1200}
                  className="rounded-3xl object-cover w-full h-full aspect-[4/3] lg:aspect-auto lg:h-[75vh] shadow-2xl" />
              </AnimatedElement>
            </div>
            <div className="lg:col-span-2 relative z-10">
              <AnimatedElement className="flex flex-col h-full">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-foreground mb-6">
                  Your Ideal Office Space
                </h1>
                <p className="text-lg text-foreground/70 mb-10 max-w-md">
                  Find and book the perfect workspace for your needs. From private offices to collaborative spaces.
                </p>
                <div className="space-y-4 mb-10">
                  {officeSpaces.slice(0, 3).map((space, index) => (
                    <div key={space.id} className="bg-white/50 border border-foreground/10 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-primary">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${space.gradient} flex-shrink-0`}></div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{space.title}</h3>
                        <p className="text-sm text-foreground/60">{space.capacity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/office-spaces">
                  <Button size="lg" className="gradient-button w-full lg:w-auto bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg px-10 py-7 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    Explore Spaces
                  </Button>
                </Link>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Why Choose Us?</h2>
              <p className="text-lg text-foreground/70">
                We provide more than just office space - we create an environment where your business can thrive.
              </p>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              {aboutCards.map((card, index) => (
                <AnimatedElement key={card.title} delay={`${index * 100}ms`} className={`
                  ${index === 1 ? 'md:-translate-y-10' : ''}
                `}>
                  <Card className={`h-full rounded-3xl shadow-xl text-white overflow-clip border-0 bg-gradient-to-br ${card.gradient}`}>
                    <CardContent className="p-8 md:p-10 flex flex-col h-full">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-4">{card.title}</h3>
                      <p className="opacity-80 font-paragraph">{card.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Office Spaces Section */}
        <section className="py-24 sm:py-32">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Choose Your Perfect Space</h2>
              <p className="text-lg text-foreground/70">
                We offer a variety of office spaces to meet your specific needs and budget.
              </p>
            </AnimatedElement>
            <div className="space-y-16">
              {officeSpaces.map((space, index) => (
                <AnimatedElement key={space.id} delay={`${index * 100}ms`}>
                  <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white p-8 rounded-3xl shadow-lg overflow-clip border-0">
                    <Image
                      src={space.image}
                      alt={`Image of ${space.title}`}
                      width={800}
                      height={600}
                      className="rounded-2xl object-cover w-full h-full aspect-[4/3]"
                    />
                    <div className="flex flex-col">
                      <span className={`inline-block text-sm font-bold font-heading px-3 py-1 rounded-full mb-4 text-white bg-gradient-to-r ${space.gradient} w-fit`}>{space.capacity}</span>
                      <h3 className="text-3xl font-heading font-bold text-foreground mb-3">{space.title}</h3>
                      <p className="text-foreground/70 mb-6">{space.description}</p>
                      <div className="border-t border-foreground/10 pt-6 space-y-3 mb-8">
                        {space.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-secondary" />
                            <span className="text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-4xl font-heading font-extrabold text-foreground">{space.price}</p>
                        <Link to="/booking">
                          <Button size="lg" className="gradient-button bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl shadow-md">
                            Book Now <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* How Booking Works Section */}
        <section className="py-24 sm:py-32 bg-white">
            <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
                <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Simple Booking Process</h2>
                    <p className="text-lg text-foreground/70">Get your ideal workspace in just a few simple steps.</p>
                </AnimatedElement>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatedElement>
                        <Card className="h-full rounded-3xl shadow-xl text-white overflow-clip border-0 bg-gradient-to-br from-secondary to-primary p-8 md:p-12">
                            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <Calendar className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold mb-4">1. Select Your Space & Date</h3>
                            <p className="text-lg opacity-80">Browse our spaces and pick the one that fits your needs. Choose a date that works for you.</p>
                        </Card>
                    </AnimatedElement>
                    <AnimatedElement delay="100ms">
                        <Card className="h-full rounded-3xl shadow-xl text-white overflow-clip border-0 bg-gradient-to-br from-accent-purple to-accent-orange p-8 md:p-12">
                            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <Clock className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold mb-4">2. Choose Time & Confirm</h3>
                            <p className="text-lg opacity-80">Select your desired time slot, review your booking details, and confirm. It's that easy!</p>
                        </Card>
                    </AnimatedElement>
                </div>
            </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-24 sm:py-32 hero-gradient-bg text-white">
            <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
                <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Flexible Pricing Plans</h2>
                    <p className="text-lg opacity-80">Choose a plan that scales with your business. No hidden fees, no long-term commitments.</p>
                </AnimatedElement>
                <div className="max-w-5xl mx-auto space-y-6">
                    {pricingPlans.map((plan, index) => (
                        <AnimatedElement key={plan.title} delay={`${index * 100}ms`}>
                            <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                                    <div className="md:col-span-2">
                                        <h3 className="text-2xl font-heading font-bold">{plan.title}</h3>
                                        <p className="opacity-70 mt-1">{plan.description}</p>
                                    </div>
                                    <div className="text-left md:text-center">
                                        <span className="text-3xl font-bold font-heading">{plan.price}</span>
                                        <span className="opacity-70">/month</span>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <Button size="lg" className="bg-white text-primary-foreground font-bold rounded-xl shadow-md hover:bg-gray-200">Get Started</Button>
                                    </div>
                                </div>
                            </Card>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedElement>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-lg text-foreground/70 mb-12">
                  Have questions about our spaces or need help with your booking? We're here to help.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-semibold">Location</h4>
                      <p className="text-foreground/70">123 Business District, City Center</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-purple to-accent-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-semibold">Hours</h4>
                      <p className="text-foreground/70">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement delay="100ms">
                <Card className="p-8 md:p-12 rounded-3xl shadow-2xl bg-background border-0">
                  <h3 className="text-2xl font-heading font-semibold mb-6">Contact Form</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
                      <input type="text" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                      <input type="email" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                      <textarea rows={4} className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="How can we help you?" />
                    </div>
                    <Link to="/contact">
                      <Button className="w-full gradient-button bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold py-4 rounded-xl shadow-lg">
                        Send Message
                      </Button>
                    </Link>
                  </form>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-white py-16 px-6">
          <div className="max-w-[120rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">Office Space</h3>
                <p className="text-gray-300 font-paragraph">
                  Your premier destination for flexible office solutions in the heart of the city.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Private Offices</li>
                  <li>Meeting Rooms</li>
                  <li>Coworking Spaces</li>
                  <li>Virtual Offices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Amenities</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>High-Speed WiFi</li>
                  <li>Premium Coffee</li>
                  <li>Parking Available</li>
                  <li>24/7 Security</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>123 Business District</li>
                  <li>City Center</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Email: info@officespace.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Office Space. All rights reserved. Re-architected by The Digital Architect.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
