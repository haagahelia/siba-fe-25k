import Grid from "@mui/material/Grid";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import EditUserContainer from "./EditUserContainer";
import DeleteUser from "./DeleteUser";

export default function SingleUserDialog(props) {
  const { open, setOpen, singleUser, getAllUsers, setSingleUser } = props;

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} width="400px">
        <DialogTitle id="dialog-title">{singleUser?.email}</DialogTitle>
        <DialogContent>
          <DialogActions>
            <DeleteUser
              singleUser={singleUser}
              getAllUsers={getAllUsers}
              setOpen={setOpen}
            />
            <EditUserContainer
              singleUser={singleUser}
              getAllUsers={getAllUsers}
              setSingleUser={setSingleUser}
            />
          </DialogActions>
          <DialogContent>
            <Grid
              container
              variant="sibaGridSingleItemDisplay"
              spacing={1}
              column={14}
              direction="column"
            >
              <Grid item s={6}>
                <Typography variant="subtitle1">
                  id:&nbsp;
                  {singleUser?.id}
                </Typography>
              </Grid>
              <Grid item s={6}>
                <Typography variant="subtitle1">
                  Email:&nbsp;
                  {singleUser?.email}
                </Typography>
              </Grid>
              <Grid item s={6}>
                <Typography variant="subtitle1">
                  isAdmin:&nbsp;
                  {singleUser?.isAdmin}
                </Typography>
              </Grid>
              <Grid item s={6}>
                <Typography variant="subtitle1">
                  isPlanner:&nbsp;
                  {singleUser?.isPlanner}
                </Typography>
              </Grid>
              <Grid item s={6}>
                <Typography variant="subtitle1">
                  isStatist:&nbsp;
                  {singleUser?.isStatist}
                </Typography>
              </Grid>
              <Grid item s={6}>
                <Typography variant="subtitle1">
                  Planner for:&nbsp;
                  {singleUser?.plannerdepartment}
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
}
