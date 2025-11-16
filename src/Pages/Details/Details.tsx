import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  User,
  Users,
  Star,
  Download,
  Heart,
  Play,
  ChevronDown,
  ChevronUp,
  X,
  Check,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from 'react-icons/fa';

import Navbar from '../../components/Nav/Navbar';
import LuxuryHotelFooter from '../../components/Footer/Footer';
import './Details.css';

const PLACEHOLDER = 'https://via.placeholder.com/1200x400?text=Image+not+available';

// Type definitions
interface Event {
  id: string;
  image: string;
  title: string;
  location: string;
  department: string;
  date: string;
  category: string;
  popularity: number;
  availableSlots: number;
  description?: string;
  cost?: string;
  totalSeats?: number;
  organizer?: string;
}

interface User {
  id: number;
  role: 'visitor' | 'participant' | 'organizer' | 'admin';
  isLoggedIn: boolean;
}

interface OrganizerInfo {
  name: string;
  phone: string;
  email: string;
  website: string;
}

interface MediaItem {
  id: number;
  fileType: 'image' | 'video';
  fileUrl: string;
  caption: string;
  uploadedBy: string;
}

interface Feedback {
  id: number;
  studentId: string;
  rating: number;
  comments: string;
  submittedOn: string;
  studentName: string;
}

interface Certificate {
  certificateUrl: string;
  issuedOn: string;
  paymentRequired: boolean;
}

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  bio: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface EventDetails {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  organizer: string;
  totalSeats: number;
  seatsBooked: number;
  seatsAvailable: number;
  cost: string;
  heroImage: string;
}

type ModalType = 'login-required' | 'registration-success' | 'waitlist-success' | 'cancellation-success' | 'feedback-success' | null;
type RegistrationStatus = 'not_registered' | 'registered' | 'waitlisted';

