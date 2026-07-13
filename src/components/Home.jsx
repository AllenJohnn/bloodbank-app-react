import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container text-center" style={{ maxWidth: '500px' }}>
        
        <h1 style={{ color: '#333', fontSize: '1.75rem', marginBottom: '30px' }}>
          Blood Bank App
        </h1>
        
        <div className="row g-3">
          <div className="col-12 col-sm-6 d-grid">
            <Link to="/add" className="btn" style={{ 
              backgroundColor: '#f1f3f5', 
              color: '#495057', 
              border: '1px solid #dee2e6' 
            }}>
              Add Donor
            </Link>
          </div>
          
          <div className="col-12 col-sm-6 d-grid">
            <Link to="/view" className="btn" style={{ 
              backgroundColor: '#f4fce3', 
              color: '#2b8a3e', 
              border: '1px solid #d8f5a2' 
            }}>
              View Donors
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home