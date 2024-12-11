import { MdsService } from "./mds.service";

const getServerServices = async () => {
    return Object.freeze({
        mdsService: new MdsService(),
    })
}

export default getServerServices;