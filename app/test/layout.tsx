import Link from "next/link";
import { ReactNode } from "react";

interface TestLayoutProps {
    children: ReactNode;
    test: ReactNode;
}

export default function TestLayout({ children, test }: TestLayoutProps) {
    return (
        <div>
            <ul>
                <li><Link href='/test'>Test</Link></li>
                <li><Link href='/test/test-about'>Test about</Link></li>
                <li><Link href='/test/test-profile'>Test profile</Link></li>
            </ul>
            {test}
            {children}
        </div>
    );
}