function Details() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Sample events list
  const eventsData: Event[] = [
    {
      id: "1",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/happy-businesswoman-attending-a-conference-in-conv-2023-11-27-05-08-44-utc-700x466.jpg",
      title: "AI & Machine Learning Workshop",
      location: "Auditorium A",
      department: "Computer Science",
      date: "2025-11-15T09:00:00",
      category: "Technical",
      popularity: 120,
      availableSlots: 30,
    },
    {
      id: "2",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/overjoyed-young-muslim-businesswoman-in-hijab-gett-2023-11-27-05-34-18-utc-700x466.jpg",
      title: "Cultural Dance Night",
      location: "Main Hall",
      department: "Arts",
      date: "2025-11-20T18:00:00",
      category: "Cultural",
      popularity: 200,
      availableSlots: 0,
    },
    {
      id: "3",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/collaboration-management-and-a-business-woman-wit-2023-11-27-04-55-33-utc-700x466.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "4",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/blogger-setting-camera-2023-11-27-05-29-56-utc.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "5",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/showing-a-dedication-to-education-2023-11-27-05-02-28-utc.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "6",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/black-adult-education-teacher-assisting-his-studen-2023-11-27-05-08-29-utc.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "7",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/education-campus-friendship-and-people-concept-2023-11-27-05-35-20-utc-700x466.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "8",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/group-of-friends-making-party-at-home-on-new-year-2023-12-28-01-34-52-utc-700x466.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    }
  ];

  // Page state
  const [currentUser] = useState<User>({
  id: 1,
  role: 'participant',
  isLoggedIn: true
});


  const [event, setEvent] = useState<EventDetails | null>(null);
  const [organizerInfo] = useState<OrganizerInfo>({
    name: 'Dr. Sarah Johnson',
    phone: '+81343123029',
    email: 'sarah.johnson@college.edu',
    website: 'https://college.edu/cs-dept'
  });

  const [userRegistrationStatus, setUserRegistrationStatus] = useState<RegistrationStatus>('not_registered');
  const [showModal1, setShowModal1] = useState<ModalType>(null);
  const [activeSection2, setActiveSection2] = useState<string>('description');
  const [expandedFAQ3, setExpandedFAQ3] = useState<number | null>(null);
  const [feedback4, setFeedback4] = useState<{ rating: number; comment: string }>({ rating: 0, comment: '' });

  // Static sample supporting data
  const [mediaGallery5] = useState<MediaItem[]>([
    {
      id: 1,
      fileType: 'image',
      fileUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      caption: 'Previous Workshop Session',
      uploadedBy: 'organizer'
    },
    {
      id: 2,
      fileType: 'image',
      fileUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
      caption: 'Lab Setup',
      uploadedBy: 'organizer'
    },
    {
      id: 3,
      fileType: 'video',
      fileUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      caption: 'Introduction Video',
      uploadedBy: 'organizer'
    }
  ]);

  const [feedbackList6] = useState<Feedback[]>([
    {
      id: 1,
      studentId: 'STU001',
      rating: 5,
      comments: 'Excellent workshop! Learned so much about React and modern development practices.',
      submittedOn: '2024-11-10',
      studentName: 'Alex Chen'
    },
    {
      id: 2,
      studentId: 'STU002',
      rating: 4,
      comments: 'Great content and hands-on exercises. Would love more advanced topics.',
      submittedOn: '2024-11-09',
      studentName: 'Maria Rodriguez'
    },
    {
      id: 3,
      studentId: 'STU003',
      rating: 5,
      comments: 'Perfect for beginners and intermediates. Instructor was very knowledgeable.',
      submittedOn: '2024-11-08',
      studentName: 'David Park'
    }
  ]);

  const [certificate7] = useState<Certificate>({
    certificateUrl: '/certificates/web-dev-workshop.pdf',
    issuedOn: '2024-12-16',
    paymentRequired: false
  });

  const [speakers8] = useState<Speaker[]>([
    {
      id: 1,
      name: 'Prof. Emily Watson',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'With over 8 years of experience in web development and a passion for teaching, Prof. Watson specializes in React, Node.js, and cloud architecture.'
    },
    {
      id: 2,
      name: 'John Mitchell',
      title: 'Lead DevOps Engineer',
      company: 'Cloud Solutions Ltd.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'John has extensive experience in cloud deployment and DevOps practices, working with major tech companies for over 6 years.'
    }
  ]);

  const [faqList9] = useState<FAQ[]>([
    {
      id: 1,
      question: 'What prerequisites are required for this workshop?',
      answer: 'Basic knowledge of HTML, CSS, and JavaScript is recommended. Familiarity with programming concepts will be helpful.'
    },
    {
      id: 2,
      question: 'Will laptops be provided?',
      answer: 'Participants should bring their own laptops with the required software installed. A setup guide will be sent before the event.'
    },
    {
      id: 3,
      question: 'Is there parking available at the venue?',
      answer: 'Yes, free parking is available in the college parking lots. Additional street parking is also available nearby.'
    },
    {
      id: 4,
      question: 'Will refreshments be provided?',
      answer: 'Yes, light refreshments including coffee, tea, and snacks will be provided during breaks.'
    },
    {
      id: 5,
      question: 'Can I get a certificate of completion?',
      answer: 'Yes, all registered participants who attend the full workshop will receive a digital certificate of completion.'
    }
  ]);

  // Average rating
  const averageRating10 = feedbackList6.length > 0
    ? feedbackList6.reduce((acc, review) => acc + (review.rating || 0), 0) / feedbackList6.length
    : 0;

  // Time helper
  const time12To24 = (time12: string): string => {
    if (!time12 || typeof time12 !== 'string') return '00:00';
    const trimmed = time12.trim();
    const match = trimmed.match(/^(\d{1,2}):(\d{2})\s*([AaPp][Mm])$/);
    if (!match) {
      const simpleMatch = trimmed.match(/^(\d{1,2}):(\d{2})$/);
      if (simpleMatch) return simpleMatch[0].padStart(5, '0');
      return '00:00';
    }
    let hours = parseInt(match[1], 10);
    const minutes = match[2];
    const meridian = match[3].toLowerCase();
    if (meridian === 'pm' && hours !== 12) hours += 12;
    if (meridian === 'am' && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  // Find & load the event by url id or fallback to route state
  useEffect(() => {
    let found: Event | null = null;
    
    // If Events page passed state
    if (location && location.state && (location.state as { event: Event }).event) {
      found = (location.state as { event: Event }).event;
    } else if (id) {
      found = eventsData.find((e) => String(e.id) === String(id)) || null;
    }

    if (found) {
      // Normalize into the same shape your UI expects
      const d = new Date(found.date);
      const timeStr = d.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      const dateOnly = found.date.split('T')[0] || d.toISOString().split('T')[0];

      setEvent({
        id: found.id,
        title: found.title,
        description: found.description || 'Join us for an engaging event where experts share knowledge and practical tips.',
        date: dateOnly,
        time: timeStr,
        venue: found.location || 'TBA',
        category: found.category || 'General',
        organizer: found.organizer || found.department || 'Organizing Committee',
        totalSeats: found.totalSeats || found.availableSlots || 0,
        seatsBooked: Math.max(0, (found.totalSeats ? found.totalSeats - (found.availableSlots || 0) : 0)),
        seatsAvailable: found.availableSlots != null ? found.availableSlots : (found.totalSeats || 0),
        cost: found.cost || 'Free',
        heroImage: found.image || PLACEHOLDER
      });
    } else {
      setEvent(null);
    }
  }, [id, location]);

  // Image onError helper to ensure image shows - FIXED TYPE
  const imgOnError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.currentTarget as HTMLImageElement;
    target.src = PLACEHOLDER;
  };

  // If event not found - show message
  if (id && event === null) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: 40, textAlign: 'center' }}>
          <h2>Event not found</h2>
          <p>The event you are looking for could not be found.</p>
          <button onClick={() => navigate(-1)} className="button18-primary">
            Go back
          </button>
        </div>
        <LuxuryHotelFooter />
      </div>
    );
  }

  // Event actions
  const handleRegistration11 = (): void => {
    if (!currentUser.isLoggedIn) {
      setShowModal1('login-required');
      return;
    }

    if (event && event.seatsAvailable > 0) {
      setUserRegistrationStatus('registered');
      setEvent((prev) => prev ? {
        ...prev,
        seatsBooked: prev.seatsBooked + 1,
        seatsAvailable: Math.max(0, prev.seatsAvailable - 1)
      } : null);
      setShowModal1('registration-success');
    } else {
      setUserRegistrationStatus('waitlisted');
      setShowModal1('waitlist-success');
    }
  };

  const handleCancelRegistration12 = (): void => {
    if (userRegistrationStatus === 'registered' || userRegistrationStatus === 'waitlisted') {
      setUserRegistrationStatus('not_registered');
      setEvent((prev) => prev ? {
        ...prev,
        seatsBooked: Math.max(0, prev.seatsBooked - 1),
        seatsAvailable: prev.seatsAvailable + 1
      } : null);
      setShowModal1('cancellation-success');
    }
  };

  const handleShare13 = (platform: string): void => {
    if (!event) return;
    const shareText = `Join me at ${event.title} on ${event.date}. Don't miss this!`;
    const shareUrl = window.location.href;
    const shareUrls: Record<string, string> = {
      facebook: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(event.title)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const addToCalendar14 = (): void => {
    if (!event) return;
    
    try {
      const time24 = time12To24(event.time);
      const [year, month, day] = event.date.split('-').map(Number);
      const [hour, minute] = time24.split(':').map(Number);
      const eventDateLocal = new Date(year, month - 1, day, hour, minute, 0);
      const endDateLocal = new Date(eventDateLocal.getTime() + 3 * 60 * 60 * 1000);
      const toICSDate = (d: Date): string => {
        const pad = (n: number): string => String(n).padStart(2, '0');
        return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
      };
      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${toICSDate(eventDateLocal)}
DTEND:${toICSDate(endDateLocal)}
SUMMARY:${(event.title || '').replace(/[\r\n]/g, ' ')}
DESCRIPTION:${(event.description || '').replace(/[\r\n]/g, ' ')}
LOCATION:${(event.venue || '').replace(/[\r\n]/g, ' ')}
END:VEVENT
END:VCALENDAR`;
      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      const safeTitle = (event.title || 'event').replace(/[^a-z0-9_\\-]+/gi, '-');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', `${safeTitle}.ics`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Could not create calendar file', err);
      setShowModal1('registration-success');
    }
  };

  const handleFeedbackSubmit15 = (): void => {
    if (feedback4.rating > 0) {
      setShowModal1('feedback-success');
      setFeedback4({ rating: 0, comment: '' });
    }
  };

  interface ModalProps {
    type: ModalType;
    onClose: () => void;
  }

  const Modal16: React.FC<ModalProps> = ({ type, onClose }) => {
    const modalContent = {
      'login-required': {
        title: 'Login Required',
        content: 'Please login or create an account to register for this event.',
        button: 'Go to Login'
      },
      'registration-success': {
        title: 'Registration Successful!',
        content: 'You have been successfully registered for this event. A confirmation email has been sent to your registered email address.',
        button: 'Great!'
      },
      'waitlist-success': {
        title: 'Added to Waitlist',
        content: 'You have been added to the waitlist. We will notify you via email if a spot becomes available.',
        button: 'Understood'
      },
      'cancellation-success': {
        title: 'Registration Cancelled',
        content: 'Your registration has been successfully cancelled. You can re-register anytime if spots are available.',
        button: 'Okay'
      },
      'feedback-success': {
        title: 'Thank You!',
        content: 'Your feedback has been submitted successfully. It helps us improve future events.',
        button: 'Close'
      }
    };
    
    if (!type) return null;
    
    const modal = modalContent[type];
    if (!modal) return null;
    
    return (
      <div className="modal17-overlay">
        <div className="modal17-content">
          <div className="modal17-header">
            <h3 className="modal17-title">{modal.title}</h3>
            <button onClick={onClose} className="modal17-close" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
          <div className="modal17-body">
            <p>{modal.content}</p>
          </div>
          <div className="modal17-footer">
            <button onClick={onClose} className="button18-primary">
              {modal.button}
            </button>
          </div>
        </div>
      </div>
    );
  };

  interface StarRatingProps {
    rating: number;
    onRatingChange?: (rating: number) => void;
    readOnly?: boolean;
  }

  const StarRating19: React.FC<StarRatingProps> = ({ rating, onRatingChange, readOnly = false }) => {
    return (
      <div className="star20-rating" role="radiogroup" aria-label="Rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => !readOnly && onRatingChange && onRatingChange(star)}
            className={`star20-button ${star <= rating ? 'star20-filled' : 'star20-empty'} ${readOnly ? 'star20-readonly' : ''}`}
            disabled={readOnly}
            aria-pressed={star <= rating}
            aria-label={`${star} star`}
          >
            <Star size={18} />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar />

      <div className="event21-page">
        {/* Hero */}
        <div
          className="hero22-section"
          style={{
            backgroundImage: `url(${(event && event.heroImage) || PLACEHOLDER})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="hero22-content">
            <div className="event23-categories">
              <span className="category24-badge">{event ? event.category : ''}</span>
              <span className="category24-badge">{event ? event.cost : ''}</span>
            </div>
            <h1 className="event25-title">{event ? event.title : 'Event Details'}</h1>
            <div className="event26-meta">
              <div className="meta27-item">
                <Calendar size={18} />
                <span>{event ? event.date : ''}</span>
              </div>
              <div className="meta27-item">
                <Clock size={18} />
                <span>{event ? event.time : ''}</span>
              </div>
              <div className="meta27-item">
                <MapPin size={18} />
                <span>{event ? event.venue : ''}</span>
              </div>
              <div className="meta27-item">
                <User size={18} />
                <span>{event ? event.organizer : ''}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container28-main">
          <div className="content29-area">
            {/* Action Bar */}
            <div className="actions30-bar">
              {userRegistrationStatus === 'not_registered' ? (
                <button onClick={handleRegistration11} className="button18-primary">
                  {event && event.seatsAvailable > 0 ? 'Register Now' : 'Join Waitlist'}
                </button>
              ) : (
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div className="button32-success" aria-live="polite">
                    <Check size={16} />
                    <span>{userRegistrationStatus === 'registered' ? 'Registered' : 'On Waitlist'}</span>
                  </div>
                  <button onClick={handleCancelRegistration12} className="button33-danger">
                    Cancel Registration
                  </button>
                </div>
              )}

              <button onClick={addToCalendar14} className="button31-secondary">
                <Calendar size={16} />
                Add to calendar
              </button>

              <div className="share58-buttons" role="group" aria-label="Share event">
                <button onClick={() => handleShare13('facebook')} className="share58-button" title="Share on Facebook" aria-label="Share on Facebook">
                  <FaFacebookF size={16} />
                </button>
                <button onClick={() => handleShare13('twitter')} className="share58-button" title="Share on Twitter" aria-label="Share on Twitter">
                  <FaTwitter size={16} />
                </button>
                <button onClick={() => handleShare13('linkedin')} className="share58-button" title="Share on LinkedIn" aria-label="Share on LinkedIn">
                  <FaLinkedinIn size={16} />
                </button>
                <button onClick={() => handleShare13('whatsapp')} className="share58-button" title="Share on WhatsApp" aria-label="Share on WhatsApp">
                  <MessageCircle size={16} />
                </button>
                <button onClick={() => handleShare13('email')} className="share58-button" title="Share via Email" aria-label="Share via Email">
                  <Mail size={16} />
                </button>
              </div>
            </div>

            {/* Availability */}
            <div className="availability34-card">
              <div className="availability34-header">
                <h3 className="availability34-title">Event Capacity</h3>
                <div className="seats35-info">
                  <Users size={16} />
                  <span>{event ? `${event.seatsBooked}/${Math.max(1, event.totalSeats)} registered` : ''}</span>
                </div>
              </div>
              <div className="progress36-bar" aria-hidden="true">
                <div
                  className="progress36-fill"
                  style={{ width: `${event ? (event.seatsBooked / Math.max(1, event.totalSeats)) * 100 : 0}%` }}
                />
              </div>
              <div className="progress37-info">
                <span>{event ? `${event.seatsAvailable} spots available` : ''}</span>
                {event && event.seatsAvailable === 0 && <span style={{ color: '#f59e0b' }}>Waitlist available</span>}
              </div>
            </div>

            {/* Tabs */}
            <div className="tabs38-container">
              <nav className="tabs38-nav" role="tablist" aria-label="Event sections">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'speakers', label: 'Speakers' },
                  { id: 'media', label: 'Media' },
                  { id: 'reviews', label: 'Reviews' },
                  { id: 'certificates', label: 'Certificates' },
                  { id: 'faq', label: 'FAQ' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSection2(tab.id)}
                    className={`tab39-button ${activeSection2 === tab.id ? 'active' : ''}`}
                    role="tab"
                    aria-selected={activeSection2 === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>

              <div className="tab40-content">
                {/* Description */}
                {activeSection2 === 'description' && (
                  <section id="panel-description" role="tabpanel" aria-labelledby="tab-description">
                    <h2 className="content41-title">About This Workshop</h2>
                    <p className="content41-text">{event ? event.description : ''}</p>

                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#111827' }}>
                      What You'll Learn
                    </h3>
                    <ul style={{ color: '#4b5563', lineHeight: '1.6', paddingLeft: '20px' }}>
                      <li>Modern React development patterns and best practices</li>
                      <li>Building scalable Node.js backend applications</li>
                      <li>Cloud deployment strategies and DevOps fundamentals</li>
                      <li>API design and integration techniques</li>
                      <li>Real-world project development and collaboration</li>
                    </ul>

                    <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '24px 0 12px', color: '#111827' }}>
                      Prerequisites
                    </h3>
                    <p className="content41-text">
                      Basic knowledge of HTML, CSS, and JavaScript is required. Familiarity with programming concepts
                      and version control (Git) will be helpful but not mandatory.
                    </p>
                  </section>
                )}

                {/* Speakers */}
                {activeSection2 === 'speakers' && (
                  <section id="panel-speakers" role="tabpanel" aria-labelledby="tab-speakers">
                    <h2 className="content41-title">Meet Our Speakers</h2>
                    <div className="speakers42-grid">
                      {speakers8.map((speaker) => (
                        <div key={speaker.id} className="speaker43-card">
                          <img src={speaker.image} alt={speaker.name} className="speaker43-image" onError={imgOnError} />
                          <div className="speaker43-info">
                            <h4>{speaker.name}</h4>
                            <div className="speaker43-title">{speaker.title}</div>
                            <div className="speaker43-title" style={{ color: '#6b7280', fontWeight: '400', marginBottom: '8px' }}>
                              {speaker.company}
                            </div>
                            <p className="speaker43-bio">{speaker.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Media */}
                {activeSection2 === 'media' && (
                  <section id="panel-media" role="tabpanel" aria-labelledby="tab-media">
                    <h2 className="content41-title">Media Gallery</h2>
                    <div className="media44-grid">
                      {mediaGallery5.map((media) => (
                        <div key={media.id} className="media44-item">
                          <img src={media.fileUrl} alt={media.caption} className="media44-image" onError={imgOnError} />
                          {media.fileType === 'video' && (
                            <button className="play45-button" aria-label="Play video">
                              <Play size={24} style={{ marginLeft: '4px' }} />
                            </button>
                          )}
                          <div className="media44-overlay">
                            <div className="media44-caption">{media.caption}</div>
                          </div>
                          {currentUser.role === 'participant' && (
                            <button
                              style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                background: 'rgba(255, 255, 255, 0.9)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                              }}
                              aria-label="Like media"
                            >
                              <Heart size={16} color="#6b7280" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Reviews */}
                {activeSection2 === 'reviews' && (
                  <section id="panel-reviews" role="tabpanel" aria-labelledby="tab-reviews">
                    <div className="reviews46-header">
                      <div>
                        <h2 className="content41-title">Reviews & Feedback</h2>
                        <div className="rating47-summary">
                          <StarRating19 rating={Math.round(averageRating10)} readOnly />
                          <span className="rating47-text">
                            {averageRating10.toFixed(1)} average from {feedbackList6.length} reviews
                          </span>
                        </div>
                      </div>
                    </div>

                    {currentUser.role === 'participant' && userRegistrationStatus === 'registered' && (
                      <div className="feedback48-form">
                        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Submit Your Feedback</h3>
                        <div className="form49-group">
                          <label className="form49-label">Rating</label>
                          <StarRating19 rating={feedback4.rating} onRatingChange={(rating) => setFeedback4((prev) => ({ ...prev, rating }))} />
                        </div>
                        <div className="form49-group">
                          <label className="form49-label">Comments</label>
                          <textarea
                            value={feedback4.comment}
                            onChange={(e) => setFeedback4((prev) => ({ ...prev, comment: e.target.value }))}
                            className="form49-textarea"
                            placeholder="Share your experience with this workshop..."
                          />
                        </div>
                        <button
                          onClick={handleFeedbackSubmit15}
                          disabled={feedback4.rating === 0}
                          className="button18-primary"
                          style={{ opacity: feedback4.rating === 0 ? 0.5 : 1 }}
                        >
                          Submit Feedback
                        </button>
                      </div>
                    )}

                    <div className="reviews50-list">
                      {feedbackList6.map((review) => (
                        <div key={review.id} className="review51-item">
                          <div className="review51-header">
                            <div>
                              <div className="review51-author">{review.studentName}</div>
                              <StarRating19 rating={review.rating} readOnly />
                            </div>
                            <div className="review51-date">{review.submittedOn}</div>
                          </div>
                          <p className="review51-comment">{review.comments}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Certificates */}
                {activeSection2 === 'certificates' && (
                  <section id="panel-certificates" role="tabpanel" aria-labelledby="tab-certificates">
                    <h2 className="content41-title">Certificate of Completion</h2>
                    {currentUser.role === 'participant' && userRegistrationStatus === 'registered' ? (
                      <div className="certificate52-card">
                        <div className="certificate52-icon">
                          <Download size={24} />
                        </div>
                        <h3 className="certificate52-title">Digital Certificate</h3>
                        <p className="certificate52-subtitle">
                          Complete the workshop to earn your certificate
                        </p>
                        {certificate7.issuedOn ? (
                          <div>
                            <div className="certificate52-available">✓ Certificate ready for download</div>
                            <a href={certificate7.certificateUrl} download className="button18-primary">
                              Download Certificate
                            </a>
                          </div>
                        ) : (
                          <p style={{ color: '#6b7280' }}>
                            Certificate will be available after workshop completion
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="empty59-state">
                        <AlertCircle size={48} className="empty59-icon" />
                        <p className="empty59-text">Certificates are only available to registered participants</p>
                        {!currentUser.isLoggedIn && (
                          <button onClick={() => setShowModal1('login-required')} className="empty59-link">
                            Login to access certificates
                          </button>
                        )}
                      </div>
                    )}
                  </section>
                )}

                {/* FAQ */}
                {activeSection2 === 'faq' && (
                  <section id="panel-faq" role="tabpanel" aria-labelledby="tab-faq">
                    <h2 className="content41-title">Frequently Asked Questions</h2>
                    <div className="faq53-list">
                      {faqList9.map((faq) => (
                        <div key={faq.id} className="faq53-item">
                          <button
                            onClick={() => setExpandedFAQ3(expandedFAQ3 === faq.id ? null : faq.id)}
                            className="faq53-question"
                            aria-expanded={expandedFAQ3 === faq.id}
                            aria-controls={`faq-answer-${faq.id}`}
                          >
                            <span>{faq.question}</span>
                            {expandedFAQ3 === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                          {expandedFAQ3 === faq.id && (
                            <div className="faq53-answer" id={`faq-answer-${faq.id}`}>
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sidebar54-area" aria-label="Event details">
            <div className="sidebar54-card">
              <h3 className="sidebar54-title">Details</h3>
              <div className="detail55-item">
                <Calendar size={18} className="detail55-icon" />
                <div className="detail55-content">
                  <strong>Start:</strong>
                  <span>{event ? event.date : ''}</span>
                </div>
              </div>
              <div className="detail55-item">
                <Calendar size={18} className="detail55-icon" />
                <div className="detail55-content">
                  <strong>End:</strong>
                  <span>
                    {event
                      ? new Date(new Date(event.date).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                      : ''}
                  </span>
                </div>
              </div>
              <div className="detail55-item">
                <Clock size={18} className="detail55-icon" />
                <div className="detail55-content">
                  <strong>Time:</strong>
                  <span>{event ? event.time : ''}</span>
                </div>
              </div>
              <div className="detail55-item">
                <div style={{ width: '18px', height: '18px', background: '#3b82f6', borderRadius: '2px', flexShrink: '0', marginTop: '2px' }} />
                <div className="detail55-content">
                  <strong>Cost:</strong>
                  <span>{event ? event.cost : ''}</span>
                </div>
              </div>
              <div className="detail55-item">
                <div style={{ width: '18px', height: '18px', background: '#10b981', borderRadius: '2px', flexShrink: '0', marginTop: '2px' }} />
                <div className="detail55-content">
                  <strong>Event Categories:</strong>
                  <span>{event ? `${event.category}, Workshop` : ''}</span>
                </div>
              </div>
            </div>

            <div className="sidebar54-card">
              <h3 className="sidebar54-title">Venue</h3>
              <div className="detail55-item">
                <MapPin size={18} className="detail55-icon" />
                <div className="detail55-content">
                  <strong>{event ? event.venue : ''}</strong>
                  <span>48 Campus Drive, University City, UC 12345</span>
                </div>
              </div>
              <div className="venue56-map" aria-hidden="true">
                <div style={{ textAlign: 'center' }}>
                  <MapPin size={32} />
                  <p style={{ margin: '8px 0 0', fontSize: '14px' }}>Interactive Map</p>
                </div>
              </div>
            </div>

            <div className="sidebar54-card">
              <h3 className="sidebar54-title">Organizer</h3>
              <p style={{ fontWeight: '600', marginBottom: '16px', color: '#111827' }}>{organizerInfo.name}</p>
              <div className="contact57-item">
                <Phone size={16} />
                <span>{organizerInfo.phone}</span>
              </div>
              <div className="contact57-item">
                <Mail size={16} />
                <span>{organizerInfo.email}</span>
              </div>
              <div className="contact57-item">
                <FaGlobe size={16} />
                <span>{organizerInfo.website}</span>
              </div>
            </div>
          </aside>
        </div>

        {showModal1 && <Modal16 type={showModal1} onClose={() => setShowModal1(null)} />}
      </div>

      <LuxuryHotelFooter />
    </div>
  );
}

export default Details;