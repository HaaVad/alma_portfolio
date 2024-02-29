import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    // date: Date;
    // link: string;
    videolink: string;
    description: string;
    // description: PortableTextBlock[];
    images: string[];
};