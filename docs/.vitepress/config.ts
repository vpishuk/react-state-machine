import { defineConfig } from "vitepress";
import sidebar from "../typedoc-sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "react-state-machine",
    description: "This module offers a hook that implements a state machine.",
    srcDir: "./",
    base: "/react-state-machine",
    themeConfig: {
        nav: [{ text: "Home", link: "/" }],

        sidebar: sidebar,

        socialLinks: [{ icon: "github", link: "https://github.com/vpishuk/react-state-machine/" }],
        footer: { message: "Released under the MIT License.", copyright: "Copyright © 2025-present Viktor Pishuk" }
    }
});
