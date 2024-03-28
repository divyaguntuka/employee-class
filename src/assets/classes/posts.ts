export class Posts {
    id!: number;
    userId!: number;
    title!: string;
    body!: string;
    comments: Comments[] = [];
}

export class Comments {
    postId!: number;
    id!: number;
    name!: string;
    email!: string;
    body!: number;

}