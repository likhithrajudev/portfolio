import type { Block } from "@/lib/data";

// The Setup page guide. Each "h2" with an id becomes a link in the "On this page" list.
// Text supports **bold**, `inline code` and [links](https://...).

const vscodeExtensions = `code --install-extension catppuccin.catppuccin-vsc \\
  --install-extension catppuccin.catppuccin-vsc-icons \\
  --install-extension usernamehw.errorlens \\
  --install-extension eamodio.gitlens \\
  --install-extension esbenp.prettier-vscode \\
  --install-extension dbaeumer.vscode-eslint \\
  --install-extension bradlc.vscode-tailwindcss \\
  --install-extension yoavbls.pretty-ts-errors \\
  --install-extension vscjava.vscode-java-pack \\
  --install-extension vmware.vscode-boot-dev-pack \\
  --install-extension ms-python.python \\
  --install-extension charliermarsh.ruff`;

const vscodeSettings = `{
  // Typography
  "editor.fontFamily": "'JetBrains Mono', Menlo, monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.7,
  "editor.letterSpacing": 0.2,
  "editor.fontLigatures": true,

  // Theme: follows macOS light and dark mode
  "window.autoDetectColorScheme": true,
  "workbench.preferredDarkColorTheme": "Catppuccin Mocha",
  "workbench.preferredLightColorTheme": "Catppuccin Latte",
  "workbench.iconTheme": "catppuccin-mocha",

  // A calm, uncluttered editor
  "editor.minimap.enabled": false,
  "breadcrumbs.enabled": false,
  "editor.renderLineHighlight": "gutter",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.stickyScroll.enabled": true,
  "editor.padding.top": 16,
  "editor.scrollBeyondLastLine": false,
  "editor.inlayHints.enabled": "offUnlessPressed",
  "workbench.activityBar.location": "top",
  "workbench.startupEditor": "none",
  "workbench.tips.enabled": false,
  "workbench.layoutControl.enabled": false,
  "window.commandCenter": false,
  "explorer.compactFolders": false,
  "workbench.tree.indent": 14,

  // Smooth motion
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,
  "workbench.list.smoothScrolling": true,
  "terminal.integrated.smoothScrolling": true,

  // Save and tidy up automatically
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
    "source.fixAll.eslint": "explicit"
  },
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,

  // Formatter per language
  "[javascript][typescript][javascriptreact][typescriptreact][json][css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[python]": { "editor.defaultFormatter": "charliermarsh.ruff" },
  "[java]": { "editor.defaultFormatter": "redhat.java" },

  // Terminal
  "terminal.integrated.fontFamily": "'JetBrains Mono'",
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true
}`;

