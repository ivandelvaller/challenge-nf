"use server";

import getServerServices from "@/services";

export const getAll = async () => {
  try {
    const { mdsService } = await getServerServices();
    return mdsService.getAllStations();
  } catch (error) {
    return {
      error: true,
      message:
        "Something went wrong getting all MDS. Contact support for more information.",
    };
  }
};
