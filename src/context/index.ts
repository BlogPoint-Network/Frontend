import {createContext} from "react";
import useProfile from "../hooks/useProfile";

export const ProfileContext = createContext<ReturnType<typeof useProfile> | null>(null);