export const setupGuide: Block[] = [
    // ── Concepts ────────────────────────────────────────────────
    { type: "h2", id: "concepts", text: "The Ideas Behind This Setup" },
    { type: "p", text: "A beautiful editor isn’t about a flashy theme. It’s about removing everything that competes with your code for attention. Every choice below follows one of these ideas:" },
    {
        type: "ul",
        items: [
            "**One font everywhere.** JetBrains Mono is designed for code: tall lowercase letters, a clear difference between `0` and `O` or `1` and `l`, and ligatures that turn `=>`, `!=` and `>=` into single symbols. Using it in every editor makes switching between them feel seamless.",
            "**One theme family.** Catppuccin has a soft dark flavor (Mocha) and a light one (Latte), and it exists for both VS Code and JetBrains IDEs. Both switch automatically with macOS, just like this website.",
            "**Less on screen.** Every panel you never read, like the minimap, breadcrumbs or tips, still pulls at your eye. Hide them and the code gets your full attention.",
            "**Room to breathe.** A taller line height (1.6 to 1.7) and a little padding make dense code much easier to scan.",
            "**Let the editor do the chores.** Formatting, organizing imports and fixing lint errors happen on save, so you never think about them.",
            "**Sync everything.** Keep settings in the cloud so a new laptop is ready in minutes.",
        ],
    },

    // ── VS Code ─────────────────────────────────────────────────
    { type: "h2", id: "vscode", text: "VS Code" },
    { type: "p", text: "Three steps: install the font, install the extensions, then paste one settings file." },

    { type: "h3", text: "1. Install the font" },
    { type: "code", filename: "Terminal", code: "brew install --cask font-jetbrains-mono" },
    { type: "note", text: "No Homebrew? Download JetBrains Mono from [jetbrains.com/lp/mono](https://www.jetbrains.com/lp/mono/), open the `.ttf` files and click **Install Font**." },

    { type: "h3", text: "2. Install the extensions" },
    { type: "p", text: "First make the `code` command available: open the Command Palette with `⌘⇧P` and run **Shell Command: Install 'code' command in PATH**. Then paste this into your terminal:" },
    { type: "code", filename: "Terminal", code: vscodeExtensions },
    {
        type: "ul",
        items: [
            "**Catppuccin** and **Catppuccin Icons**: the theme and matching file icons.",
            "**Error Lens**: shows errors at the end of the line, so you don’t have to hover to read them.",
            "**GitLens**: shows who last changed each line, and when.",
            "**Prettier**, **ESLint**, **Tailwind CSS IntelliSense** and **Pretty TypeScript Errors**: formatting, linting, class autocomplete and readable type errors for web projects.",
            "**Extension Pack for Java** and **Spring Boot Extension Pack**: Java language support, debugging, Maven and Gradle, and Spring Boot tools.",
            "**Python** and **Ruff**: Python support, plus a very fast linter and formatter.",
        ],
    },

    { type: "h3", text: "3. Paste the settings" },
    {
        type: "ol",
        items: [
            "Open the Command Palette with `⌘⇧P`.",
            "Run **Preferences: Open User Settings (JSON)**.",
            "Replace the file’s contents with the settings below, or merge them into what you already have.",
            "Save, then run **Developer: Reload Window** from the Command Palette.",
        ],
    },
    { type: "code", filename: "settings.json", code: vscodeSettings },

    { type: "h3", text: "What each group does" },
    {
        type: "ul",
        items: [
            "**Typography**: JetBrains Mono at 14px, a 1.7 line height and ligatures on.",
            "**Theme**: `window.autoDetectColorScheme` makes VS Code follow macOS, using Mocha in dark mode and Latte in light mode.",
            "**Calm editor**: no minimap or breadcrumbs, only the gutter marks the current line, and the activity bar moves to the top so the sidebar shows just your files.",
            "**Inlay hints**: hidden until you hold `Ctrl` + `Option`, so type hints don’t clutter every line.",
            "**Smooth motion**: the cursor glides and lists scroll smoothly instead of jumping.",
            "**Save and tidy**: files save when you switch away, then Prettier, Ruff or the Java formatter cleans them up and unused imports disappear.",
        ],
    },
    { type: "note", text: "Click the Accounts icon in the bottom-left corner and choose **Backup and Sync Settings** to sign in with GitHub. This setup then follows you to every Mac." },

    // ── JetBrains (shared) ──────────────────────────────────────
    { type: "h2", id: "jetbrains", text: "JetBrains IDEs: Shared Setup" },
    { type: "p", text: "IntelliJ IDEA, PyCharm and WebStorm are built on the same platform, so these steps work in all three. Open Settings with `⌘,`. The search box at the top of Settings finds any option by name, which is quicker than clicking through menus." },

    { type: "h3", text: "1. Theme and icons" },
    {
        type: "ol",
        items: [
            "Go to **Plugins → Marketplace**, install **Catppuccin Theme** and **Atom Material Icons**, then restart the IDE.",
            "Go to **Appearance & Behavior → Appearance** and choose **Catppuccin Mocha** as the theme.",
            "Tick **Sync with OS**, click the gear next to it, and choose **Catppuccin Latte** for light mode and **Catppuccin Mocha** for dark mode.",
        ],
    },

    { type: "h3", text: "2. Font" },
    {
        type: "ol",
        items: [
            "Go to **Editor → Font**.",
            "Set Font to **JetBrains Mono** (it comes with the IDE), Size to **14** and Line height to **1.6**.",
            "Tick **Enable ligatures**.",
        ],
    },

    { type: "h3", text: "3. A calmer window" },
    {
        type: "ul",
        items: [
            "**Appearance & Behavior → Appearance**: tick **Compact mode** for slimmer toolbars and tabs.",
            "**Editor → General → Breadcrumbs**: untick **Show breadcrumbs**.",
            "**Editor → General → Scrolling**: make sure **Enable smooth scrolling** is on.",
            "When you want to focus, use **View → Appearance → Enter Zen Mode** to hide everything except the code.",
        ],
    },

    { type: "h3", text: "4. Let the IDE tidy up" },
    { type: "p", text: "Go to **Tools → Actions on Save** and tick **Reformat code** and **Optimize imports**. Every save now formats the file and removes unused imports." },

    { type: "h3", text: "5. Helpful plugins" },
    {
        type: "ul",
        items: [
            "**Key Promoter X**: whenever you click a menu item, it shows that action’s keyboard shortcut, so you gradually stop reaching for the mouse.",
            "**.ignore**: highlighting and suggestions for `.gitignore` and `.dockerignore` files.",
        ],
    },

    { type: "h3", text: "6. Sync across all three IDEs" },
    { type: "p", text: "Search Settings for **Backup and Sync** and sign in with your JetBrains account. Your theme, font, keymap and plugins then follow you to IntelliJ IDEA, PyCharm and WebStorm on any machine." },

    // ── IntelliJ IDEA ───────────────────────────────────────────
    { type: "h2", id: "intellij", text: "IntelliJ IDEA: Java and Spring Boot" },
    {
        type: "ol",
        items: [
            "**Pick a JDK.** Open **File → Project Structure** (`⌘;`) and set the SDK. Use **Download JDK** if you don’t have one; JDK 21 is a good default for Spring Boot 3.",
            "**Enable Lombok.** Go to **Build, Execution, Deployment → Compiler → Annotation Processors** and tick **Enable annotation processing**.",
            "**Faster runs.** In **Build Tools → Gradle**, set **Build and run using** to **IntelliJ IDEA**. The IDE’s own compiler is usually quicker for small changes; switch back to Gradle if your build has custom steps.",
            "**Hot reload with DevTools.** Under **Compiler**, tick **Build project automatically**. Then, in **Advanced Settings**, tick **Allow auto-make to start even if developed application is currently running**. With `spring-boot-devtools` in your dependencies, the app restarts as you save.",
            "**No wildcard imports.** In **Editor → Code Style → Java → Imports**, set `Class count to use import with '*'` and `Names count to use static import with '*'` to **99**, so every import stays explicit and easy to read.",
        ],
    },

    // ── PyCharm ─────────────────────────────────────────────────
    { type: "h2", id: "pycharm", text: "PyCharm: Python, FastAPI and LangChain" },
    {
        type: "ol",
        items: [
            "**One environment per project.** Go to **Project → Python Interpreter → Add Interpreter → Add Local Interpreter** and choose **uv** (or **Virtualenv**). Each project keeps its own packages, so versions never clash between projects.",
            "**Format with Ruff.** Install the **Ruff** plugin, then in **Tools → Ruff** tick **Run ruff when the python file is saved**. Ruff replaces Black, isort and Flake8 with one very fast tool.",
            "**Run FastAPI in one click.** Go to **Run → Edit Configurations → + → FastAPI** (PyCharm Professional) and point it at your `main.py`. You get reload on save and the debugger together.",
            "**Help imports resolve.** Right-click your source folder and choose **Mark Directory as → Sources Root**, so PyCharm understands imports the same way Python does.",
        ],
    },

    // ── WebStorm ────────────────────────────────────────────────
    { type: "h2", id: "webstorm", text: "WebStorm: Next.js, React and TypeScript" },
    {
        type: "ol",
        items: [
            "**Prettier on save.** Go to **Languages & Frameworks → JavaScript → Prettier**, choose **Automatic Prettier configuration** and tick **Run on save**.",
            "**ESLint on save.** In **Languages & Frameworks → JavaScript → Code Quality Tools → ESLint**, choose **Automatic ESLint configuration** and tick **Run eslint --fix on save**.",
            "**Use the project’s TypeScript.** In **Languages & Frameworks → TypeScript**, pick the version from your project’s `node_modules`, so the IDE checks types exactly like your build does.",
            "**pnpm.** In **Languages & Frameworks → Node.js**, set **Package manager** to **pnpm**.",
            "**Tailwind CSS.** Support is built in. Once `tailwindcss` is in your project, class names autocomplete and show a color preview.",
        ],
    },
    { type: "note", text: "Prettier and ESLint can both change your code. Let Prettier handle formatting and ESLint handle code problems, so they never fight over the same lines." },
];
