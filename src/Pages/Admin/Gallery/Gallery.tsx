import React, { useState } from "react";
import {
  Image,
  FileText,
  AlertTriangle,
  Plus,
  Eye,
  Edit,
  Trash2,
  X,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfitLineChart from "../ProfitLineChart/ProfitLineChart";
import "./Gallery.css";

type MediaItem = {
  title: string;
  description: string;
  type: "Image" | "Video";
  file: File | null;
};

const Gallery: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    { title: "Event Photo 1", description: "Tech Symposium 2024", type: "Image", file: null },
    { title: "Event Photo 2", description: "Tech Symposium 2024", type: "Image", file: null },
  ]);

  const [newMedia, setNewMedia] = useState<MediaItem>({
    title: "",
    description: "",
    type: "Image",
    file: null,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMedia((prev) => ({ ...prev, [name]: value }));
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewMedia((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const successToast = (message: string) => {
    toast.success(message);
  };

  // Save new or edited media
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editIndex !== null) {
      setMediaItems((prev) =>
        prev.map((item, i) => (i === editIndex ? newMedia : item))
      );
      successToast("Media updated");
    } else {
      setMediaItems((prev) => [...prev, newMedia]);
      successToast("Media added");
    }

    setNewMedia({ title: "", description: "", type: "Image", file: null });
    setIsEditing(false);
    setEditIndex(null);
    setShowForm(false);
  };

  // Delete media
  const handleDelete = (index: number) => {
    setMediaItems((prev) => prev.filter((_, i) => i !== index));
    successToast("Media deleted");
  };

  // Edit media
  const handleEdit = (index: number) => {
    setNewMedia(mediaItems[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="gallery-section-1">
      {/* Toast container with default styling */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="section-header-1">
        <h3>Media Gallery Management</h3>
        <button
          className="btn-1 btn-primary-1"
          aria-label="Upload media"
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setEditIndex(null);
          }}
        >
          <Plus size={16} />
          Upload Media
        </button>
      </div>

      {/* Stats */}
      <div className="gallery-stats-1" role="region" aria-label="Gallery statistics">
        <div className="gallery-stat-1">
          <Image size={50} />
          <ProfitLineChart />
          <div>
            <h4>{mediaItems.filter((m) => m.type === "Image").length}</h4>
            <p>Total Images</p>
          </div>
        </div>
        <div className="gallery-stat-1">
          <FileText size={50} />
          <ProfitLineChart />
          <div>
            <h4>{mediaItems.filter((m) => m.type === "Video").length}</h4>
            <p>Videos</p>
          </div>
        </div>
        <div className="gallery-stat-1">
          <AlertTriangle size={50} />
          <ProfitLineChart />
          <div>
            <h4>5</h4>
            <p>Flagged Content</p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid-1" role="list" aria-label="Media gallery">
        {mediaItems.map((item, i) => (
          <div key={i} className="gallery-item-1" role="listitem">
            <div className="gallery-thumbnail-1">
              <div className="placeholder-image-1">
                <Image size={32} />
              </div>
            </div>
            <div className="gallery-item-info-1">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <div className="gallery-actions-1" role="toolbar">
                <button className="action-btn-1" aria-label="View media">
                  <Eye size={16} />
                </button>
                <button
                  className="action-btn-1"
                  aria-label="Edit media"
                  onClick={() => handleEdit(i)}
                >
                  <Edit size={16} />
                </button>
                <button
                  className="action-btn-1 danger-1"
                  aria-label="Delete media"
                  onClick={() => handleDelete(i)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Media Modal */}
      {showForm && (
        <div className="modal-overlay-1">
          <div className="modal-1">
            <div className="modal-header-1">
              <h3>{isEditing ? "Edit Media" : "Upload New Media"}</h3>
              <button
                className="close-btn-1"
                onClick={() => {
                  setShowForm(false);
                  setIsEditing(false);
                  setEditIndex(null);
                }}
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="form-1">
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={newMedia.title}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={newMedia.description}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Type:
                <select
                  name="type"
                  value={newMedia.type}
                  onChange={handleChange}
                >
                  <option value="Image">Image</option>
                  <option value="Video">Video</option>
                </select>
              </label>
              <label>
                File:
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  required={!isEditing}
                />
              </label>
              <div className="form-actions-1">
                <button type="submit" className="btn-1 btn-primary-1">
                  {isEditing ? "Update" : "Save"}
                </button>
                <button
                  type="button"
                  className="btn-1"
                  onClick={() => {
                    setShowForm(false);
                    setIsEditing(false);
                    setEditIndex(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
