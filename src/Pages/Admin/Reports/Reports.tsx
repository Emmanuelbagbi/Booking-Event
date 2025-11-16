import React from 'react';
import { FileText, Users, Award, Star, Download } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Reports.css';

interface Feedback {
  id: number;
  event: string;
  rating: number;
  comments: string;
  student: string;
  date: string;
}

interface ReportsProps {
  recentFeedback: Feedback[];
}

const Reports: React.FC<ReportsProps> = ({ recentFeedback }) => {
  // Handler for generating reports
  const handleGenerate = (type: string) => {
    // Later, replace this with API calls like:
    // fetch(`/api/reports/${type}`).then(...)
    toast.success(`Generating ${type} report...`, {
      position: "top-right",
      autoClose: 3000,
    });
    console.log(`Generating ${type} report...`);
  };

  return (
    <div className="reports-section-1">
      {/* Toast Container */}
      <ToastContainer />

      <div className="section-header-1">
        <h3>Reports & Analytics</h3>
        <button
          className="btn-1 btn-primary-1"
          aria-label="Generate report"
          onClick={() => handleGenerate("all")}
        >
          <Download size={16} />
          Generate Report
        </button>
      </div>

      <div className="report-cards-1" role="region" aria-label="Report options">
        <div className="report-card-1">
          <FileText size={24} />
          <h4>Event Reports</h4>
          <p>Comprehensive event statistics and participation data</p>
          <button
            className="btn-1 btn-outline-1"
            aria-label="Generate event report"
            onClick={() => handleGenerate("event")}
          >
            Generate
          </button>
        </div>

        <div className="report-card-1">
          <Users size={24} />
          <h4>User Analytics</h4>
          <p>User engagement and registration patterns</p>
          <button
            className="btn-1 btn-outline-1"
            aria-label="Generate user analytics"
            onClick={() => handleGenerate("user")}
          >
            Generate
          </button>
        </div>

        <div className="report-card-1">
          <Award size={24} />
          <h4>Certificate Reports</h4>
          <p>Certificate issuance and download statistics</p>
          <button
            className="btn-1 btn-outline-1"
            aria-label="Generate certificate report"
            onClick={() => handleGenerate("certificate")}
          >
            Generate
          </button>
        </div>

        <div className="report-card-1">
          <Star size={24} />
          <h4>Feedback Analysis</h4>
          <p>Event ratings and feedback trends</p>
          <button
            className="btn-1 btn-outline-1"
            aria-label="Generate feedback analysis"
            onClick={() => handleGenerate("feedback")}
          >
            Generate
          </button>
        </div>
      </div>

      <div className="feedback-section-1" role="region" aria-label="Recent feedback">
        <h3>Recent Feedback</h3>
        <div className="feedback-list-1" role="list">
          {recentFeedback.map((feedback) => (
            <div key={feedback.id} className="feedback-item-1" role="listitem">
              <div className="feedback-header-1">
                <h4>{feedback.event}</h4>
                <div className="rating-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(feedback.rating) ? 'star-filled-1' : 'star-empty-1'}
                    />
                  ))}
                  <span>{feedback.rating}</span>
                </div>
              </div>
              <p>{feedback.comments}</p>
              <div className="feedback-meta-1">
                <span>by {feedback.student}</span>
                <span>{feedback.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
