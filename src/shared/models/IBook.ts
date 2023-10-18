export interface IBook {
    id?: string;
    etag?: string;
    volumeInfo?: {
        title?: string;
        authors?: string[];
        categories: string[];
        description?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
            small?: string;
            medium?: string;
            large?: string;
            extraLarge?: string;
        };
    };


}

export interface IBookResp {
    kind?: string;
    totalItems?: number;
    items?: IBook[] | undefined;


}