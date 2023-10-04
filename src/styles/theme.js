import { common } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";

// Palettes are: darkPalette, lightPalette,
// redPalette (for testing), yellowPalette (for testing),

export const lessPadding = "4px";
export const morePadding = "16px";
export const navbarWidth = "170px";
export const commonFont = "Roboto, Helvetica, Aria, sans-serif";
export const indexRoomCommon = {
  width: 15,
  height: 15,
  border: "3px solid",
  marginLeft: 60,
};

export const createAppTheme = (currentPalette) =>
  createTheme({
    palette: currentPalette,

    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: currentPalette.backgroundDarker.default,
            borderColor: currentPalette.borderColor.cardBoder,
            width: "85%",
            margin: "auto",
            marginTop: "70px",
            padding: lessPadding,
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            backgroundColor: currentPalette.background.default,
            fontSize: 25,
            color: currentPalette.fontColorDefault.default,
            marginBottom: "10px",
            padding: lessPadding,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: currentPalette.backgroundDarker.default,
            "& label": {
              color: currentPalette.fontColorDefault.default,
            },
            "& label.Mui-focused": {
              color: currentPalette.primary.main,
            },
            "& .MuiOutlinedInput-root": {
              color: currentPalette.fontColorDefault.default,
              "& fieldset": {
                borderColor: currentPalette.borderColor.main,
              },
              "&:hover fieldset": {
                borderColor: currentPalette.borderColor.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: currentPalette.borderColor.main,
              },
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: currentPalette.fontColorDefault.default,
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-input": {
              background: currentPalette.background.default,
            },
            "& label": {
              color: currentPalette.fontColorDefault.default,
            },
            "& label.Mui-focused": {
              color: currentPalette.primary.main,
            },
            "& .MuiFormHelperText-root": {
              color: currentPalette.helperText,
            },
            "& .MuiOutlinedInput-root": {
              color: currentPalette.fontColorDefault.default,
              "& fieldset": {
                borderColor: currentPalette.borderColor.main,
              },
              "&:hover fieldset": {
                borderColor: currentPalette.primary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: currentPalette.primary.main,
              },
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: currentPalette.backgroundDarker.default,
          },
        },
        variants: [
          {
            props: { variant: "navBar" },
            style: {
              alignItems: "flex-start",
              backgroundColor: currentPalette.primary.main,
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              fontSize: "17.5px",
              height: "100vh",
              justifyContent: "space-evenly",
              padding: "20px 0 20px 0",
              position: "sticky",
              textAlign: "center",
              top: 0,
              zIndex: 20,
            },
          },
        ],
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            backgroundColor: currentPalette.backgroundDarker.default,
            border: `1px solid ${currentPalette.borderColor.cardBoder}`,
            color: currentPalette.fontColorDefault.default,
          },
        },
        variants: [
          {
            props: { variant: "navBar" },
            style: {
              backgroundColor: currentPalette.primary.main,
              borderColor: currentPalette.backgroundDarker.default,
              padding: 0,
              "& a": {
                borderBottom: "3px solid transparent",
                color: currentPalette.primary.contrastText,
                fontFamily: commonFont,
                fontWeight: 600,
                textAlign: "center",
                textDecoration: "none",
                padding: 0,
                width: navbarWidth,
              },
              "&:hover a": {
                borderBottom: "3px solid",
                color: currentPalette.primary.contrastText,
              },
              "& a.nav-links.active": {
                backgroundColor: currentPalette.background.default,
                color: currentPalette.text.primary,
                fontWeight: 800,
                padding: lessPadding,
                textDecorationThickness: "3px",
                width: navbarWidth,
              },
            },
          },
          {
            // The "Account" button styling
            props: { variant: "navBarAccountButton" },

            style: {
              backgroundColor: currentPalette.background.default,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              marginTop: "5vh",
              padding: "5px",
              textAlign: "center",
              width: "130px",

              "& a": {
                color: currentPalette.primary.main,
                fontSize: "17.5px",
                fontWeight: 700,
                textDecoration: "none",
              },
            },
          },
          {
            // The drop down menu styling
            props: { variant: "navBarDropDownLinks" },

            style: {
              backgroundColor: "transparent",
              display: "flex",
              borderRadius: "10px",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2px",
              textAlign: "center",
              width: "130px",

              "& a": {
                color: currentPalette.primary.main,
                fontSize: "17.5px",
                fontWeight: 600,
                textDecoration: "none",
              },
            },
          },
        ],
      },
      MuiDialogContent: {
        variants: [
          {
            props: { variant: "sibaDialogContent" },
            style: {
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            },
          },
        ],
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: currentPalette.backgroundDarker.default,
            color: currentPalette.fontColorDefault.default,
          },
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: {
            color: currentPalette.fontColorDefault.default,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            justifyContent: "space-evenly",
            padding: morePadding,
          },
        },
      },
      AllocRoom: {
        studio: {
          color: currentPalette.AllocRoom.studio.color,
        },
        luentoluokka: {
          color: currentPalette.AllocRoom.luentoluokka.color,
        },
        esitystila: {
          color: currentPalette.AllocRoom.esitystila.color,
        },
        musiikkiluokka: {
          color: currentPalette.AllocRoom.musiikkiluokka.color,
        },
      },
      IndexRooms: {
        studioindex: {
          ...indexRoomCommon,
          backgroundColor: currentPalette.AllocRoom.studio.color,
          borderColor: currentPalette.borderColorDark.main,
        },
        luentoluokkaindex: {
          ...indexRoomCommon,
          backgroundColor: currentPalette.AllocRoom.luentoluokka.color,
          borderColor: currentPalette.borderColorDark.main,
        },
        esitystilaindex: {
          ...indexRoomCommon,
          backgroundColor: currentPalette.AllocRoom.esitystila.color,
          borderColor: currentPalette.borderColorDark.main,
        },
        musiikkiluokkaindex: {
          ...indexRoomCommon,
          backgroundColor: currentPalette.AllocRoom.musiikkiluokka.color,
          borderColor: currentPalette.borderColorDark.main,
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "themeToggle" },
            style: {
              position: "fixed",
              bottom: 50,
              right: 10,
              zIndex: 1000,
              backgroundColor: currentPalette.primary.main,
              color: currentPalette.fontColorDefault.default,
            },
          },
        ],
        styleOverrides: {
          contained: {
            color: currentPalette.fontColorDefault.default,
          },
          text: {
            backgroundColor: currentPalette.primary.main,
            color: currentPalette.primary.contrastText,
          },
        },
        redbutton: {
          backgroundColor: currentPalette.warning.main,
          color: currentPalette.warning.contrastText,
        },
        editbutton: {
          backgroundColor: currentPalette.edit.main,
          color: currentPalette.edit.contrastText,
        },
        greenbutton: {
          backgroundColor: currentPalette.success.main,
          color: currentPalette.success.contrastText,
        },
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            button: {
              color: currentPalette.fontColorDefault.default,
              borderColor: currentPalette.borderColor.main, // was "yellow"
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            marginBottom: 16,
            color: currentPalette.fontColorDefault.default,
          },
        },
        variants: [
          {
            props: { variant: "boldTitle" },
            style: {
              color: currentPalette.fontColorDefault.default,
              fontFamily: commonFont,
              fontWeight: 700,
              fontSize: "1rem",
              lineHeight: 1.5,
              letterSpacing: "0.00938em",
            },
          },
          {
            props: { variant: "sibaNavLink" },
            style: {
              color: currentPalette.fontColorDefault.default,
              textDecoration: "none",
              fontFamily: commonFont,
              fontWeight: 700,
              height: "100%",
              borderBottom: "3px solid transparent",
            },
          },
          {
            props: { variant: "sibaTypography" },
            style: {
              color: currentPalette.fontColorDefault.default,
              textDecoration: "none",
              fontFamily: commonFont,
              fontWeight: 400,
              height: "100%",
              borderBottom: "3px solid transparent",
            },
          },
        ],
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            marginTop: 0,
            padding: lessPadding,
          },
        },
        variants: [
          {
            props: { variant: "sibaGridAddForm" },
            style: {
              // columnGap: 8,
              // rowGap: 8,
              padding: lessPadding,
              alignItems: "center",
              justifyContent: "space-evenly",
            },
          },
          {
            props: { variant: "sibaGridAddFormInDialog" },
            style: {
              columnGap: 8,
              rowGap: 8,
              padding: morePadding,
              justifyContent: "flex-start",
              alignItems: "flex-center",
            },
          },
          {
            props: { variant: "sibaGridSingleItemDisplay" },
            style: {
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: morePadding,
            },
          },
          {
            props: { variant: "sibaGridEdit" },
            style: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: morePadding,
            },
          },
        ],
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80px",
            background: currentPalette.primary.main,
            fontSize: "1.2rem",
          },
        },
      },
      MuiInput: {
        variants: [
          {
            props: { variant: "sibaInputFileName" },
            style: {
              color: currentPalette.fontColorDefault.default,
              background: currentPalette.primary.backgroundDarker,
            },
          },
        ],
        styleOverrides: {
          root: {
            color: currentPalette.fontColorDefault.default,
            background: currentPalette.backgroundDarker.default,
          },
        },
      },
      MuiAlertTitle: {
        styleOverrides: {
          root: {
            color: currentPalette.warning.contrastText,
            fontWeight: 700,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:nth-child(even)": {
              backgroundColor: currentPalette.background.default,
              borderBottom: "none",
            },
          },
        },
      },
      MuiTableSortLabel: {
        styleOverrides: {
          root: {
            color: currentPalette.common.white,
            transition: "0.3s ease",

            "&:hover": {
              color: currentPalette.primary.main,
              transition: "0.3s ease",
            },

            "& .MuiTableSortLabel-icon": {
              // Change to your desired icon color
              color: currentPalette.primary.main,
              // Add a color transition
              transition: "color 0.5s ease",
            },

            "&:not(:hover):not(:focus) .MuiTableSortLabel-icon": {
              color: currentPalette.primary.main,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: currentPalette.infoIcon.main,
          },
        },
      },
    },
  });

export default createAppTheme;

/* In other components, how to get access to the Theme and its settings?

    import useTheme from "@mui/material/styles/useTheme";
    ...
    const theme = useTheme();
*/
