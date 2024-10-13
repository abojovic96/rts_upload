import React, { useState } from 'react';
import './UploadComponent.css';
import { useUpload } from '../../context/UploadContext';

const UploadComponent: React.FC = () => {
    const { startUpload, uploading, progress } = useUpload();
    
    const [fileName, setFileName] = useState('');
    const [description, setDescription] = useState('');
    
    return (
        <div className="upload-container">
        <h2>File Upload</h2>
        <input
          type="text"
          placeholder="File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={startUpload} disabled={uploading}>
          Start Upload
        </button>
        {uploading && (
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
            <div>{progress}%</div>
          </div>
        )}
      </div>
    );
  };

  export default UploadComponent;