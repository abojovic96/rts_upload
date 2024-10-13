import React from 'react';
import './MinimizedUploadComponent.css';

interface MinimizedUploadProps {
  progress: number;
  onCancel: () => void;
  onClose: () => void;
}

const MinimizedUpload: React.FC<MinimizedUploadProps> = ({ progress, onCancel, onClose }) => (
  <div className="minimized-upload">
    <div className="progress-bar" style={{ width: `${progress}%` }} />
    <div>{progress}%</div>
    <button onClick={onCancel}>Cancel</button>
    {progress === 100 && <button onClick={onClose}>Close</button>}
  </div>
);

export default MinimizedUpload;