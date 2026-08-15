import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { complaints } from "../data/mockData";

function Complaints() {

  const [showForm, setShowForm] = useState(false);

  const [newComplaint, setNewComplaint] = useState({
    location: "",
    type: "Garbage Accumulation",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Complaint submitted successfully! Backend integration will store it."
    );

    setNewComplaint({
      location: "",
      type: "Garbage Accumulation",
      description: "",
    });

    setShowForm(false);
  };

  return (
    <div>

      <SectionTitle
        title="Citizen Complaints"
        subtitle="Track and manage waste-related complaints"
        action={
          <button
            className="primary-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + New Complaint
          </button>
        }
      />

      {showForm && (

        <div className="panel complaint-form">

          <SectionTitle
            title="Report a Waste Issue"
            subtitle="Prototype citizen complaint form"
          />

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Location</label>

                <input
                  value={newComplaint.location}
                  onChange={(e) =>
                    setNewComplaint({
                      ...newComplaint,
                      location: e.target.value,
                    })
                  }
                  placeholder="Enter location"
                  required
                />
              </div>

              <div className="form-group">
                <label>Complaint Type</label>

                <select
                  value={newComplaint.type}
                  onChange={(e) =>
                    setNewComplaint({
                      ...newComplaint,
                      type: e.target.value,
                    })
                  }
                >
                  <option>Garbage Accumulation</option>
                  <option>Missed Collection</option>
                  <option>Overflowing Bin</option>
                  <option>Low Segregation</option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                value={newComplaint.description}
                onChange={(e) =>
                  setNewComplaint({
                    ...newComplaint,
                    description: e.target.value,
                  })
                }
                placeholder="Describe the issue..."
                rows="4"
                required
              />
            </div>

            <button className="primary-btn">
              Submit Complaint
            </button>

          </form>

        </div>

      )}

      <div className="complaint-stats">

        <div>
          <span>OPEN</span>
          <strong>12</strong>
        </div>

        <div>
          <span>IN PROGRESS</span>
          <strong>8</strong>
        </div>

        <div>
          <span>RESOLVED</span>
          <strong>46</strong>
        </div>

      </div>

      <div className="panel">

        <SectionTitle
          title="Recent Complaints"
          subtitle="Latest citizen reports"
        />

        <div className="data-table">

          <div className="table-head complaint-head">
            <span>ID</span>
            <span>Location</span>
            <span>Type</span>
            <span>Priority</span>
            <span>Status</span>
          </div>

          {complaints.map((complaint) => (

            <div
              className="table-row complaint-row"
              key={complaint.id}
            >

              <strong>{complaint.id}</strong>

              <span>{complaint.location}</span>

              <span>{complaint.type}</span>

              <span
                className={`badge ${
                  complaint.priority.toLowerCase()
                }`}
              >
                {complaint.priority}
              </span>

              <span
                className={`status-badge ${
                  complaint.status
                    .toLowerCase()
                    .replace(" ", "-")
                }`}
              >
                {complaint.status}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Complaints;