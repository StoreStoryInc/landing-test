'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState, ReactNode } from 'react';

interface UTMLinkProps {
    href: string;
    children: (href: string) => ReactNode;
}

function UTMLinkContent({ href, children }: UTMLinkProps) {
    const searchParams = useSearchParams();
    const [finalHref, setFinalHref] = useState(href);

    useEffect(() => {
        if (!searchParams) return;

        try {
            // Handle absolute URLs directly, relative URLs with window.location.origin
            const url = new URL(href, href.startsWith('http') ? undefined : window.location.origin);

            searchParams.forEach((value, key) => {
                // Determine if we should append this param.
                // We append if it's not already in the target URL.
                // This ensures we don't overwrite hardcoded params like 'redirectUrl'.
                if (!url.searchParams.has(key)) {
                    url.searchParams.set(key, value);
                }
            });
            setFinalHref(url.toString());
        } catch (e) {
            console.error('Failed to parse URL for UTM preservation:', e);
            // Fallback to original href on error
            setFinalHref(href);
        }
    }, [href, searchParams]);

    return <>{children(finalHref)}</>;
}

export default function UTMLink({ href, children }: UTMLinkProps) {
    return (
        <Suspense fallback={<>{children(href)}</>}>
            <UTMLinkContent href={href}>{children}</UTMLinkContent>
        </Suspense>
    );
}
