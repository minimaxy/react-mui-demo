import { Stack, Avatar } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar>BW</Avatar>
        <Avatar>CK</Avatar>
      </Stack>
    </Stack>
  );
};
