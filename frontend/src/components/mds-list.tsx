"use client";

// React

// Next
import { useRouter } from "next/navigation";

// Components
import { DataGrid } from "@mui/x-data-grid";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

// Icons
import { Check, DoNotDisturb } from "@mui/icons-material";

// Colors

// icons

// Types
import { MDS } from "mds";

interface Props {
  mdsList: MDS[];
}

export default function MDSList(props: Props) {
  const router = useRouter();

  const handleOnClick = (stationId: string) => {
    router.push(`/station/${stationId}`);
  };

  return (
    <Paper variant="outlined" sx={{ height: "75vh" }}>
      <DataGrid
        density="compact"
        columns={[
          {
            field: "stationId",
            headerName: "Station Id",
            flex: 1,
            renderCell(params) {
              return (
                <Box
                  onClick={() => {
                    router.push(`/station/${params.row.stationId}`);
                  }}
                >
                  <Tooltip title="Go to details">
                    <Link sx={{ cursor: "pointer" }}>
                      {params.value.replaceAll("_", " ").toUpperCase()}
                    </Link>
                  </Tooltip>
                </Box>
              );
            },
          },
          {
            field: "docksAvailable",
            headerName: "Docks",
            type: "number",
            flex: 1,
          },
          {
            field: "bikesAvailale",
            headerName: "Bikes",
            type: "number",
            flex: 1,
          },
          {
            field: "is_returning",
            headerName: "Is Returning?",
            align: "center",
            headerAlign: "center",
            flex: 1,
            renderCell(params) {
              return params.row.isReturning ? (
                <Check color="success" />
              ) : (
                <DoNotDisturb color="error" />
              );
            },
          },
          {
            field: "is_renting",
            headerName: "Is Renting?",
            align: "center",
            headerAlign: "center",
            flex: 1,
            renderCell(params) {
              return params.row.isRenting ? (
                <Check color="success" />
              ) : (
                <DoNotDisturb color="error" />
              );
            },
          },
          {
            field: "is_installed",
            headerName: "Is Installed?",
            align: "center",
            headerAlign: "center",
            flex: 1,
            renderCell(params) {
              return params.row.isInstalled ? (
                <Check color="success" />
              ) : (
                <DoNotDisturb color="error" />
              );
            },
          },
          {
            field: "lastReported",
            flex: 1,
            headerName: "Last Reported",
          },
        ]}
        rows={props.mdsList}
        getRowId={(row) => row.stationId}
      />
    </Paper>
  );
}
