import mongoose from "mongoose";

export const connectToDb = async (db) => {
  if (!db) {
    console.error("Database URL not found");
    process.exit(1);
  }

  try {
    await mongoose.connect(db, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`Connected to database: ${db}`);
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
};
