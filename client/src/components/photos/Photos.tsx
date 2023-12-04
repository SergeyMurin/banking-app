import * as React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";

interface IPhotosProps {}

const Photos: React.FunctionComponent<IPhotosProps> = (props) => {
  const [images, setImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileList = event.target.files;
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const base64Image = await readFileAsDataURL(file);
        if (base64Image) {
          setImages((prevImages) => [base64Image, ...prevImages]);
        }
      }
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const readFileAsDataURL = (file: File): Promise<string | undefined> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          resolve(event.target.result as string);
        } else {
          resolve(undefined);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleConfirm = () => {
    navigate(routesConfig.path.home);
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${index}`} />
            <button onClick={() => removeImage(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={handleConfirm} disabled={!images.length}>
        Confirm
      </button>
    </div>
  );
};

export default Photos;
