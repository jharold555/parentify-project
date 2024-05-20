import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const testConnection = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db.collection("movies").find({}).toArray();
        res.json(movies);
        console.log(movies);
    } catch (error) {}
};

export default testConnection;
