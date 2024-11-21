import {createContext} from "react";
import { useProfile } from '@hooks';

export const ProfileContext = createContext<ReturnType<typeof useProfile> | null>(null);
