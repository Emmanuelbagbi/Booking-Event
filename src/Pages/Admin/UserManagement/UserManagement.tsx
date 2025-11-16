import React, { useState } from 'react';
import { Users, UserCheck, Shield, Plus, Eye, Edit, Trash2, X } from 'lucide-react';
import ProfitLineChart from '../ProfitLineChart/ProfitLineChart';
import './UserManagement.css';
import { toast } from 'react-toastify';

const UserManagement: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [users, setUsers] = useState([
    { name: 'John Smith', email: 'john.smith@college.edu', role: 'Student', department: 'Computer Science', status: 'Active' },
    { name: 'Dr. Sarah Johnson', email: 'sarah.j@college.edu', role: 'Organizer', department: 'Computer Science', status: 'Active' },
  ]);

  const [formUser, setFormUser] = useState({
    name: '',
    email: '',
    role: 'Student',
    department: '',
    status: 'Active',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormUser(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing && editIndex !== null) {
      setUsers(prev =>
        prev.map((user, i) => (i === editIndex ? formUser : user))
      );
      toast.success(`User "${formUser.name}" updated successfully`);
    } else {
      setUsers(prev => [...prev, formUser]);
      toast.success(`User "${formUser.name}" added successfully`);
    }

    setFormUser({ name: '', email: '', role: 'Student', department: '', status: 'Active' });
    setShowForm(false);
    setIsEditing(false);
    setEditIndex(null);
  };


  const handleDelete = (index: number) => {
    const userName = users[index].name;
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(prev => prev.filter((_, i) => i !== index));
      toast.success(`User "${userName}" deleted`);
    }
  };


  const handleEdit = (index: number) => {
    setFormUser(users[index]);
    setEditIndex(index);
    setIsEditing(true);
    setShowForm(true);
  };

  
  const studentCount = users.filter(u => u.role === "Student").length;
  const organizerCount = users.filter(u => u.role === "Organizer").length;
  const adminCount = users.filter(u => u.role === "Admin").length;

  return (
    <div className="user-management-1">
      <div className="section-header-1">
        <h3>User Management</h3>
        <button 
          className="btn-1 btn-primary-1" 
          aria-label="Add new user"
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setFormUser({ name: '', email: '', role: 'Student', department: '', status: 'Active' });
          }}
        >
          <Plus size={16} />
          Add User
        </button>
      </div>

      
      <div className="user-stats-1" role="region" aria-label="User statistics">
        <div className="user-stat-card-1">
          <Users size={50} />
          <ProfitLineChart />
          <div>
            <h4>{studentCount}</h4>
            <p>Students</p>
          </div>
        </div>
        <div className="user-stat-card-1">
          <UserCheck size={50} />
          <ProfitLineChart />
          <div>
            <h4>{organizerCount}</h4>
            <p>Organizers</p>
          </div>
        </div>
        <div className="user-stat-card-1">
          <Shield size={50} />
          <ProfitLineChart />
          <div>
            <h4>{adminCount}</h4>
            <p>Admins</p>
          </div>
        </div>
      </div>

    
      <div className="user-table-container-1">
        <table className="users-table-1" role="grid">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} role="row">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge-1 ${user.role.toLowerCase()}-1`}>{user.role}</span>
                </td>
                <td>{user.department}</td>
                <td>
                  <span className={`status-badge-1 status-${user.status.toLowerCase()}-1`}>{user.status}</span>
                </td>
                <td>
                  <div className="table-actions-1" role="toolbar">
                    <button className="action-btn-1" aria-label="View user">
                      <Eye size={16} />
                    </button>
                    <button 
                      className="action-btn-1" 
                      aria-label="Edit user"
                      onClick={() => handleEdit(index)}
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      className="action-btn-1 danger-1" 
                      aria-label="Delete user"
                      onClick={() => handleDelete(index)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      {showForm && (
        <div className="modal-overlay-1">
          <div className="modal-1">
            <div className="modal-header-1">
              <h3>{isEditing ? 'Edit User' : 'Add New User'}</h3>
              <button className="close-btn-1" onClick={() => setShowForm(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="form-1">
              <label>
                Name:
                <input type="text" name="name" value={formUser.name} onChange={handleChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formUser.email} onChange={handleChange} required />
              </label>
              <label>
                Role:
                <select name="role" value={formUser.role} onChange={handleChange}>
                  <option value="Student">Student</option>
                  <option value="Organizer">Organizer</option>
                  <option value="Admin">Admin</option>
                </select>
              </label>
              <label>
                Department:
                <input type="text" name="department" value={formUser.department} onChange={handleChange} required />
              </label>
              <label>
                Status:
                <select name="status" value={formUser.status} onChange={handleChange}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
              <div className="form-actions-1">
                <button type="submit" className="btn-1 btn-primary-1">
                  {isEditing ? 'Update' : 'Save'}
                </button>
                <button type="button" className="btn-1" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;