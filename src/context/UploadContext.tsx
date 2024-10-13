import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UploadContextType {
  isMinimized: boolean;
  progress: number;
  uploading: boolean;
  startUpload: () => void;
  cancelUpload: () => void;
  closeUpload: () => void;
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export const UploadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const startUpload = () => {
    setUploading(true);
    setProgress(0);
    setIsMinimized(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  const cancelUpload = () => {
    setUploading(false);
    setProgress(0);
    setIsMinimized(false);
  };

  const closeUpload = () => {
    setIsMinimized(false);
  };

  return (
    <UploadContext.Provider value={{ isMinimized, progress, uploading, startUpload, cancelUpload, closeUpload }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUpload = () => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error('useUpload must be used within an UploadProvider');
  }
  return context;
};