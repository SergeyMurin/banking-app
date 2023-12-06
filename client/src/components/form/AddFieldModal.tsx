import {
  Modal,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";

interface IAddFieldModalProps {
  open: boolean;
  handleClose: () => void;
  handleAddField: (fieldName: string, fieldType: string) => void;
}

const AddFieldModal: React.FunctionComponent<IAddFieldModalProps> = ({
  open,
  handleClose,
  handleAddField,
}) => {
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("");

  const handleAdd = () => {
    handleAddField(fieldName, fieldType);
    setFieldName("");
    setFieldType("");
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FormControl fullWidth margin="normal">
          <InputLabel id="field-type-label">Field Type</InputLabel>
          <Select
            labelId="field-type-label"
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value)}
          >
            <MenuItem value="text">Text</MenuItem>
            <MenuItem value="number">Number</MenuItem>
            <MenuItem value="checkbox">Checkbox</MenuItem>
            <MenuItem value="date">Date</MenuItem>
            {/* Добавьте другие типы полей по аналогии */}
          </Select>
        </FormControl>
        <TextField
          label="Field Name"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Field
        </Button>
      </Box>
    </Modal>
  );
};

export default AddFieldModal;
