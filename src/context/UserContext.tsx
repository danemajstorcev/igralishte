import { createContext, useState } from "react";

interface ContextData {
  user: any;
  setUser: any;
  loginUser: any;
  updateUser: any;
}

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext({} as ContextData);

export const convertImageToBase64 = async (imageUrl: string) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
};

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const loginUser = async (email: string, password: string) => {
    try {
      const res = await fetch(
        `http://localhost:5001/users?email=${email}&password=${password}`
      );
      const data = await res.json();
      if (data.length > 0) {
        setUser(data[0]);
        localStorage.setItem("user", JSON.stringify(data[0]));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (userId: string, body: any) => {
    try {
      if (body.img) {
        const base64Image = await convertImageToBase64(body.img);
        body.img = base64Image;
      }
      const response = await fetch(`http://localhost:5001/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const userData = await response.json();
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
