const competitors = new mongoose.Schema ({
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
    beltGrade: {
        type: Number,
        required: true,
        min: 0,
        max: 9
    },
    country: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 2,
        maxlength: 2
    }
});