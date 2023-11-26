import { useEffect } from "react";
import { useRoleLoggedIn } from "../../hooks/useRoleLoggedIn";
import Logger from "../../logger/logger";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteEquipment from "./DeleteEquipment";
import EditEquipment from "./EditEquipment";

export default function SingleEquipmentDialog({
  open,
  setOpen,
  singleEquipment,
  setSingleEquipment,
  getAllEquipments,
}) {
  Logger.logPrefix = "SingleEquipmentDialog";

  const { roles } = useRoleLoggedIn();

  useEffect(() => {
    if (open && singleEquipment) {
      Logger.debug(
        `Rendering SingleEquipmentDialog for equipment: ${JSON.stringify(
          singleEquipment,
        )}`,
      );
    }
  }, [open, singleEquipment]);

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        getAllEquipments();
      }}
    >
      <DialogTitle id="dialog-title">Equipment Info</DialogTitle>
      {roles.admin === "1" && (
        <DialogActions>
          <EditEquipment
            singleEquipment={singleEquipment}
            setSingleEquipment={setSingleEquipment}
            getAllEquipments={getAllEquipments}
            open={open}
            setOpen={setOpen}
          />
          <DeleteEquipment
            singleEquipment={singleEquipment}
            getAllEquipments={getAllEquipments}
            setOpen={setOpen}
          />
        </DialogActions>
      )}
      <DialogContent>
        <Grid
          container
          variant="sibaGridSingleItemDisplay"
          column={14}
        >
          <DialogContent variant="sibaDialogContent2">
          <Grid item xs={12} sm={6}>
          <Typography variant="singleDialogSubtitle">
            id:
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="singleDialogSubtitle">
            {singleEquipment?.id}
          </Typography>
          </Grid>
          </DialogContent>
          <DialogContent variant="sibaDialogContent2">
          <Grid item xs={12} sm={6}>
          <Typography variant="singleDialogSubtitle">
            Name:
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="singleDialogSubtitle">
            {singleEquipment?.name}
          </Typography>
          </Grid>
          </DialogContent>
          <DialogContent variant="sibaDialogContent2">
          <Grid item xs={12} sm={6}>
          <Typography variant="singleDialogSubtitle">
            Priority:
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="singleDialogSubtitle">
            {singleEquipment?.equipmentPriority}
          </Typography>
          </Grid>
          </DialogContent>
          <DialogContent variant="sibaDialogContent2">
          <Grid item xs={12} sm={6}>
          <Typography variant="singleDialogSubtitle">
            Description:
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="singleDialogSubtitle">
            {singleEquipment?.description}
          </Typography>
          </Grid>
          </DialogContent>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
