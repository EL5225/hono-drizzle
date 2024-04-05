import { TUsers } from "@/libs";
import { TPublicResponse } from "@/utils";

export type TUsersResponse = TPublicResponse<Omit<TUsers, "password">[]>;
