import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  viewAllBtn: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    borderRadius: 6,
    color: "#000000",
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },
  dollar: {
    color: "#3A9B7A",
  },
  filledIcon: {
    color: "#FF5757",
    position: "absolute",
    left: "80%",
    top: "6%",
    background: "#fff",
  },
  actionIcon: {
    backgroundColor: "#FFA337",
    "&:hover": {
      backgroundColor: "#FFA337",
    },
  },
  icon: {
    color: "#1A1A1A",
    position: "absolute",
    left: "80%",
    top: "6%",
    background: "#fff",
  },
  badge: {
    background: "#FFA337",
    color: "#000000",
    position: "absolute",
    left: "10%",
    fontSize: 13,
    textTransform: "lowercase",
    top: "6%",
  },

  Activebutton: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    color: "#10962E",
    fontWeight: 400,
    fontSize: 14,
    marginLeft: 10,
  },

  closeButton: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    color: "#FF5757",
    fontWeight: 400,
    fontSize: 14,
    marginLeft: 10,
  },

  control: {
    "&[data-inactive]": {
      opacity: 0,
      cursor: "default",
    },
  },
}));
