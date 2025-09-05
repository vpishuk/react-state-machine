import { useAuth } from "./useAuth";
import { useCallback, useEffect, useState } from "react";

/**
 * A custom hook that determines if the Firebase authentication state is ready.
 * It uses Firebase authentication to check if the auth state is ready and updates the state accordingly.
 *
 * @group Hook
 *
 * @returns {boolean}
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const isAuthStateReady = useAuthStateReady();
 *  console.log(isAuthStateReady);
 * };
 * ```
 */
export const useAuthStateReady = () => {
    const firebaseAuth = useAuth();

    const [isAuthStateReady, setIsAuthStateReady] = useState(false);

    const callback = useCallback(async () => {
        await firebaseAuth.authStateReady();
        setIsAuthStateReady(true);
    }, [firebaseAuth]);

    useEffect(() => {
        callback();
    }, [callback]);

    return isAuthStateReady;
};
