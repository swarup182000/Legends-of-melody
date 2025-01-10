import React, { useState } from "react";

const AIPlanet = () => {
  const [uploadedFiles, setUploadedFiles] = useState(
    JSON.parse(localStorage.getItem("uploadedFiles")) || []
  );

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = {
          name: file.name,
          size: file.size,
          type: file.type,
          content: reader.result, // Base64 file content
        };

        const updatedFiles = [...uploadedFiles, fileData];
        setUploadedFiles(updatedFiles);
        localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
        alert(`File "${file.name}" uploaded and saved!`);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/AI Planet Logo.png" alt="AI Planet Logo" />
        </div>
        <ul className="nav-links">
          <div className="pdf">
            <li>
              <a href="#">
                <i className="bx bx-file-blank"></i> demo.pdf
              </a>
            </li>
          </div>
          <div className="pdf">
            <li id="upload-btn-desktop">
              <i className="bx bx-plus-circle"></i>
              <a
                href="#"
                id="upload-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("file-input").click();
                }}
              >
                Upload PDF
              </a>
            </li>
          </div>
          <div className="upload">
            <li
              id="upload-btn-mobile"
              onClick={() => document.getElementById("file-input").click()}
            >
              <i className="bx bx-plus-circle"></i>
            </li>
          </div>
          <input
            type="file"
            id="file-input"
            accept=".pdf"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </ul>
      </nav>

      {/* Main Section */}
      <div className="main">
        <h1>S</h1>
        <h4>explain like in 5</h4>
      </div>

      {/* Description */}
      <div className="discription">
        <img src="/Frame 1000003278 (2) 2.png" alt="Description" />
        <p>
          Our own Large Language Model (LLM) is a type of AI that can learn
          from data. We have trained it on 7 billion parameters, making it
          better than other LLMs. We are featured on aiplanet.com and work with
          leading enterprises to help them use AI securely and privately. Our
          Generative AI Stack reduces hallucinations in LLMs and allows
          enterprises to use AI in their applications.
        </p>
      </div>

      {/* Message Section */}
      <div className="message">
        <input type="text" placeholder="Send Message" />
        <div className="icon">
          <i className="bx bxs-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AIPlanet;
