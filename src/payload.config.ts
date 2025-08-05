import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { s3Storage } from '@payloadcms/storage-s3'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import {nodemailerAdapter} from '@payloadcms/email-nodemailer';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import path from 'path';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { collections } from './collections';
import { globals } from './globals';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections,
  globals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET as string,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
     s3Storage({
      config: {
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY as string,
          secretAccessKey: process.env.S3_SECRET_KEY as string,
        },
      },
      bucket: process.env.S3_BUCKET as string,
      collections: {
        media: {
          prefix: 'media',
        },
        icons: {
          prefix: 'icons',
        },
      },
    }),
  ],
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_DEFAULT_FROM_ADDRESS as string,
    defaultFromName: process.env.EMAIL_DEFAULT_FROM_NAME as string,
    transportOptions: {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    }
  }),
});
