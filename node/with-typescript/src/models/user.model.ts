import { Document, model, Schema } from 'mongoose'

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// const emailUnique = {
//   async validator(email: IUser['email']): Promise<boolean> {
//     const user: IUser | null = await models.User.findOne({ email })
//     return !user
//   }
// }

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
}, {
  timestamps: true,
});

// userSchema.pre<IUser>('save', () => {})

export default model<IUser>('User', userSchema)

