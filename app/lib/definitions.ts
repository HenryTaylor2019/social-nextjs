export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    profile_img: string;
    gallery_imgs: string[];
};

export type Post = {
    id: string;
    user_id: string;
    content: string;
    data_created: string;
};

export type Like = {
    id: string;
    user_id: string;
    post_id: string;
};