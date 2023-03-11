import React, { useState } from "react";
import { CardHeader, Card, CardContent } from "@mui/material";
import AlertBox from "../common/AlertBox";
import { useFormik } from "formik";
import ConfirmationDialog from "../common/ConfirmationDialog";
import { capitalizeFirstLetter } from "../../validation/ValidateAddAllocRound";
import dao from "../../ajax/dao";
import AddAllocRoundForm from "./AddAllocRoundForm";

//const baseUrl = process.env.REACT_APP_BE_SERVER_BASE_URL;
//import {BASEURL} from "../config/consts.js";
//const baseUrl = BASEURL;

export default function AddAllocRound(props) {
  const { getAllAllocRounds, allAllocRoundsList } = props;
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertOptions, setAlertOptions] = useState({
    title: "This is title",
    message: "This is an error alert — check it out!",
    severity: "error",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOptions, setDialogOptions] = useState({
    title: "this is dialog",
    content: "Something here",
  });
  // Here the initialvalues ​​of the form are stored in the state
  const [initialAllocRound, setInitialAllocRound] = useState({
    name: "",
    description: "",
  });

  const resetFormm = () => {
    setInitialAllocRound({
      name: "",
      description: "",
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialAllocRound,
    onSubmit: (values) => {
      setDialogOptions({
        title: `Are you sure you want to add ${values.name}?`,
        content: `By clicking continue, ${values.name} will be added to the allocation round list`,
      });
      setDialogOpen(true);

      return;
    },
  });

  const addAllocRound = async (submitValues) => {
    let capitalName = capitalizeFirstLetter(submitValues.name);
    let newAllocRound = {
      name: capitalName,
      description: submitValues.description,
    };

    let result = await dao.postNewAllocRound(newAllocRound);
    if (!result) {
      setAlertOptions({
        severity: "error",
        title: "Error",
        message: "Something went wrong - please try again later.",
      });
      setAlertOpen(true);
      return;
    }
    setAlertOptions({
      severity: "success",
      title: "Success!",
      message: `${submitValues.name} added.`,
    });
    setAlertOpen(true);
    resetFormm();
    getAllAllocRounds();
  };
  // Here is a list of lessons
  // When you choose a lesson, the information goes to the form's initialvalues
  const handleChange = (e) => {
    let selected = e.target.value;
    setInitialAllocRound({
      name: formik.values.name, // This is so that the entered name does not change even if you select the data of an existing lesson
      description: selected.description,
    });
  };

  return (
    <div>
      <AlertBox
        alertOpen={alertOpen}
        alertOptions={alertOptions}
        setAlertOpen={setAlertOpen}
      />
      <ConfirmationDialog
        dialogOpen={dialogOpen}
        dialogOptions={dialogOptions}
        setDialogOpen={setDialogOpen}
        submit={addAllocRound}
        submitValues={formik.values}
      />
      <Card
        variant="outlined"
        sx={{
          width: "65%",
          padding: 1,
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <CardContent>
          <CardHeader
            title="Add allocation round"
            sx={{ marginBottom: "30px" }}
          />
          <AddAllocRoundForm
            handleChange={handleChange}
            formik={formik}
            submitValues={formik.values}
            setInitialAllocRound={setInitialAllocRound}
            allAllocRoundsList={allAllocRoundsList}
          />
        </CardContent>
      </Card>
    </div>
  );
}
