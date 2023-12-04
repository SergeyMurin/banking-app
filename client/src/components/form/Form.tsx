import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";

interface IFormProps {}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    navigate(routesConfig.path.scanner);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(routesConfig.path.photos);
    // fetch('/api/updateProduct', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Обработка ответа от сервера или локальной обработка данных
    // })
    // .catch(error => {
    //   // Обработка ошибок при отправке данных на сервер
    // });
  };

  return (
    <div>
      <h1>Edit Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </label>
        {/* Добавьте остальные поля для редактирования информации о товаре */}
        <button type="button" onClick={handleCancel}>
          Отмена
        </button>
        <button type="submit">Подтвердить</button>
      </form>
    </div>
  );
};

export default Form;
