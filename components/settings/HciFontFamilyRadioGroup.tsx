import React, { useMemo} from "react";
import { HciRadioGroup } from "./HciRadioGroup";
import { useTheme } from "@/hooks/theme/HciFontContext";

const HciFontFamilyRadioGroup = () => {
  const { fontFamily, setFontFamily } = useTheme();

  interface RadioButtonProps {
    value: string;
    label: string;
  }

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        label: "Hci",
        value: "Hci",
      },
      {
        label: "Montserrat",
        value: "Montserrat",
      },
      {
        label: "Oswald",
        value: "Oswald",
      },
      {
        label: "Kent",
        value: "Kent",
      },
      {
        label: "Koala",
        value: "Koala",
      },
      {
        label: "Akoala",
        value: "Poppins",
      },
    ],
    []
  );

  return (
    <>
      <HciRadioGroup
        valToCompare={fontFamily}
        onSwitch={setFontFamily}
        obJectToShow={radioButtons}
        isFontFamily
      />
      {/* <FontAwesome name="book" size={20} color={'white'}/> */}
      {/* <Ionicons name="adjust" size={20} color={'white'}/> */}
    </>
  );
};

export default HciFontFamilyRadioGroup;

// adjust; fonticons book
