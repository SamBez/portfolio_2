import {
  Avatar,
  Box,
  Chip,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";

const sets = [
  {
    name: "Angular",
    icon: "Angular-Dark.svg",
  },
  {
    name: "React",
    icon: "React-Dark.svg",
  },
  {
    name: "Remix",
    icon: "Remix-Dark.svg",
  },
  {
    name: "NodeJS",
    icon: "NodeJS-Dark.svg",
  },
  {
    name: "Postgress",
    icon: "PostgreSQL-Light.svg",
  },
  {
    name: "Prisma",
    icon: "Prisma.svg",
  },
  {
    name: "Javascript",
    icon: "js.png",
  },
  {
    name: "MongoDB",
    icon: "MongoDB.svg",
  },
  {
    name: "expres",
    icon: "ExpressJS-Dark.svg",
  },
  {
    name: "NextJS",
    icon: "NextJS-Dark.svg",
  },
  {
    name: "Typescript",
    icon: "TypeScript.svg",
  },
  { name: "Git", icon: "Git.svg" },
  {
    name: "NestJS",
    icon: "NestJS-Dark.svg",
  },
];

export default function Skills() {
  return (
    <Box
      sx={{
        width: "80%",
        height: "80%",
        paddingX: 5,
        border: "1px solid #1A4F98",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          padding: 5,
        }}
      >
        {sets?.map((item) => {
          return (
            <Chip
              // icon={item?.icon}
              label={item?.name}
              size="medium"
              sx={{
                color: "white",
              }}
              avatar={<Avatar alt={item?.name} src={item?.icon}></Avatar>}
              variant="outlined"
            />
          );
        })}
      </Box>
    </Box>
  );
}
