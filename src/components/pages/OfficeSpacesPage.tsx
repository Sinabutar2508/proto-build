import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Users, Wifi, Coffee, Car, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';

type OfficeSpace = {
  id: string;
  title: string;
  description: string;
  price: string;
  capacity: string;
  features: string[];
  amenities: string[];
  gradient: string;
  image: string;
  detailedDescription: string;
};

const OfficeSpacesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const officeSpaces: OfficeSpace[] = [
    {
      id: 'private-office',
      title: 'Private Office Suite',
      description: 'An enclosed, lockable space designed for focus and confidentiality. Perfect for teams and individuals needing privacy.',
      detailedDescription: 'Our Private Office Suites offer the ultimate in privacy and productivity. Each suite comes fully furnished with ergonomic furniture, high-speed internet, and climate control. The soundproof walls ensure your confidential meetings and calls remain private. Perfect for established businesses, legal consultations, or any work requiring complete focus.',
      price: '£40/hour',
      capacity: '1-4 people',
      features: ['Private & Secure', 'High-speed WiFi', '24/7 Access', 'Soundproof', 'Climate Control'],
      amenities: ['Ergonomic Furniture', 'Whiteboard', 'Phone Booth', 'Storage Space'],
      gradient: 'from-yellow-400 to-orange-500',
      image: 'https://static.wixstatic.com/media/41c79f_78ece90649ad47f2b68324da72f03cee~mv2.png?originWidth=768&originHeight=576'
    },
    {
      id: 'meeting-room',
      title: 'Dynamic Meeting Room',
      description: 'A professional environment equipped with presentation tools, ideal for client meetings and team workshops.',
      detailedDescription: 'Our Dynamic Meeting Rooms are designed to impress clients and inspire teams. Equipped with state-of-the-art presentation technology including 4K displays, wireless screen sharing, and professional audio systems. The flexible seating arrangements can accommodate various meeting styles from formal presentations to collaborative workshops.',
      price: '£60/hour',
      capacity: '4-12 people',
      features: ['Conference Tech', 'Whiteboard', 'Catering Options', '4K Display', 'Audio System'],
      amenities: ['Flexible Seating', 'Video Conferencing', 'Flip Charts', 'Natural Light'],
      gradient: 'from-green-400 to-blue-500',
      image: 'https://static.wixstatic.com/media/41c79f_7ba57ba6698c40a68be33afbbaa8d382~mv2.png?originWidth=768&originHeight=576'
    },
    {
      id: 'coworking-space',
      title: 'Collaborative Coworking',
      description: 'An open-plan, flexible workspace designed to foster networking and creative collaboration among professionals.',
      detailedDescription: 'Join our vibrant coworking community where innovation meets collaboration. Our open-plan workspace features hot desks, comfortable lounge areas, and dedicated quiet zones. Regular networking events and workshops provide opportunities to connect with like-minded professionals and grow your business network.',
      price: '£25/hour',
      capacity: '1-20 people',
      features: ['Open Desk Seating', 'Networking Events', 'Community Access', 'Flexible Hours', 'Hot Desks'],
      amenities: ['Lounge Areas', 'Kitchen Access', 'Printing Services', 'Event Space'],
      gradient: 'from-purple-400 to-pink-500',
      image: 'https://static.wixstatic.com/media/41c79f_0a1059960ad5475cb503352302e16a10~mv2.png?originWidth=768&originHeight=576'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Spaces' },
    { id: 'private', label: 'Private Offices' },
    { id: 'meeting', label: 'Meeting Rooms' },
    { id: 'coworking', label: 'Coworking' }
  ];

  const filteredSpaces = selectedFilter === 'all' 
    ? officeSpaces 
    : officeSpaces.filter(space => {
        if (selectedFilter === 'private') return space.id.includes('private');
        if (selectedFilter === 'meeting') return space.id.includes('meeting');
        if (selectedFilter === 'coworking') return space.id.includes('coworking');
        return true;
      });

  const handleBooking = (spaceTitle: string) => {
    alert(`Redirecting to booking for: ${spaceTitle}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-heading font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-heading font-bold">Office Spaces</h1>
            <Link to="/booking">
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Find Your Perfect Workspace
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose from our variety of professional office spaces designed to meet your specific needs and budget.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-gray-100 text-foreground hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Office Spaces Grid */}
      <section className="py-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {filteredSpaces.map((space, index) => (
              <Card key={space.id} className="overflow-hidden bg-white shadow-lg border-0 rounded-3xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Image
                      src={space.image}
                      alt={`Image of ${space.title}`}
                      width={800}
                      height={600}
                      className="rounded-2xl object-cover w-full h-full aspect-[4/3]"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={`flex flex-col ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`inline-block text-sm font-bold font-heading px-3 py-1 rounded-full text-white bg-gradient-to-r ${space.gradient}`}>
                        {space.capacity}
                      </span>
                      <span className="text-3xl font-heading font-extrabold text-primary">{space.price}</span>
                    </div>
                    
                    <h3 className="text-3xl font-heading font-bold text-foreground mb-4">{space.title}</h3>
                    <p className="text-foreground/70 mb-6">{space.detailedDescription}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {space.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Amenities */}
                    <div className="mb-8">
                      <h4 className="font-heading font-semibold text-foreground mb-3">Amenities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {space.amenities.map((amenity) => (
                          <div key={amenity} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-foreground/70">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        onClick={() => handleBooking(space.title)} 
                        size="lg" 
                        className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl shadow-md"
                      >
                        Book This Space <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Amenities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              All Spaces Include
            </h2>
            <p className="text-lg text-foreground/70">
              Every workspace comes with these essential amenities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Wifi className="w-8 h-8" />, title: 'High-Speed WiFi', description: 'Reliable internet connection' },
              { icon: <Coffee className="w-8 h-8" />, title: 'Premium Coffee', description: 'Complimentary beverages' },
              { icon: <Car className="w-8 h-8" />, title: 'Parking Available', description: 'Convenient parking spots' },
              { icon: <Shield className="w-8 h-8" />, title: '24/7 Security', description: 'Safe and secure environment' }
            ].map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {amenity.icon}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{amenity.title}</h3>
                <p className="text-sm text-foreground/60">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Book Your Space?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have found their perfect workspace with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl">
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeSpacesPage;