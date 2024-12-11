"use client";

import { useRouter } from "next/navigation";

// Components
import Button from "@mui/material/Button";

export default function RetturnButton() {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      sx={{ width: 200 }}
      onClick={() => {
        router.back();
      }}
    >
      Return
    </Button>
  );
}
