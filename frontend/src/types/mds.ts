declare module "mds" {
  interface MDSResponse {
    is_returning: number;
    is_renting: number;
    is_installed: number;
    num_docks_available: number;
    num_bikes_available: number;
    last_reported: number;
    num_bikes_available_types: {
      electric: number;
      smart: number;
      classic: number;
    };
    station_id: string;
  }

  interface MDS {
    isReturning: boolean;
    isRenting: boolean;
    isInstalled: boolean;
    docksAvailable: number;
    bikesAvailale: number;
    lastReported: number;
    bikesAvailableTypes: {
      electric: number;
      smart: number;
      classic: number;
    };
    stationId: string;
  }
}
