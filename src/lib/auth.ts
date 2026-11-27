import { createHash, timingSafeEqual } from "crypto";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

/**
 * Compare two strings in constant time. Hashing first gives both buffers the
 * same length, so the comparison does not leak the expected value's length.
 */
function safeEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const expectedUser = process.env.ADMIN_USERNAME;
        const expectedPassword = process.env.ADMIN_PASSWORD;

        // No configured credentials means nobody can sign in.
        if (!expectedUser || !expectedPassword) return null;
        if (!credentials?.username || !credentials?.password) return null;

        const userOk = safeEqual(credentials.username, expectedUser);
        const passwordOk = safeEqual(credentials.password, expectedPassword);
        if (!userOk || !passwordOk) return null;

        return { id: "admin", name: expectedUser };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
};

/**
 * Returns a 401 response when the request has no admin session, or null when
 * the caller may proceed.
 */
export async function requireAdmin(): Promise<NextResponse | null> {
  let session = null;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    // next-auth throws when NEXTAUTH_SECRET is missing in production.
    // Fail closed with an explicit status instead of an opaque 500.
    console.error("Auth configuration error:", error);
    return NextResponse.json(
      { error: "Authentication is not configured" },
      { status: 503 }
    );
  }
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
