import React, { useRef, useEffect } from 'react';
import { ArrowLeft, Building, Star, Calendar, Users, Award, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';

type AboutCard = {
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: string;
};

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

const AboutPage = () => {
  const aboutCards: AboutCard[] = [
    {
      title: 'Design & Architecture',
      description: 'Located in the heart of the business district with easy access to transportation and amenities. Our spaces are designed with modern professionals in mind.',
      gradient: 'from-primary to-secondary',
      icon: <Building className="w-10 h-10" />
    },
    {
      title: 'Our Vision for Business',
      description: 'State-of-the-art facilities including high-speed internet, modern furniture, and premium coffee to fuel your success and productivity.',
      gradient: 'from-accent-purple to-accent-orange',
      icon: <Star className="w-10 h-10" />
    },
    {
      title: 'Masterful Flexibility',
      description: 'Book by the hour, day, or month. We provide the ultimate flexibility to scale with your business needs and changing requirements.',
      gradient: 'from-secondary to-primary',
      icon: <Calendar className="w-10 h-10" />
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://static.wixstatic.com/media/41c79f_e37039d80c164e93b4f19a1af4aa0aa4~mv2.png?originWidth=384&originHeight=384',
      description: 'With 15 years in commercial real estate, Sarah founded our company to revolutionize flexible workspace solutions.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://static.wixstatic.com/media/41c79f_b780d0b1e70740e7b9e7114c5d116e09~mv2.png?originWidth=384&originHeight=384',
      description: 'Michael ensures every space meets our high standards for comfort, technology, and professional atmosphere.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      image: 'https://static.wixstatic.com/media/41c79f_a8b10eeeb9c44eaeb42e4545f7ca6b4f~mv2.png?originWidth=384&originHeight=384',
      description: 'Emily creates networking opportunities and fosters the collaborative spirit that makes our community thrive.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Office Spaces' },
    { number: '24/7', label: 'Access Available' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

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
      `}</style>
      
      <div className="min-h-screen bg-background text-foreground font-paragraph">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-heading font-semibold">Back to Home</span>
              </Link>
              <h1 className="text-2xl font-heading font-bold">About Us</h1>
              <div className="w-24"></div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedElement>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  Redefining Workspace Excellence
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  We believe that great work happens in great spaces. Our mission is to provide flexible, 
                  professional environments that adapt to your business needs and inspire productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/office-spaces">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl">
                      Explore Spaces
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay="200ms">
                <Image
                  src="https://static.wixstatic.com/media/41c79f_497bb596ad5942aa8d966a8c6cfb2113~mv2.png?originWidth=576&originHeight=384"
                  width={600}
                  height={400}
                  className="rounded-3xl object-cover w-full h-full aspect-[3/2] shadow-2xl"
                  alt="Modern office space interior"
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <AnimatedElement>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-foreground/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* About Cards Section */}
        <section className="py-24 sm:py-32">
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

        {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedElement>
                <Image
                  src="https://static.wixstatic.com/media/41c79f_9fd6805538514f949681f0cafa55fdd8~mv2.png?originWidth=576&originHeight=384"
                  width={600}
                  height={400}
                  className="rounded-3xl object-cover w-full h-full aspect-[4/3] shadow-lg"
                  alt="Our company story"
                />
              </AnimatedElement>
              
              <AnimatedElement delay="200ms">
                <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Our Story</h2>
                  <div className="space-y-4 text-foreground/70">
                    <p>
                      Founded in 2018, our company emerged from a simple observation: traditional office leasing 
                      wasn't meeting the needs of modern businesses. Entrepreneurs, freelancers, and growing 
                      companies needed flexibility, not long-term commitments.
                    </p>
                    <p>
                      We started with a single location and a vision to create spaces that inspire productivity 
                      and foster community. Today, we're proud to serve hundreds of professionals across multiple 
                      locations, each designed with the same attention to detail and commitment to excellence.
                    </p>
                    <p>
                      Our journey continues as we expand our offerings and refine our spaces based on the 
                      evolving needs of our community. Every decision we make is guided by our core values: 
                      flexibility, quality, and genuine care for our members' success.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <AnimatedElement className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                These principles guide everything we do and shape the experience we create for our community.
              </p>
            </AnimatedElement>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12" />,
                  title: 'Excellence',
                  description: 'We maintain the highest standards in every aspect of our service, from space design to customer support.'
                },
                {
                  icon: <Target className="w-12 h-12" />,
                  title: 'Innovation',
                  description: 'We continuously evolve our offerings to meet the changing needs of modern professionals and businesses.'
                },
                {
                  icon: <Heart className="w-12 h-12" />,
                  title: 'Community',
                  description: 'We foster connections and collaboration, creating an environment where relationships and ideas flourish.'
                }
              ].map((value, index) => (
                <AnimatedElement key={value.title} delay={`${index * 100}ms`}>
                  <Card className="h-full p-8 text-center bg-white shadow-lg border-0 rounded-2xl">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
            <AnimatedElement className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                The passionate professionals behind your exceptional workspace experience.
              </p>
            </AnimatedElement>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedElement key={member.name} delay={`${index * 100}ms`}>
                  <Card className="h-full bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
                    <div className="aspect-square">
                      <Image
                        src={member.image}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        alt={`Portrait of ${member.name}`}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-foreground/70 text-sm">{member.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-8 text-center">
            <AnimatedElement>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Experience the difference that thoughtfully designed workspace can make for your productivity and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/office-spaces">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl">
                    Explore Spaces
                  </Button>
                </Link>
                <Link to="/booking">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl">
                    Book a Tour
                  </Button>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;