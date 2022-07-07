import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/checkIn');

const db = mongoose.connection;

export default db;