import React, { useState, useEffect } from "react";
import dao from "../../ajax/dao";
import AddSubEquipForm from "./AddSubEquipForm";
import { useFormik } from "formik";
import ConfirmationDialog from "../common/ConfirmationDialog";
import { validate } from "../../validation/ValidateAddSubjectEquipment";
import AlertBox from "../common/AlertBox";

export default function AddSubEquipContainer(props) {
  const { singleSubject, equipmentsBySubId } = props;
  const [equipmentSelectList, setEquipmentSelectList] = useState([]);
  const [initialSubEquip, setInitialSubEquip] = useState({
    subjectId: singleSubject?.id,
    equipmentId: 0,
    priority: 0,
    obligatory: 1,
  });

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

  let subId = singleSubject?.id;

  const getSubEquipBySubId = async function (subId) {
    let result = await equipmentsBySubId(subId);
    getEquipmentsForSelect(result);
  };

  useEffect(() => {
    getSubEquipBySubId(subId);
  }, []);

  const getEquipmentsForSelect = async function (subEquipList) {
    const { success, data } = await dao.fetchEquipmentData();

    if (!success) {
      setAlertOptions({
        severity: "error",
        title: "Virhe",
        message: "Jokin meni pieleen palvelimella. Varusteita ei löytynyt.",
      });
      setAlertOpen(true);
      return;
    }

    // Here we filter out the already existing equipment in teaching
    const filteredList = data.filter((item) => {
      return !subEquipList.some((element) => {
        return element.equipmentId === item.id;
      });
    });
    setEquipmentSelectList(filteredList);
  };

  const formik = useFormik({
    initialValues: initialSubEquip,
    validate,
    onSubmit: (values) => {
      setDialogOptions({
        // Here we search for the name of the equipment whose id corresponds to values.id
        title: `Are you sure you want to add ${
          equipmentSelectList.filter((i) => i.id === values.equipmentId)[0].name
        } ?`,
        content: `By clicking continue ${
          equipmentSelectList.filter((i) => i.id === values.equipmentId)[0].name
        } will be added to the class`,
      });
      setDialogOpen(true);
      return;
    },
  });

  const addSubjectEquipment = async (values) => {
    let newSubjectEquipment = {
      subjectId: values.subjectId,
      equipmentId: values.equipmentId,
      priority: values.priority,
      obligatory: Number.parseInt(values.obligatory),
    };
    let success = await dao.postNewSubjectEquipment(newSubjectEquipment);
    if (!success) {
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
      message: "Equipment added.",
    });
    setAlertOpen(true);
    formik.resetForm();
    getSubEquipBySubId(subId);
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
        submit={addSubjectEquipment}
        submitValues={formik.values}
      />
      <AddSubEquipForm
        equipmentSelectList={equipmentSelectList}
        singleSubject={singleSubject}
        formik={formik}
      />
    </div>
  );
}
