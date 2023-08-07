import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUploadInput, FileUploadDto } from './uploader.types';
import { FileUpload } from 'graphql-upload-minimal';
import { Mimetype } from 'src/common/enums/mimetype.enum';
import { randomUUID } from 'crypto';
import { join } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';
import { validate } from 'class-validator';

@Injectable()
export class UploaderService {
    constructor() {}

    public async uploadFiles(
        values: CreateUploadInput,
        files: FileUpload[],
        mimetype: Mimetype[],
    ) {
        return {
            name: values.name,
            description: values.desc,
            imageRaw: files.join(', '),
            imageFormatted: files.join(', '),
            ulr: `http://localhost:4000/public/uploads`,
        };
    }

    public async uploadFile(
        values: CreateUploadInput,
        file: FileUpload,
        mimetype: Mimetype[],
    ) {
        try {
            const { createReadStream, filename } = file;
            const stream = createReadStream();

            const id = randomUUID();
            const imageFormatted = `${id}_${filename}`;
            const imagePath = join('public', 'uploads', imageFormatted);

            await pipeline(stream, createWriteStream(imagePath));

            return {
                name: values.name,
                description: values.desc,
                imageRaw: filename,
                imageFormatted,
                url: `http://localhost:4000/public/uploads/${imageFormatted}`,
            };
        } catch (error) {
            throw error;
        }
    }

    private async streamToBuffer(stream: Readable): Promise<Buffer> {
        const buffer = [];

        return new Promise((res, rej) =>
            stream
                .on('error', (error) => rej(error))
                .on('data', (data) => buffer.push(data))
                .on('end', () => res(Buffer.concat(buffer))),
        );
    }


    private async calculateFileSize(readStream: Readable) : Promise<number> {
        let size = 0;
        for await (const chunk of readStream) {
            size += chunk.length;
        }
        return size;
    }

    private progress(uploaded: number, size: number):void {
        const percent = Math.round(uploaded / size * 100);
        console.log(`Uploaded ${percent}%`);
    }

    private bytesForHuman(bytes: number) {
        let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

        let i = 0;
        for (i; bytes> 1024; i++) {
            bytes /= 1024;
        }

        return bytes.toFixed(1) + ' '+ units[i];
    }
    
    private async validateFile(file: FileUpload, mimetype: Mimetype[]) {
        try {
            if (!file) {
                throw new BadRequestException('No file provided');
            }

            // check & compare mimetypes
            if (!mimetype.includes(file.mimetype as Mimetype)) {
                if (mimetype.length === 1) {
                    throw new BadRequestException(`Mimetypes must be ${mimetype.join(', ')}. Found ${file.mimetype}`);
                } else {
                    throw new BadRequestException(`MimeTypes must be one of : ${mimetype.join(', ')}. Found ${file.mimetype}`);
                }
            }

            //validate file against schema
            const newFile = this.createTestFile(file);
            const validation = await validate(newFile);
            if (validation.length !== 0) {
                throw new BadRequestException(`Invalid file provided`)
            }

            return validation;
        } catch (error) {
            throw error;
        }
    }

    private createTestFile(file: FileUpload) {
        const newFile = new FileUploadDto();
        newFile.filename = file.filename;
        newFile.mimetype = file.mimetype;
        newFile.encoding = file.encoding;

        return newFile;
    }
}
