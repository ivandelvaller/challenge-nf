import { BaseAxiosService } from "./base-service";

import { MDS, MDSResponse } from "mds";

export class MdsService extends BaseAxiosService {
  constructor() {
    super({ baseURL: "http://api:5005" });
  }

  async getAllStations(): Promise<MDS[]> {
    try {
      const mdsResponse = await this.axios.get<MDSResponse[]>("/mds");
      return mdsResponse.data!.map((mds) => ({
        isReturning: +mds.is_returning === 1,
        isRenting: +mds.is_renting === 1,
        isInstalled: +mds.is_installed === 1,
        docksAvailable: mds.num_docks_available,
        bikesAvailale: mds.num_bikes_available,
        lastReported: mds.last_reported,
        bikesAvailableTypes: {
          electric: mds.num_bikes_available_types.electric,
          smart: mds.num_bikes_available_types.smart,
          classic: mds.num_bikes_available_types.classic,
        },
        stationId: mds.station_id,
      }));
    } catch (error) {
      console.log(Error);
      throw new Error("Error getting mds.");
    }
  }

  async getOneStation(stationId: string): Promise<MDS> {
    try {
      const { data: mds } = await this.axios<MDSResponse>(`/mds/${stationId}`);
      return {
        isReturning: mds.is_returning === 1,
        isRenting: mds.is_renting === 1,
        isInstalled: mds.is_installed === 1,
        docksAvailable: mds.num_docks_available,
        bikesAvailale: mds.num_bikes_available,
        lastReported: mds.last_reported,
        bikesAvailableTypes: {
          electric: mds.num_bikes_available_types.electric,
          smart: mds.num_bikes_available_types.smart,
          classic: mds.num_bikes_available_types.classic,
        },
        stationId: mds.station_id,
      };
    } catch (error) {
      throw new Error("Error getting station details.");
    }
  }
}
