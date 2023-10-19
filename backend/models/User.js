const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    emri: {
      type: String,
      required: [true, "Emri esht i obliguar"],
      trim: true,
      text: true,
    },
    mbiemri: {
      type: String,
      required: [true, "Mbiemri esht i obliguar"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "Username esht i obliguar"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email esht i obliguar"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Passowrd esht i obliguar"],
    },
    profili: {
      type: String,
      trim: true,
      default: "https://theunnix.com/wp-content/uploads/2023/10/avatar.jpg",
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender esht i obliguar"],
      trim: true,
    },
    ditlindjaViti: {
      type: Number,
      require: true,
      trim: true,
    },
    ditlindjaMuaji: {
      type: Number,
      require: true,
      trim: true,
    },
    ditlindjaDita: {
      type: Number,
      require: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    shoket: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      emriTjetri: {
        type: String,
      },
      puna: {
        type: String,
      },
      vendiPunes: {
        type: String,
      },
      shkollaELart: {
        type: String,
      },
      universiteti: {
        type: String,
      },
      qyteti: {
        type: String,
      },
      qytetiILindjes: {
        type: String,
      },
      lidhja: {
        type: String,
        enum: ["Single", "Ne nje lidhje", "Martuar", "Divorcuar"],
      },
      instagram: {
        type: String,
      },
    },
    savedPost: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
