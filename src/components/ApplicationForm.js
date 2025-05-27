import React, { useState } from 'react'
import "../style/Form.css"

export default function ApplicationForm() {

    const [formData, setFormData] = useState({
        applicantName: '',
        applicantEmail: '',
        password: '',
        gender: '',
        countries: [],
        job: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const countriesList = ['USA', 'India', 'Canada'];
      const jobs = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
    
      const validate = () => {
        const newErrors = {};
    
        if (!formData.applicantName.trim()) {
          newErrors.applicantName = 'Name is required.';
        }
    
        if (!formData.applicantEmail) {
          newErrors.applicantEmail = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.applicantEmail)) {
          newErrors.applicantEmail = 'Email is invalid.';
        }
    
        if (!formData.password || formData.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters.';
        }
    
        if (!formData.gender) {
          newErrors.gender = 'Please select a gender.';
        }
    
        if (formData.countries.length === 0) {
          newErrors.countries = 'Please select at least one country.';
        }
    
        if (!formData.job) {
          newErrors.job = 'Please select a job.';
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
      };
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === 'checkbox' && name === 'countries') {
          const updatedCountries = checked
            ? [...formData.countries, value]
            : formData.countries.filter((country) => country !== value);
    
          setFormData({ ...formData, countries: updatedCountries });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          alert('Form submitted successfully!');
          console.log('Submitted data:', formData);
          // Clear form
          setFormData({
            applicantName: '',
            applicantEmail: '',
            password: '',
            gender: '',
            countries: [],
            job: '',
          });
          setErrors({});
        }
      };

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="form-group">
          <label>Applicant Name</label>
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
          />
          {errors.applicantName && <span className="error">{errors.applicantName}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Applicant Email</label>
          <input
            type="email"
            name="applicantEmail"
            value={formData.applicantEmail}
            onChange={handleChange}
          />
          {errors.applicantEmail && <span className="error">{errors.applicantEmail}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleChange} checked={formData.gender === 'Other'} /> Other</label>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        {/* Country */}
        <div className="form-group">
          <label>Select Country</label>
          <div className="checkbox-group">
            {countriesList.map((country) => (
              <label key={country}>
                <input
                  type="checkbox"
                  name="countries"
                  value={country}
                  onChange={handleChange}
                  checked={formData.countries.includes(country)}
                />
                {country}
              </label>
            ))}
          </div>
          {errors.countries && <span className="error">{errors.countries}</span>}
        </div>

        {/* Job */}
        <div className="form-group">
          <label>Select Job</label>
          <select name="job" value={formData.job} onChange={handleChange}>
            <option value="">-- Choose a job --</option>
            {jobs.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>
          {errors.job && <span className="error">{errors.job}</span>}
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}
