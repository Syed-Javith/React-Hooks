import { createContext, useState } from "react";

const authContext = createContext({ user : null , setUser : null });

export default authContext;