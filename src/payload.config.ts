import { sqliteAdapter } from '@payloadcms/db-sqlite';
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
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
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
  })
});
