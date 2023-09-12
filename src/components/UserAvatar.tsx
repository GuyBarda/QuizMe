import { User } from 'next-auth';
import { Avatar, AvatarFallback } from './ui/avatar';
import Image from 'next/image';

type Props = {
    user: Pick<User, 'name' | 'image'>;
};

export default function UserAvatar({ user }: Props) {
    return (
        <Avatar>
            {user.image ? (
                <div className="relative w-full h-full aspect-square">
                    <Image
                        src={user.image}
                        alt="profile"
                        referrerPolicy="no-referrer"
                        fill
                    />
                </div>
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user.name}</span>
                </AvatarFallback>
            )}
        </Avatar>
    );
}
