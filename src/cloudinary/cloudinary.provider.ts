import { v2 } from 'cloudinary';
import { CLOUDINARY } from '../common/constants/options.constant';

export const CloudinaryProvider = {
    provide: CLOUDINARY,
    useFactory: (): any => {
        return v2.config({
            cloud_name: 'dp7kynjwm',
            api_key: '797433566991889',
            api_secret: 'rtSFqFDjHMTk9Mx_vNgPTpOG6Jg',
        });
    },
};
