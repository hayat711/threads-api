import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import * as uuid from 'uuid';

@Injectable()
export class CloudinaryService {
    async uploadImage(base64Img: string): Promise<string | null> {
        try {
            // Generate a unique filename using a hash or unique identifier
            const uniqueFilename = this.generateUniqueFilename();

            // Upload the image with the unique filename
            const uploadResponse = await v2.uploader.upload(base64Img, {
                public_id: uniqueFilename,
                folder: 'threads',
                use_filename: true,
            });

            return uploadResponse.secure_url;
        } catch (error) {
            console.log('Error uploading image to Cloudinary', error.message);
            return null;
        }
    }
    generateUniqueFilename(): string {
        const uniqueId = uuid.v4();
        return `${uniqueId}.jpg`;
    }
}
