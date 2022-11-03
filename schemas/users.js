const users = new mongoose.Schema ({
    id: {
        type: Number,
        index: true,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        email: true,
        trim: true,
        lowercase: true,
        unique: true,
        //validate: to be implemented later
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false // = official
    }
});