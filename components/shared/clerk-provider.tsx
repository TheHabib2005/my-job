import React from 'react'
import { ClerkProvider } from "@clerk/nextjs"
const ClerkWrapper = ({ children }: { children: React.ReactNode }) => {

    const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

    if (!clerkPublishableKey) {
        throw new Error("Missing Clerk Publishable Key")
    }

    return (
        <ClerkProvider afterSignInUrl={"/"} publishableKey={clerkPublishableKey}>
            {children}
        </ClerkProvider>
    )
}

export default ClerkWrapper