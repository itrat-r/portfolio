import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('MONGODB_URI not defined, using in-memory fallback');
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose | null> {
  if (!MONGODB_URI) {
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;

// Profile Schema
const profileSchema = new mongoose.Schema(
  {
    personalInfo: {
      name: { type: String, required: true },
      title: { type: String, required: true },
      location: { type: String },
      email: { type: String, required: true },
      phone: { type: String },
      linkedin: { type: String },
      github: { type: String },
    },
    summary: { type: String },
    experience: [
      {
        id: String,
        title: String,
        company: String,
        location: String,
        startDate: String,
        endDate: String,
        description: [String],
        technologies: [String],
      },
    ],
    education: [
      {
        id: String,
        degree: String,
        institution: String,
        location: String,
        startYear: String,
        endYear: String,
        description: String,
      },
    ],
    skills: [
      {
        name: String,
        category: {
          type: String,
          enum: ['frontend', 'backend', 'tools', 'other'],
        },
      },
    ],
    languages: [
      {
        name: String,
        level: String,
      },
    ],
  },
  { timestamps: true }
);

export const Profile =
  mongoose.models.Profile || mongoose.model('Profile', profileSchema);

// Contact Message Schema
const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model('ContactMessage', contactMessageSchema);
