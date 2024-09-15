export const delay = async (delay: number) => {
  return new Promise((reslove) => setTimeout(reslove, delay));
};

export const saveUser = () => {
  localStorage.setItem("clerk-user", JSON.stringify({ name: "user" }));
};
