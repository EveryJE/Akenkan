 const hrs = parseInt(Date().toString().split(" ")[4].split(":")[0]);

export const timeGreetings = () => {
  if (hrs < 5) return "sweet dreams";
  else if (hrs < 12) return "hi! , good morning";
  else if (hrs < 17) return "Hi!, good afternoon";
  else if (hrs < 22) return "Hi! Good Evening";
};
