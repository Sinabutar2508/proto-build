import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

type OfficeSpace = {
  id: string;
  title: string;
  description: string;
  price: string;
  capacity: string;
  features: string[];
  gradient: string;
};

const BookingPage = () => {
  const [selectedSpace, setSelectedSpace] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  const officeSpaces: OfficeSpace[] = [
    {
      id: 'private-office',
      title: 'Private Office Suite',
      description: 'An enclosed, lockable space designed for focus and confidentiality.',
      price: '$50/hour',
      capacity: '1-4 people',
      features: ['Private & Secure', 'High-speed WiFi', '24/7 Access'],
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'meeting-room',
      title: 'Dynamic Meeting Room',
      description: 'A professional environment equipped with presentation tools.',
      price: '$75/hour',
      capacity: '4-12 people',
      features: ['Conference Tech', 'Whiteboard', 'Catering Options'],
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 'coworking-space',
      title: 'Collaborative Coworking',
      description: 'An open-plan, flexible workspace designed to foster networking.',
      price: '$25/hour',
      capacity: '1-20 people',
      features: ['Open Desk Seating', 'Networking Events', 'Community Access'],
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const durationOptions = ['1 hour', '2 hours', '4 hours', '8 hours', 'Full day'];

  const handleBooking = () => {
    if (!selectedSpace || !selectedDate || !selectedTime || !duration) {
      alert('Please fill in all booking details.');
      return;
    }
    
    const selectedOffice = officeSpaces.find(space => space.id === selectedSpace);
    alert(`Booking confirmed!\n\nSpace: ${selectedOffice?.title}\nDate: ${selectedDate}\nTime: ${selectedTime}\nDuration: ${duration}\n\nA confirmation email will be sent shortly.`);
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
            <h1 className="text-2xl font-heading font-bold">Book Your Space</h1>
            <div className="w-24"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </header>

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Booking Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                <span className="ml-2 font-medium">Choose Space</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${selectedSpace ? 'bg-primary text-primary-foreground' : 'bg-gray-300 text-gray-600'}`}>2</div>
                <span className="ml-2 font-medium">Select Date & Time</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${selectedDate && selectedTime ? 'bg-primary text-primary-foreground' : 'bg-gray-300 text-gray-600'}`}>3</div>
                <span className="ml-2 font-medium">Confirm</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step 1: Choose Office Space */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Select Your Office Space
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {officeSpaces.map((space) => (
                    <div
                      key={space.id}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedSpace === space.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedSpace(space.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${space.gradient}`}></div>
                            <h3 className="font-heading font-semibold text-lg">{space.title}</h3>
                            <span className="text-2xl font-bold text-primary">{space.price}</span>
                          </div>
                          <p className="text-foreground/70 mb-3">{space.description}</p>
                          <div className="flex items-center gap-4 text-sm text-foreground/60">
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {space.capacity}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {space.features.map((feature) => (
                              <span key={feature} className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                <CheckCircle className="w-3 h-3 text-secondary" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        {selectedSpace === space.id && (
                          <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Step 2: Date and Time Selection */}
              {selectedSpace && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Select Date & Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Date</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Time</label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 text-sm rounded-lg border transition-colors ${
                              selectedTime === time
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-white border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Duration</label>
                      <div className="grid grid-cols-2 gap-2">
                        {durationOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => setDuration(option)}
                            className={`p-2 text-sm rounded-lg border transition-colors ${
                              duration === option
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-white border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Booking Summary */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedSpace ? (
                    <>
                      <div className="space-y-2">
                        <h4 className="font-semibold">{officeSpaces.find(s => s.id === selectedSpace)?.title}</h4>
                        <p className="text-sm text-foreground/70">{officeSpaces.find(s => s.id === selectedSpace)?.capacity}</p>
                        <p className="text-lg font-bold text-primary">{officeSpaces.find(s => s.id === selectedSpace)?.price}</p>
                      </div>
                      
                      {selectedDate && (
                        <div className="border-t pt-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                        </div>
                      )}
                      
                      {selectedTime && (
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{selectedTime}</span>
                        </div>
                      )}
                      
                      {duration && (
                        <div className="text-sm">
                          <span className="font-medium">Duration: </span>
                          <span>{duration}</span>
                        </div>
                      )}
                      
                      <div className="border-t pt-4">
                        <Button 
                          onClick={handleBooking}
                          className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold"
                          disabled={!selectedSpace || !selectedDate || !selectedTime || !duration}
                        >
                          Confirm Booking
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-foreground/60 text-center py-8">Select an office space to see booking details</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;