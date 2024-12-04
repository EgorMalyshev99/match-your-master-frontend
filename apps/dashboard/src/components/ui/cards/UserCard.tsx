import React, { useState } from "react";
import s from "./user-card.module.scss";
import Image from "next/image";
import { FileInput } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useProfileStore } from "@/store/profile";

interface Props {
  hasAvatarUploading?: boolean;
}

const UserCard = ({ hasAvatarUploading = true }: Props) => {
  const { user, uploadAvatar } = useProfileStore();

  const onFileChange = async (file: File | null) => {
    if (!file) {
      return;
    }

    await uploadAvatar(file);
  };

  if (!user) {
    return <></>;
  }

  return (
    <div className={s.userCard}>
      <div className={`${s.avatarWrapper} mb-4`}>
        {user.avatar && (
          <Image
            src={user.avatar}
            className={s.avatar}
            width={120}
            height={120}
            alt={user.first_name + " " + user.last_name}
          />
        )}
        {hasAvatarUploading && (
          <FileInput
            className={s.uploadAvatarWrapper}
            classNames={{ input: s.uploadAvatarBtn, section: s.clearAvatarBtn }}
            clearable={true}
            onChange={onFileChange}
            accept="image/png,image/jpeg,image/webp"
            label={false}
            placeholder={<FontAwesomeIcon icon={faPen} />}
          />
        )}
      </div>

      <div className={s.userName}>{`${user.first_name} ${user.last_name}`}</div>
    </div>
  );
};

export default UserCard;
