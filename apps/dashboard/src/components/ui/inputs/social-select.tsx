import React, { useState } from "react";
import s from "./social-select.module.scss";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import { Social } from "@/enums/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComboboxData, Group, Select, SelectProps } from "@mantine/core";
import { SOCIALS } from "@/constants/common";
import { faCheck, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const selectData: ComboboxData = SOCIALS.map((social) => {
  return {
    label: social.name,
    value: social.value,
  };
});

const renderSelectOption: SelectProps["renderOption"] = ({
  option,
  checked,
}) => {
  const social = SOCIALS.find((item) => item.value === option.value);

  return (
    <Group flex="1" gap="xs">
      {social?.icon ? (
        <FontAwesomeIcon
          icon={social.icon}
          size="lg"
          color={social.color || ""}
        />
      ) : (
        <></>
      )}
      {social?.img ? (
        <Image src={social.img} width={16} height={16} alt={social.name} />
      ) : (
        <></>
      )}
      {option.label}
      {checked && <FontAwesomeIcon icon={faCheck} />}
    </Group>
  );
};

interface Props {
  value?: Social | null;
  onChange?: (value: Social | null) => void;
}

const SocialSelect = ({ value, onChange }: Props) => {
  const [selectedSocial, setSelectedSocial] = useState<Social>(
    value ? value : Social.vk,
  );
  const [dropdownOpened, { toggle, close }] = useDisclosure();
  const social = SOCIALS.find((item) => item.value === selectedSocial);
  const dropdownTogglerRef = useClickOutside(() => {
    if (dropdownOpened) {
      close();
    }
  }, ["mouseup", "touchend"]);

  const onSocialChange = (value: string | null) => {
    if (onChange) {
      onChange(value as Social);
    }

    setSelectedSocial(value as Social);
  };

  return (
    <div className={s.wrapper}>
      <Select
        className={s.select}
        data={selectData}
        value={selectedSocial}
        renderOption={renderSelectOption}
        comboboxProps={{ shadow: "xs" }}
        onChange={onSocialChange}
        dropdownOpened={dropdownOpened}
      />
      <button
        className={s.toggleBtn}
        type="button"
        onClick={toggle}
        ref={dropdownTogglerRef}
      >
        {social?.icon && (
          <FontAwesomeIcon icon={social?.icon} color={social?.color || ""} />
        )}
        {social?.img && (
          <Image src={social.img} width={16} height={16} alt={social.name} />
        )}
      </button>
    </div>
  );
};

export default SocialSelect;
