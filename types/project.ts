import { PortableTextBlock } from "sanity";
import { Image } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    date: Date;
    link: string;
    videolink?: string;
    description: PortableTextBlock[];
    images: Image[];
};