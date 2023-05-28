"use client";

import Avvvatars from "avvvatars-react";

type AvatarProps = {
  name: string;
  size?: number;
};

export default function Avatar(props: AvatarProps) {
  const { name, size } = props;

  return <Avvvatars value={name} size={size} />;
}
