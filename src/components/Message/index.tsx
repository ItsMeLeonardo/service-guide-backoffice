type Props = {
  message: string;
  avatar: string;
  self?: boolean;
};

export default function Message({ self, avatar, message }: Props) {
  const messageClass = `w-full flex gap-2 p-2 items-start ${
    self ? "flex-row-reverse" : "flex-row bg-neutral-50"
  }`;

  return (
    <div className={messageClass}>
      <picture className="min-w-[2rem] min-h-[2rem] w-8 h-8">
        <img
          className="w-full h-full rounded-full object-cover"
          src={avatar}
          alt=""
        />
      </picture>
      <div className="flex items-center h-full">
        <p className="text-xs font-light whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
}
