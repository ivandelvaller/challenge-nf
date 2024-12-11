import Link from "next/link";

// Components
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Text from "@mui/material/Typography";
import TypeOfBikeCard from "@/components/type-of-bike-card";

// Icons
import { Check, DoNotDisturb } from "@mui/icons-material";

// Server actions
import RetturnButton from "@/components/return-button";
import { getOne } from "@/server/actions/mds";

// Color
import { blue, grey } from "@mui/material/colors";

interface Props {
  params: {
    id: string;
  };
}

export const dynamic = "force-dynamic";

export default async function StationDetailPage(props: Props) {
  const details = await getOne(props.params.id);

  if ("error" in details) {
    return (
      <Box>
        <Box>
          <Text variant="h3">
            Stations was not found. <Link href="/">Go back to home</Link>
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Paper
        variant="outlined"
        sx={{
          p: "0.5rem",
          mb: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Paper
            variant="outlined"
            sx={{
              px: "0.5rem",
              bgcolor: blue[500],
              color: grey[200],
              mr: "0.5rem",
            }}
          >
            <Text variant="h6">
              Docks:&nbsp;
              <Box component="span" sx={{ fontWeight: "bold" }}>
                {details.docksAvailable}
              </Box>
            </Text>
          </Paper>

          <Paper
            variant="outlined"
            sx={{ px: "0.5rem", bgcolor: blue[500], color: grey[200] }}
          >
            <Text variant="h6">
              Bikes:&nbsp;
              <Box component="span" sx={{ fontWeight: "bold" }}>
                {details.bikesAvailale}
              </Box>
            </Text>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <RetturnButton />
        </Box>
      </Paper>

      <Paper variant="outlined" sx={{ p: "0.5rem" }}>
        <Box>
          <Text variant="h3">
            {details.stationId.replaceAll("_", " ").toUpperCase()}
          </Text>
        </Box>

        <Paper variant="outlined" sx={{ display: "flex", p: "0.5rem" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Text>Renting: </Text>
            {!Boolean(details.isRenting) ? (
              <DoNotDisturb color="error" />
            ) : (
              <Check color="success" />
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mx: "1rem" }}>
            <Text>Returning: </Text>
            {!details.isReturning ? (
              <DoNotDisturb color="error" />
            ) : (
              <Check color="success" />
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Text>Installed: </Text>
            {!details.isInstalled ? (
              <DoNotDisturb color="error" />
            ) : (
              <Check color="success" />
            )}
          </Box>
        </Paper>
      </Paper>

      <Paper variant="outlined" sx={{ p: "0.5rem", mt: "0.5rem" }}>
        <Grid container spacing={1}>
          <Grid size={{ sm: 1, md: 4 }}>
            <TypeOfBikeCard
              type="classic"
              total={details.bikesAvailableTypes.classic}
            />
          </Grid>

          <Grid size={{ sm: 1, md: 4 }}>
            <TypeOfBikeCard
              type="electric"
              total={details.bikesAvailableTypes.electric}
            />
          </Grid>

          <Grid size={{ sm: 1, md: 4 }}>
            <TypeOfBikeCard
              type="smart"
              total={details.bikesAvailableTypes.smart}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
