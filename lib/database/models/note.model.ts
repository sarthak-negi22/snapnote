import { Schema, model, models } from "mongoose"

const NoteSchema = new Schema({
    title : { type : String, required : true },
    tagline : { type : String, required : true },
    body : { type : String, required : true },
    pinned : { type : Boolean, default : false },
    createdAt : { type : Date, default : Date.now },
});

const Note = models.Note || model('Note', NoteSchema);

export default Note;