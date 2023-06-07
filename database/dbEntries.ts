import { isValidObjectId } from 'mongoose';
import { Entry, IEntry } from '../models';
import { db } from './';


export const getEntryById = async( id: string ): Promise<IEntry | null> => {

    if ( !isValidObjectId(id) ) return null;

    await db.connect();
    // El lean es para que cargue menos data en el entry
    const entry = await Entry.findById(id).lean();
    await db.disconnected();

    return JSON.parse( JSON.stringify(entry) );

}
