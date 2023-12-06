import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import AddFieldModal from "./AddFieldModal";
import DeleteIcon from "@mui/icons-material/Delete";

interface IFormProps {}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  const { id } = useParams();
  const [formData, setFormData] = useState<any>({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const mockData = {
      id: "1e94c8b8-35e6-4d24-bb2b-0afceb178940",
      date: "2023-11-28T9:50:00",
      client: {
        name: "Pavel",
        secondName: "Urusov",
        lastName: "Ivanovich",
        age: 23,
      },
      product: {
        title: "TV Samsung Smart TV",
        category: "electronic",
        amount: 2,
        reason: "For bar interior",
        price: "343.3",
      },
    };
    setFormData(mockData);
  }, []);

  const handleAddField = (fieldName: string, fieldType: string) => {
    if (!formData.hasOwnProperty(fieldName)) {
      let fieldValue: any = "";
      switch (fieldType) {
        case "text":
        case "number":
          fieldValue = 0;
          break;
        case "checkbox":
          fieldValue = false;
          break;
        case "date":
          fieldValue = new Date().toISOString().substr(0, 10);
          break;
        // Добавьте другие типы полей по аналогии
        default:
          fieldValue = "";
          break;
      }

      setFormData((prevData: any) => ({
        ...prevData,
        [fieldName]: fieldValue,
        [`${fieldName}_type`]: fieldType,
      }));
    } else {
      alert("This field already exists.");
    }
  };

  const handleRemoveField = (fieldName: string) => {
    const {
      [fieldName]: removedField,
      [`${fieldName}_type`]: removedFieldType,
      ...rest
    } = formData;
    setFormData(rest);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const isChecked = e.target.checked;
    setFormData((prevData: any) => ({
      ...prevData,
      [fieldName]: isChecked,
    }));
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string,
    innerKey?: string
  ) => {
    const value = e.target.value;

    setFormData((prevData: any) => {
      if (innerKey) {
        return {
          ...prevData,
          [fieldName]: {
            ...prevData[fieldName],
            [innerKey]: value,
          },
        };
      }
      return {
        ...prevData,
        [fieldName]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalFormData: any = {};
    Object.keys(formData).forEach((key) => {
      if (!key.includes("_type")) {
        finalFormData[key] = formData[key];
      }
    });
    console.log(finalFormData); // Отправка на сервер или другие действия
  };

  const renderInputField = (key: string) => {
    const fieldType = formData[`${key}_type`];
    const value = formData[key];

    switch (fieldType) {
      case "text":
      case "number":
        return (
          <TextField
            key={key}
            fullWidth
            label={key}
            type="number"
            variant="outlined"
            value={value}
            onChange={(e) => handleFieldChange(e, key)}
          />
        );
      case "checkbox":
        return (
          <Grid item key={key}>
            <label>{key}</label>
            <Checkbox
              checked={value}
              onChange={(e) => handleCheckboxChange(e, key)}
            />
          </Grid>
        );
      case "date":
        return (
          <TextField
            key={key}
            fullWidth
            label={key}
            variant="outlined"
            type="date"
            value={value}
            onChange={(e) => handleFieldChange(e, key)}
          />
        );
      // Добавьте другие типы полей по аналогии
      default:
        return null;
    }
  };

  return (
    <Box maxWidth={600} m="auto" p={3} component={Paper}>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Form {id}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {Object.keys(formData).map((key) => (
            <Grid key={key} item xs={12} md={6}>
              {typeof formData[key] === "object" ? (
                Object.keys(formData[key]).map((innerKey) => (
                  <TextField
                    key={innerKey}
                    fullWidth
                    label={innerKey}
                    variant="outlined"
                    value={formData[key][innerKey]}
                    onChange={(e) => handleFieldChange(e, key, innerKey)}
                  />
                ))
              ) : (
                <>
                  {renderInputField(key)}
                  {key !== "id" && key.split("_")[1] !== "type" && (
                    <IconButton onClick={() => handleRemoveField(key)}>
                      <DeleteIcon />
                    </IconButton>
                  )}
                </>
              )}
            </Grid>
          ))}
        </Grid>
        <Box mt={3} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Add Field
          </Button>
          <AddFieldModal
            open={modalOpen}
            handleClose={handleCloseModal}
            handleAddField={handleAddField}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
