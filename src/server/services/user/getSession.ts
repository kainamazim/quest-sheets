import { type Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import { notFound } from "next/navigation";

import authOptions from "../../util/authOptions";

const getSession = async (): Promise<Session> => {
    const session = await getServerSession(authOptions);

    if (session == null) notFound();

    return session;
};

export default getSession;
