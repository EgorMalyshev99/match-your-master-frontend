import React, { useState } from "react";
import s from "./multiple-social-input.module.scss";
import { Social } from "@/enums/social";
import { TextInput, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import SocialSelect from "@/components/ui/inputs/social-select";

interface DataItem {
  social: Social;
  link: string;
}

const initialData: DataItem[] = [
  {
    social: Social.vk,
    link: "",
  },
];

interface Props {
  data: DataItem[];
  onChange?: (data: DataItem[]) => void;
}

const MultipleSocialInput = ({ data, onChange }: Props) => {
  const [state, setState] = useState<DataItem[]>(
    data.length ? data : initialData,
  );
  const onDataChange = (newData: DataItem[]) => {
    if (onChange) {
      onChange(newData);
    }
  };
  const onSocialChange = (value: string | null, index: number) => {
    const newState = [...state];
    newState[index].social = value as Social;
    onDataChange(newState);
    setState(newState);
  };
  const onLinkChange = (value: string, index: number) => {
    const newState = [...state];
    newState[index].link = value;
    onDataChange(newState);
    setState(newState);
  };
  const onAddBtnClick = () => {
    const newState = [...state];
    newState.push({
      social: Social.vk,
      link: "",
    });
    onDataChange(newState);
    setState(newState);
  };
  const onRemoveBtnClick = (index: number) => {
    const newState = [...state];
    newState.splice(index, 1);
    onDataChange(newState);
    setState(newState);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.itemsWrapper}>
        {state.map((item, index) => {
          const { social, link } = item;

          return (
            <div className={s.item} key={index}>
              <SocialSelect
                value={social}
                onChange={(value) => {
                  onSocialChange(value, index);
                }}
              />
              <TextInput
                className={s.linkInput}
                value={link}
                onInput={(evt) => {
                  onLinkChange(evt.currentTarget.value, index);
                }}
                classNames={{
                  input: "mantine-input--underline",
                }}
                placeholder="Ссылка"
              />
              <button
                className={s.btnRemove}
                type="button"
                onClick={() => {
                  onRemoveBtnClick(index);
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} size="sm" />
              </button>
            </div>
          );
        })}
      </div>
      <button className={s.btnAdd} type="button" onClick={onAddBtnClick}>
        <FontAwesomeIcon icon={faPlus} size="sm" />
        <Text size="sm">Добавить</Text>
      </button>
    </div>
  );
};

export default MultipleSocialInput;
