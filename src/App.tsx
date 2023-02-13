import React from "react";
import "./App.css";
import { Typography } from "@mui/material";

// import { LocalizationProvider } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import { MuiDateTimePicker } from "./components/MuiDateTimePicker"; //Probably a paid feature
// import { MuiPicker } from "./components/MuiPicker"; //Probably a paid feature

import { createTheme, colors, ThemeProvider } from "@mui/material";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
import { MuiMasonry } from "./components/MuiMasonry";
import { MuiTimeline } from "./components/MuiTimeline";
import { MuiTabs } from "./components/MuiTabs";
import { MuiLoadingButton } from "./components/MuiLoadingButton";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiProgress } from "./components/MuiProgress";
import { MuiDialog } from "./components/MuiDialog";
import { MuiSnackbar } from "./components/MuiSnackbar";
import { MuiAlert } from "./components/MuiAlert";
import { MuiTable } from "./components/MuiTable";
import { MuiTooltip } from "./components/MuiTooltip";
import { MuiChip } from "./components/MuiChip";
import { MuiList } from "./components/MuiList";
import { MuiBadge } from "./components/MuiBadge";
import { MuiAvatar } from "./components/MuiAvatar";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
import { MuiSpeedDial } from "./components/MuiSpeedDial";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiLink } from "./components/MuiLink";
import { MuiNavbar } from "./components/MuiNavbar";
import { MuiImageList } from "./components/MuiImageList";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiCard } from "./components/MuiCard";
import { MuiLayout } from "./components/MuiLayout";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiRating } from "./components/MuiRating";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiSelect } from "./components/MuiSelect";
import { MuiButton } from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextField";
import { MuiTypography } from "./components/MuiTypography";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      <div className="App">
        <Typography variant="h3" component="h2">
          MuiTypography
        </Typography>
        <MuiTypography />
        <Typography variant="h3" component="h2">
          MuiButton
        </Typography>
        <MuiButton />
        <Typography variant="h3" component="h2">
          MuiTextField
        </Typography>
        <MuiTextField />
        <Typography variant="h3" component="h2">
          MuiSelect
        </Typography>
        <MuiSelect />
        <Typography variant="h3" component="h2">
          MuiRadioButton
        </Typography>
        <MuiRadioButton />
        <Typography variant="h3" component="h2">
          MuiCheckbox
        </Typography>
        <MuiCheckbox />
        <Typography variant="h3" component="h2">
          MuiSwitch
        </Typography>
        <MuiSwitch />
        <Typography variant="h3" component="h2">
          MuiRating
        </Typography>
        <MuiRating />
        <Typography variant="h3" component="h2">
          MuiAutocomplete
        </Typography>
        <MuiAutocomplete />
        <Typography variant="h3" component="h2">
          MuiLayout
        </Typography>
        <MuiLayout />
        <Typography variant="h3" component="h2">
          MuiCard
        </Typography>
        <MuiCard />
        <Typography variant="h3" component="h2">
          MuiAccordion
        </Typography>
        <MuiAccordion />
        <Typography variant="h3" component="h2">
          MuiImageList
        </Typography>
        <MuiImageList />
        <Typography variant="h3" component="h2">
          MuiNavbar
        </Typography>
        <MuiNavbar />
        <Typography variant="h3" component="h2">
          MuiBreadcrumbs
        </Typography>
        <MuiBreadcrumbs />
        <Typography variant="h3" component="h2">
          MuiDrawer
        </Typography>
        <MuiDrawer />
        <Typography variant="h3" component="h2">
          MuiLink
        </Typography>
        <MuiLink />
        <Typography variant="h3" component="h2">
          MuiSpeedDial
        </Typography>
        <MuiSpeedDial />
        <Typography variant="h3" component="h2">
          MuiBottomNavigation
        </Typography>
        <MuiBottomNavigation />
        <Typography variant="h3" component="h2">
          MuiAvatar
        </Typography>
        <MuiAvatar />
        <Typography variant="h3" component="h2">
          MuiBadge
        </Typography>
        <MuiBadge />
        <Typography variant="h3" component="h2">
          MuiList
        </Typography>
        <MuiList />
        <Typography variant="h3" component="h2">
          MuiChip
        </Typography>
        <MuiChip />
        <Typography variant="h3" component="h2">
          MuiTooltip
        </Typography>
        <MuiTooltip />
        <Typography variant="h3" component="h2">
          MuiTable
        </Typography>
        <MuiTable />
        <Typography variant="h3" component="h2">
          MuiAlert
        </Typography>
        <MuiAlert />
        <Typography variant="h3" component="h2">
          MuiSnackbar
        </Typography>
        <MuiSnackbar />
        <Typography variant="h3" component="h2">
          MuiDialog
        </Typography>
        <MuiDialog />
        <Typography variant="h3" component="h2">
          MuiProgress
        </Typography>
        <MuiProgress />
        <Typography variant="h3" component="h2">
          MuiSkeleton
        </Typography>
        <MuiSkeleton />
        <Typography variant="h3" component="h2">
          MuiLoadingButton
        </Typography>
        <MuiLoadingButton />
        {/* <MuiPicker /> */}
        {/* <MuiDateTimePicker /> */}
        <Typography variant="h3" component="h2">
          MuiTabs
        </Typography>
        <MuiTabs />
        <Typography variant="h3" component="h2">
          MuiTimeline
        </Typography>
        <MuiTimeline />
        <Typography variant="h3" component="h2">
          MuiMasonry
        </Typography>
        <MuiMasonry />
        <Typography variant="h3" component="h2">
          MuiResponsiveness
        </Typography>
        <MuiResponsiveness />
      </div>
      {/* </LocalizationProvider> */}
    </ThemeProvider>
  );
}

export default App;
