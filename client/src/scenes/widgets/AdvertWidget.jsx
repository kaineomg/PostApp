import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Реклама
        </Typography>
        <Typography color={medium}>Купить рекламу</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/test1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}></Typography>
        <Typography color={medium}>somead.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Описание рекламного предложения
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
