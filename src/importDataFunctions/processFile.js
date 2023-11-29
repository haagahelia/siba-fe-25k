import Papa from "papaparse";
import Logger from "../logger/logger";

const isUploaded = (file) => {
  return file;
};

const isValidType = (file) => {
  if (file.name.substring(file.name.lastIndexOf(".") + 1) === "csv") {
    return file.type === "text/csv" || file.type === "application/vnd.ms-excel";
  } else {
    Logger.debug("File type error, type: ", file.type);
    return false;
  }
};

const fileToArray = (file, setDataToImport) => {
  Papa.parse(file, {
    header: true,
    delimiter: "", // auto detect delimiter
    skipEmptyLines: "greedy",
    dynamicTyping: true,
    complete: (result) => {
      setDataToImport(result.data);
      Logger.debug("data from file", result.data);
    },
  });
};

export const processFile = (
  e,
  setDataToImport,
  setAlertOpen,
  setAlertOptions,
) => {
  const file = e.target.files[0];

  if (!isUploaded(file)) {
    return;
  } else if (!isValidType(file)) {
    setAlertOptions({
      severity: "error",
      title: "Invalid file type",
      message: "Please upload a .csv file.",
    });
    setAlertOpen(true);

    return;
  } else {
    fileToArray(file, setDataToImport);
  }
};
