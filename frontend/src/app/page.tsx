import { Suspense } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Text from "@mui/material/Typography";

import { getAll } from "@/server/actions/mds";
import MDSList from "../components/mds-list";

export const dynamic = "force-dynamic";

export default async function Home() {
  const mds = await getAll();
  if ("error" in mds) {
    return (
      <Box>
        <Text>{mds.message}</Text>
      </Box>
    );
  }
  return (
    <Container maxWidth="xl">
      <Paper
        variant="outlined"
        sx={{
          p: "0.5rem",
          mb: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text variant="h2">Bcycle Madison</Text>
      </Paper>

      <Paper variant="outlined" sx={{ p: "0.5rem" }}>
        <Suspense fallback={null}>
          <MDSList mdsList={mds} />
        </Suspense>
      </Paper>
    </Container>
  );
}
