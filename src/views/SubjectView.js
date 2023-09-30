import { Card, CardHeader, Container, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import {
  ajaxRequestErrorHandler,
  getFunctionName,
} from "../ajax/ajaxRequestErrorHandler";
import dao from "../ajax/dao";
import AlertBox from "../components/common/AlertBox";
import AddSubjectContainer from "../components/subject/AddSubjectContainer";
import SubjectFiltering from "../components/subject/SubjectFiltering";
import SubjectListContainer from "../components/subject/SubjectListContainer";
import SubjectPagination from "../components/subject/SubjectPagination";
import Logger from "../logger/logger";

const pageSize = 15;

export default function SubjectView() {
  Logger.logPrefix = "SubjectView";
  Logger.debug("SubjectView component instantiated.");

  const appContext = useContext(AppContext);

  const [paginateSubjects, setPaginateSubjects] = useState([]);
  const [allSubjectsList, setAllSubjectsList] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertOptions, setAlertOptions] = useState({
    message: "This is an error alert — check it out!",
    severity: "error",
  });
  const [isCardExpanded, setIsCardExpanded] = useState(true);

  Logger.debug("Initial state set.");

  const [pagination, setPagination] = useState({
    from: 0,
    to: pageSize,
  });

  const getAllSubjects = async function () {
    Logger.debug("getAllSubjects: fetching all subjects from server.");
    const { httpStatus, data } = await dao.fetchAllSubjects();
    if (httpStatus !== 200) {
      ajaxRequestErrorHandler(
        httpStatus,
        getFunctionName(2),
        setAlertOptions,
        setAlertOpen,
      );
    } else {
      Logger.debug(
        `getAllSubjects: successfully fetched ${data.length} subjects.`,
      );
      setAllSubjectsList(data);
      setPaginateSubjects(data.slice(0, 15));
    }
  };

  useEffect(() => {
    Logger.debug("Running effect to fetch all subjects.");
    getAllSubjects();
  }, []);

  useEffect(() => {
    Logger.debug("Running effect to update paginated subjects.");
    setPaginateSubjects(allSubjectsList.slice(0, 15));
  }, [allSubjectsList]);

  return (
    <div>
      <AlertBox
        alertOpen={alertOpen}
        alertOptions={alertOptions}
        setAlertOpen={setAlertOpen}
      />
      <Container maxWidth="xl">
        {appContext.roles.admin ? (
          <AddSubjectContainer
            getAllSubjects={getAllSubjects}
            allSubjectsList={allSubjectsList}
          />
        ) : (
          <Typography variant="subtitle1" mt={3}>
            "Not showing add subject to your role"
          </Typography>
        )}
        <Grid container rowSpacing={1}>
          <Card variant="outlined">
            <CardHeader
              title="Lessons"
              onClick={() => setIsCardExpanded(!isCardExpanded)}
            />
            <CardContent>
              {isCardExpanded && (
                <>
                  <SubjectFiltering
                    allSubjectsList={allSubjectsList}
                    setAllSubjectsList={setAllSubjectsList}
                    paginateSubjects={paginateSubjects}
                    setPaginateSubjects={setPaginateSubjects}
                    pagination={pagination}
                  />
                  <SubjectListContainer
                    getAllSubjects={getAllSubjects}
                    allSubjectsList={allSubjectsList}
                    paginateSubjects={paginateSubjects}
                    open={open}
                    setOpen={setOpen}
                  />
                  <SubjectPagination
                    pagination={pagination}
                    setPagination={setPagination}
                    allSubjectsList={allSubjectsList}
                    paginateSubjects={paginateSubjects}
                    setPaginateSubjects={setPaginateSubjects}
                  />
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </div>
  );
}
