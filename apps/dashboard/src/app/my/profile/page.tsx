"use client";
import React, { useEffect } from "react";
import s from "./profile.module.scss";
import UserCard from "@/components/ui/cards/UserCard";
import ProfileForm from "@/components/user/ProfileForm";
import PhoneCard from "@/components/ui/cards/PhoneCard";
import { Card, Flex, Grid, GridCol } from "@mantine/core";
import { useProfileStore } from "@/store/profile";
import ContactsForm from "@/components/user/ContactsForm";

const Profile = () => {
  const { user, fetchProfile, isLoading } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className={s.profile}>
      {isLoading && <div>Loading...</div>}
      {user && (
        <Grid>
          <GridCol span={8}>
            <Flex justify="center" mb="md">
              <UserCard />
            </Flex>
            <Card shadow="md" padding="lg" radius="md">
              <ProfileForm user={user} />
              <ContactsForm />
            </Card>
          </GridCol>
          <GridCol span={4}>
            <div className={s.profilePhoneCard}>
              <PhoneCard>Test</PhoneCard>
            </div>
          </GridCol>
        </Grid>
      )}
    </div>
  );
};

export default Profile;
