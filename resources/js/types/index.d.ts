import { Config } from "ziggy-js";

export type TUser = {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    permissions: string[];
    roles: string[];
};

export type TPaginateData<T> = {
    data: T[];
    links: Record<string, string | null>;
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
        Path: string;
        per_page: number;
        to: number;
        total: number;
    };
};

export type TFeature = {
    id: number;
    name: string;
    description: string;
    user: TUser;
    created_at: string;
    upvote_count: number;
    user_has_upvoted: boolean;
    user_has_downvoted: boolean;
};

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: TUser;
    };
    ziggy: Config & { location: string };
};
