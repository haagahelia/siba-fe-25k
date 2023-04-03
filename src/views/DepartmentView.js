import React, { useState, useEffect } from "react";
import dao from "../ajax/dao";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import { CardHeader, Card, Container } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import DepartmentDialog from "../components/department/DepartmentDialog";

import AddDepartment from "../components/department/AddDepartment";

export default function DepartmentView() {
  const [DepartmentList, setDepartmentList] = useState([]);
  const [singleDepartment, setSingleDepartment] = useState();
  const [open, setOpen] = useState(false);
  const [alertOptions, setAlertOptions] = useState({
    message: "This is an error alert — check it out!",
    severity: "error",
  });
  const [alertOpen, setAlertOpen] = useState(false);

  const getAllDepartments = async function () {
    const { success, data } = await dao.fetchDepartmentData();
    if (!success) {
      setAlertOptions({
        severity: "error",
        title: "Error",
        message:
          "Oops! Something went wrong on the server. Department not found",
      });
      setAlertOpen(true);
      return;
    } else {
      setDepartmentList(data);
    }
  };

  useEffect(() => {
    getAllDepartments();
  }, []);

  return (
    <>
      <DepartmentDialog
        open={open}
        setOpen={setOpen}
        singleDepartment={singleDepartment}
        setSingleDepartment={setSingleDepartment}
        getAllDepartments={getAllDepartments}
      />
      <Container maxWidth="100%">
        <Grid
          container
          rowSpacing={0.5}
          justifyContent="space-evenly"
          alignItems="flex-start"
          marginTop="20px"
        >
          <Card variant="outlined">
            <CardContent>
              <CardHeader title="Department" />
              <AddDepartment getAllDepartments={getAllDepartments} />
              {DepartmentList.map((value) => {
                return (
                  <List key={value.id}>
                    <ListItem
                      onClick={() => {
                        setSingleDepartment(value);
                        setOpen(true);
                      }}
                    >
                      <Grid item md={3} xs={3} padding={3}>
                        <Typography
                          variant="caption"
                          style={{ fontWeight: "bold" }}
                        >
                          Id:
                        </Typography>
                        <ListItemText
                          primary={value.id}
                          primaryTypographyProps={{
                            variant: "body2",
                          }}
                        />
                      </Grid>
                      <Grid item md={3} xs={3} padding={3}>
                        <Typography
                          variant="caption"
                          style={{ fontWeight: "bold" }}
                        >
                          Name:
                        </Typography>
                        <ListItemText
                          primary={value.name}
                          primaryTypographyProps={{
                            variant: "body2",
                          }}
                        />
                      </Grid>
                      <Grid item md={1} xs={1} padding={2}>
                        <Typography
                          variant="caption"
                          style={{ fontWeight: "bold" }}
                        >
                          Description:
                        </Typography>
                        <ListItemText
                          primary={value.description}
                          primaryTypographyProps={{
                            variant: "body2",
                          }}
                        />
                      </Grid>
                    </ListItem>
                  </List>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
