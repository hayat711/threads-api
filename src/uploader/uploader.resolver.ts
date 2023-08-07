import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UploaderService } from './uploader.service';
import { CreateUploadInput, UploadResult } from './uploader.types';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { Mimetype } from 'src/common/enums/mimetype.enum';

@Resolver()
export class UploaderResolver {
    constructor(private readonly uploaderService: UploaderService) {}

    @Mutation(() => UploadResult)
    async uploadFile(
        @Args('values') values: CreateUploadInput,
        @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
        file: FileUpload,
    ): Promise<UploadResult> {
        try {
            const upload = await this.uploaderService.uploadFile(values, file, [
                Mimetype.PNG,
                Mimetype.JPG,
            ]);
            return upload;
        } catch (error) {
            throw error;
        }
    }
}
