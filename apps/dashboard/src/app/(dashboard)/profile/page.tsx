"use client";
import React from "react";
import s from "./profile.module.scss";
import UserCard from "@/components/ui/cards/UserCard";
import ProfileForm from "@/components/user/ProfileForm";
import PhoneCard from "@/components/ui/cards/PhoneCard";
import { useSession } from "next-auth/react";
import { Flex, Grid, GridCol } from "@mantine/core";

const Profile = () => {
  const { data } = useSession();
  const githubUser = data?.user;
  if (!githubUser) {
    return null;
  }

  return (
    <div className={s.profile}>
      <Grid>
        <GridCol span={8}>
          <Flex justify="center" mb="md">
            <UserCard user={githubUser} />
          </Flex>
          <ProfileForm />
        </GridCol>
        <GridCol span={4}>
          <div className={s.profilePhoneCard}>
            <PhoneCard>Test</PhoneCard>
          </div>
        </GridCol>
      </Grid>
    </div>
  );
};

export default Profile;
