'use server';
import { getPayload as get } from 'payload';
import config from '@payload-config';

export const getPayload = async () => get({ config });
