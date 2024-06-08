import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

let cached = (global as any).mongoose || { conn : null, promise : null };

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB_URL does not exist!')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName : 'snapnote',
        bufferCommands : false,
    });

    cached.conn = await cached.promisel

    return cached.conn;
}
