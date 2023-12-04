'use client';

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from 'next/navigation';
import { createUrl } from "../lib/utils";

export default function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const val = e.target as HTMLFormElement;
        const search = val.search as HTMLInputElement;
        const newParams = new URLSearchParams(searchParams.toString());

        if (search.value) {
            newParams.set('searchTerm', search.value);
        } else {
            newParams.delete('searchTerm');
        }

        router.push(createUrl("/search", newParams));
    }

    return (
        <form onSubmit={onSubmit} className="navbar-item">
            <div className="control has-icons-right">
                <input
                    key={searchParams?.get('searchTerm')}
                    type="text"
                    name="search"
                    placeholder="Search for products..."
                    autoComplete="off"
                    defaultValue={searchParams?.get('searchTerm') || ''}
                    className="input"
                />
                <MagnifyingGlassCircleIcon className="icon is-small is-right"/>
            </div>
        </form>
    );
}