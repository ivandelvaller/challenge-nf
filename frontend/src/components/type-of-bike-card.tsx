// Next
import Image from "next/image";

// Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Props {
  type: "classic" | "smart" | "electric";
  total: number;
}

export default function TypeOfBikeCard(props: Props) {
  const CLASSIC = "/classic-bike.png";
  const SMART = "/smart-bike.png";
  const ELECTRIC = "/electric-bike.png";

  return (
    <Card sx={{ width: "100%" }}>
      {props.type === "classic" && (
        <Image width={400} height={300} src={CLASSIC} alt="IMAGE CLASSIC" />
      )}

      {props.type === "electric" && (
        <Image width={400} height={300} src={ELECTRIC} alt="IMAGE ELECTRIC" />
      )}

      {props.type === "smart" && (
        <Image width={400} height={300} src={SMART} alt="IMAGE SMART" />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.type.toUpperCase()}&nbsp;({props.total})
        </Typography>
      </CardContent>
    </Card>
  );
}
