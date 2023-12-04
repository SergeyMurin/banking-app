import * as React from "react";
import Photos from "../components/photos/Photos";

interface IPhotosPageProps {}

const PhotosPage: React.FunctionComponent<IPhotosPageProps> = (props) => {
  return (
    <div>
      <Photos />
    </div>
  );
};

export default PhotosPage;
