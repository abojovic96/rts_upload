import { Outlet, Link, useLocation } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { useUpload } from "../context/UploadContext";
import ReactDOM from 'react-dom';
import MinimizedUpload from "../components/MinimizedUploadComponent/MinimizedUploadComponent";

export default function MainLayout(){
    return (
        <Fragment>
            <Link to="/home">Home</Link>
            <Link to="/uploads">Uploads</Link>
            <Outlet />
            <UploadPortal />
        </Fragment>
    )
}

const UploadPortal: React.FC = () => {
    const location = useLocation();
    const { isMinimized, progress, cancelUpload, closeUpload } = useUpload();

    const isUploadPage = location.pathname === '/uploads';
  
    return (
      isMinimized && !isUploadPage &&
      ReactDOM.createPortal(
        <MinimizedUpload
          progress={progress}
          onCancel={cancelUpload}
          onClose={closeUpload}
        />,
        document.body
      )
    );
  };