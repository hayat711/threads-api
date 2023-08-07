import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsMimeType, IsNotEmpty, IsString, isString } from "class-validator";
import { ReadStream } from "fs";
import { FileUpload } from "graphql-upload-minimal";


@InputType()
export class CreateUploadInput {
    @IsString()
    @IsNotEmpty()
    @Field(() => String)
    name: string;


    @IsString()
    @IsNotEmpty()
    @Field(() => String)
    desc: string;

}

@ObjectType()
export class UploadResult {
    @Field(() => String, { nullable: true})
    name?: string;

    @Field(() => String, { nullable: true})
    desc?: string;

    @Field(() => String, { nullable: true})
    imageRaw?: string;

    @Field(() => String, { nullable: true})
    imageFormatted?: string

    @Field(() => String, { nullable: true})
    url?: string | URL;
}

export class FileUploadDto implements FileUpload {
    @IsString()
    filename: string;

    @IsString()
    @IsMimeType()
    mimetype: string;

    @IsString()
    encoding: string;

    @IsString()
    fieldName: string;

    createReadStream!: () => ReadStream;


}



