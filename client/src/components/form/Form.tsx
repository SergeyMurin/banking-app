import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

interface IFormProps {}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  const { id } = useParams();
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    // Здесь обычно будет запрос к API для получения данных по id
    // Временно используем статический объект данных
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

  const renderFields = (data: any) => {
    return Object.keys(data).map((key) => {
      if (typeof data[key] === "object") {
        return (
          <Grid key={key} container spacing={2}>
            <Typography variant="h6">{key}</Typography>
            {renderFieldsForObject(key, data[key])}
          </Grid>
        );
      } else {
        return (
          <Grid key={key} item xs={12} md={6}>
            <TextField
              fullWidth
              label={key}
              variant="outlined"
              value={data[key]}
              disabled={key === "client"}
              onChange={(e) => handleInputChange(e, key)}
            />
          </Grid>
        );
      }
    });
  };

  const renderFieldsForObject = (parentKey: string, obj: any) => {
    return Object.keys(obj).map((key) => (
      <Grid key={key} item xs={12} md={6}>
        <TextField
          fullWidth
          label={key}
          variant="outlined"
          value={obj[key]}
          disabled={parentKey === "client"}
          onChange={(e) => handleInputChangeForObject(e, parentKey, key)}
        />
      </Grid>
    ));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const value = e.target.value;
    setFormData((prevData: any) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleInputChangeForObject = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    parentKey: string,
    key: string
  ) => {
    const value = e.target.value;
    setFormData((prevData: any) => ({
      ...prevData,
      [parentKey]: {
        ...prevData[parentKey],
        [key]: value,
      },
    }));
  };

  return (
    <Box maxWidth={600} m="auto" p={3} component={Paper}>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Form {id}
      </Typography>
      <form>
        <Grid container spacing={3}>
          {renderFields(formData)}
        </Grid>
        <Box mt={3} display="flex" justifyContent="center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Form;
