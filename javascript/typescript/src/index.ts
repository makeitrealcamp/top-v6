let num: number;
num = 8;

let string = "string";
string = "hola mundo";

let bool: boolean = false;
let und: undefined | null;
let foo: any;

// let arr: string[] = ["string"]
let arr: Array<string|number> = ["string", 1]

// Tuples
let tup: [string, number, boolean] = ["string", 1, true]

// Type alises
type barTypes = string | string[];

let bar: barTypes = "string";
let far: barTypes = ["a", "b"];

// Interfaces
interface IUser {}
interface IPost {
  title: string;
  body: string;
  user?: IUser;
}
interface IComment {
  comment: string[];
  add: (s: string) => string
}

// Duck Typing
// if it quaks like a duck and walks like a duck. Then it is a duck
// class Post implements IPost {}
// class Post {}
// const post: IPost = new Post();
const post: IPost & IComment = {
  title: "title",
  body: "string",
  comment: [],
  add(s) {
    return s;
  }
}

function sum(a: number, b: number): number {
  return a + b
}

sum(1, 2);

enum Name {
Simon = 'Simon',
Maria = 'Maria',
Ana = 'Ana',
Juan = 'Juan',
}

let username: Name = Name.Simon;
