import React, { useState } from "react";
import s from "./social-select.module.scss";
import { useDisclosure } from "@mantine/hooks";
import { Social } from "@/enums/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComboboxData, Group, Select, SelectProps } from "@mantine/core";
import { SOCIALS } from "@/constants/common";
import { faCheck, faGlobe } from "@fortawesome/free-solid-svg-icons";

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
  const icon = SOCIALS.find((item) => item.value === option.value)?.icon;

  return (
    <Group flex="1" gap="xs">
      {icon ? <FontAwesomeIcon icon={icon} /> : <></>}
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
  const [dropdownOpened, { toggle }] = useDisclosure();

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
      <button type="button" onClick={toggle}>
        {
          <FontAwesomeIcon
            icon={
              SOCIALS.find((social) => social.value === selectedSocial)?.icon ??
              faGlobe
            }
          />
        }
      </button>
    </div>
  );
};

export default SocialSelect;
