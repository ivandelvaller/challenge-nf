"use server";

import getServerServices from "@/services";

export const getOne = async (stationId: string) => {
  try {
    const { mdsService } = await getServerServices();
    return mdsService.getOneStation(stationId);
  } catch (error) {
    return {
      error: true,
      message: "Error getting station details",
    };
  }
};
