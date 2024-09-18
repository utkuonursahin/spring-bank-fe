'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useUserStore from '@/stores/UserStore';

export default function DashboardHeader() {
    const authUser = useUserStore((state) => state.user);
    return (
        <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold ca">
                Welcome back, <span className="capitalize">{authUser.firstName}</span>
            </h1>
            <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                <AvatarFallback>
                    {authUser.firstName
                        .at(0)
                        ?.toUpperCase()
                        ?.concat(authUser.lastName.at(0)?.toUpperCase() || '')}
                </AvatarFallback>
            </Avatar>
        </header>
    );
}
