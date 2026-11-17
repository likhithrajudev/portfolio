import type { Block } from "@/lib/data";

// The Terminal page guide. Each "h2" with an id becomes a link in the "On this page" list.
// Text supports **bold**, `inline code` and [links](https://...).

const installTools = `brew install starship zsh-autosuggestions zsh-syntax-highlighting \\
  fzf zoxide atuin eza bat ripgrep fd git-delta lazygit \\
  mise fastfetch btop tlrc jq`;

const ghosttyConfig = `# Font: same as your editor, with icons
font-family = JetBrainsMono Nerd Font
font-size = 14
adjust-cell-height = 20%

# Theme: follows macOS light and dark mode
theme = light:Catppuccin Latte,dark:Catppuccin Mocha

# Window
window-padding-x = 14
window-padding-y = 10
window-padding-balance = true
macos-titlebar-style = tabs
background-opacity = 0.97

# Behavior
cursor-style = bar
mouse-hide-while-typing = true
copy-on-select = clipboard
confirm-close-surface = false
macos-option-as-alt = true

# Drop-down terminal from any app: press Cmd and the backtick key
keybind = global:cmd+grave_accent=toggle_quick_terminal`;

const zshrc = `# ── History ─────────────────────────────────────
HISTFILE=~/.zsh_history
HISTSIZE=100000
SAVEHIST=100000
setopt SHARE_HISTORY HIST_IGNORE_ALL_DUPS HIST_REDUCE_BLANKS

# ── Completion ──────────────────────────────────
autoload -Uz compinit && compinit
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'   # case-insensitive
zstyle ':completion:*' menu select                       # arrow through matches

# ── Fuzzy finder: fd for speed, bat and eza for previews ──
export FZF_DEFAULT_COMMAND='fd --type f --hidden --exclude .git'
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_CTRL_T_OPTS="--preview 'bat --color=always --style=numbers --line-range=:200 {}'"
export FZF_ALT_C_COMMAND='fd --type d --hidden --exclude .git'
export FZF_ALT_C_OPTS="--preview 'eza --tree --level=2 --color=always {}'"
source <(fzf --zsh)

# ── Tools ───────────────────────────────────────
eval "$(starship init zsh)"                   # the prompt
eval "$(zoxide init zsh --cmd cd)"            # cd learns your favorite folders
eval "$(atuin init zsh --disable-up-arrow)"   # Ctrl-R searches all your history
eval "$(mise activate zsh)"                   # per-project Java, Node and Python

# ── Better defaults ─────────────────────────────
export BAT_THEME="ansi"                       # bat uses the terminal's colors
alias ls='eza --icons --group-directories-first'
alias ll='eza -lah --icons --git --group-directories-first'
alias tree='eza --tree --level=2 --icons'
alias cat='bat --paging=never'
alias lg='lazygit'

# ── Plugins (syntax highlighting must load last) ──
source "$HOMEBREW_PREFIX/share/zsh-autosuggestions/zsh-autosuggestions.zsh"
source "$HOMEBREW_PREFIX/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"`;

const starshipConfig = `"$schema" = 'https://starship.rs/config-schema.json'

# Line 1: where you are and what's going on. Line 2: the arrow you type after.
format = """
$directory$git_branch$git_status$java$python$nodejs$cmd_duration
$character"""

[directory]
truncation_length = 3
style = "bold cyan"

[git_branch]
format = "on [$branch]($style) "
style = "bold purple"

[git_status]
format = '([$all_status$ahead_behind]($style) )'

[cmd_duration]
min_time = 2000          # only show for commands slower than 2 seconds
format = "took [$duration]($style) "

[character]
success_symbol = "[❯](bold green)"
error_symbol = "[❯](bold red)"`;

const gitDelta = `git config --global core.pager delta
git config --global interactive.diffFilter "delta --color-only"
git config --global delta.navigate true
git config --global delta.side-by-side true
git config --global merge.conflictStyle zdiff3`;

export const terminalGuide: Block[] = [
    // ── Concepts ────────────────────────────────────────────────
    { type: "h2", id: "concepts", text: "The Ideas Behind This Setup" },
    { type: "p", text: "A great terminal does the remembering for you: where your projects live, what you ran last week, which branch you’re on. Each tool below removes one thing you’d otherwise have to type or recall." },
    {
        type: "ul",
        items: [
            "**A fast, native terminal.** Ghostty draws with the GPU and uses real macOS tabs and splits, so it feels instant and fits in with the rest of your Mac.",
            "**A Nerd Font.** JetBrains Mono Nerd Font is the same font as your editor, plus thousands of icons that tools use for files, folders and git status.",
            "**A prompt that shows context.** Starship shows your folder, git branch and status, the language versions in the current project, and how long the last command took, but only when it matters.",
            "**Fuzzy everything.** fzf turns any list (files, folders, history) into a searchable picker. You type a few letters instead of exact paths.",
            "**Navigation that learns.** zoxide remembers the folders you use most, so `cd api` jumps straight to your API project from anywhere.",
            "**History as a database.** Atuin stores every command with its folder, exit code and duration, and finds any of them in a moment.",
            "**Modern replacements.** eza, bat, ripgrep and fd are faster, friendlier versions of `ls`, `cat`, `grep` and `find`.",
            "**Versions per project.** mise installs and switches Java, Node and Python versions per folder, so each project uses exactly what it needs.",
        ],
    },

    // ── Install ─────────────────────────────────────────────────
    { type: "h2", id: "install", text: "1. Install Everything" },
    { type: "p", text: "If you don’t have **Homebrew** yet, install it first. When it finishes, run the two commands it prints under “Next steps” so `brew` works in new windows." },
    { type: "code", filename: "Terminal", code: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` },
    { type: "p", text: "Then install the terminal and the font:" },
    { type: "code", filename: "Terminal", code: "brew install --cask ghostty font-jetbrains-mono-nerd-font" },
    { type: "p", text: "And the command-line tools, all at once:" },
    { type: "code", filename: "Terminal", code: installTools },
    {
        type: "ul",
        items: [
            "**starship**: the prompt.",
            "**zsh-autosuggestions** and **zsh-syntax-highlighting**: grey suggestions from your history as you type (press → to accept), and commands colored green when valid, red when not.",
            "**fzf**, **zoxide** and **atuin**: fuzzy search, smart `cd`, and searchable history.",
            "**eza**, **bat**, **ripgrep** (`rg`) and **fd**: better `ls`, `cat`, `grep` and `find`.",
            "**git-delta** and **lazygit**: readable diffs and a full git interface in the terminal.",
            "**mise**: Java, Node and Python versions per project.",
            "**fastfetch**, **btop**, **tlrc** (`tldr`) and **jq**: a system summary, a system monitor, short command examples, and JSON processing.",
        ],
    },

    // ── Ghostty ─────────────────────────────────────────────────
    { type: "h2", id: "ghostty", text: "2. Configure Ghostty" },
    { type: "p", text: "Create the config file and open it:" },
    { type: "code", filename: "Terminal", code: "mkdir -p ~/.config/ghostty && touch ~/.config/ghostty/config && open -e ~/.config/ghostty/config" },
    { type: "p", text: "Paste this in, save, and press `⌘⇧,` in Ghostty to reload:" },
    { type: "code", filename: "~/.config/ghostty/config", code: ghosttyConfig },
    {
        type: "ul",
        items: [
            "**Font and spacing**: JetBrains Mono Nerd Font at 14px, with 20% extra line height so output is easier to scan.",
            "**Theme**: Catppuccin Latte in light mode and Mocha in dark mode, matching your editors.",
            "**Option as Alt**: makes shortcuts like `Option` + `C` (jump to a folder) work.",
            "**Copy on select**: selecting text copies it, no `⌘C` needed.",
            "**Quick terminal**: a terminal that drops down from the top of the screen in any app. macOS will ask you to allow Ghostty under **System Settings → Privacy & Security → Accessibility** the first time.",
        ],
    },
    { type: "note", text: "Theme names changed between Ghostty versions. If the theme doesn’t apply, run `ghostty +list-themes` and copy the exact Catppuccin names it shows." },

    // ── Zsh ─────────────────────────────────────────────────────
    { type: "h2", id: "zsh", text: "3. Set Up Zsh" },
    { type: "p", text: "Back up your current config first with `cp ~/.zshrc ~/.zshrc.backup`. Then open `~/.zshrc` and replace its contents with this:" },
    { type: "code", filename: "~/.zshrc", code: zshrc },
    {
        type: "ul",
        items: [
            "**History**: keeps 100,000 commands, shared between all open tabs, without duplicates.",
            "**Completion**: Tab completion that ignores upper and lower case, with a menu you can arrow through.",
            "**fzf**: uses `fd` to find files quickly, and shows a preview of files (with bat) and folders (with eza) as you search.",
            "**zoxide**: replaces `cd`. Normal paths still work, and short names jump to the best match. `cdi` opens an interactive picker.",
            "**Atuin**: takes over `Ctrl` + `R`. The up arrow keeps its normal behavior.",
            "**Aliases**: `ls`, `ll` and `tree` show icons and git status; `cat` adds syntax highlighting; `lg` opens lazygit.",
        ],
    },
    { type: "p", text: "Bring your existing history into Atuin, then reload the shell:" },
    { type: "code", filename: "Terminal", code: "atuin import auto\nexec zsh" },

    // ── Prompt ──────────────────────────────────────────────────
    { type: "h2", id: "prompt", text: "4. Customize the Prompt" },
    { type: "p", text: "Starship works with no config, but a two-line prompt keeps long paths from pushing your typing to the right. Create the file:" },
    { type: "code", filename: "Terminal", code: "open -e \"$(mkdir -p ~/.config && touch ~/.config/starship.toml && echo ~/.config/starship.toml)\"" },
    { type: "code", filename: "~/.config/starship.toml", code: starshipConfig },
    { type: "p", text: "The first line shows the folder, the git branch and status, the Java, Python or Node version (only inside a project that uses it), and how long a slow command took. The arrow on the second line turns red when the last command failed." },
    { type: "note", text: "Want icons for every language? Run `starship preset nerd-font-symbols -o ~/.config/starship.toml` to start from Starship’s ready-made icon preset instead." },

    // ── Git ─────────────────────────────────────────────────────
    { type: "h2", id: "git", text: "5. Better Git" },
    { type: "p", text: "Make delta the viewer for every diff, with side-by-side changes and syntax highlighting:" },
    { type: "code", filename: "Terminal", code: gitDelta },
    {
        type: "ul",
        items: [
            "`git diff`, `git show` and `git log -p` now show side-by-side, highlighted changes. Press `n` and `N` to jump between files.",
            "`zdiff3` shows the original code in the middle of merge conflicts, so you can see what both sides changed.",
            "Type `lg` to open **lazygit**: stage individual lines, commit, switch branches, rebase and push, all with single keys.",
        ],
    },

    // ── Runtimes ────────────────────────────────────────────────
    { type: "h2", id: "runtimes", text: "6. Java, Node and Python Versions" },
    { type: "p", text: "Set your default versions once:" },
    { type: "code", filename: "Terminal", code: "mise use --global java@21 node@lts python@3.12" },
    { type: "p", text: "Inside a project that needs something different, run `mise use java@17`. mise writes a `mise.toml` file in that folder and switches versions automatically whenever you `cd` into it. Commit that file and your teammates get the same versions." },

    // ── Shortcuts ───────────────────────────────────────────────
    { type: "h2", id: "shortcuts", text: "Daily Shortcuts" },
    {
        type: "ul",
        items: [
            "**`⌘` and the backtick key**: open the drop-down quick terminal from any app.",
            "**`⌘D`** and **`⌘⇧D`**: split the Ghostty window right or down.",
            "**`Ctrl` + `R`**: search everything you’ve ever run, with Atuin.",
            "**`Ctrl` + `T`**: fuzzy-find a file and paste its path, with a preview.",
            "**`Option` + `C`**: fuzzy-find a folder and jump into it.",
            "**`cd api`**: jump to the folder you use most that matches “api”.",
            "**`ll`** and **`tree`**: list files with icons and git status.",
            "**`rg \"TODO\"`** and **`fd config`**: search file contents and file names, fast.",
            "**`lg`**: open lazygit.",
            "**`tldr tar`**: short, practical examples for any command.",
            "**`btop`** and **`fastfetch`**: a live system monitor, and a snapshot of your machine.",
        ],
    },
    { type: "note", text: "Using **Warp** instead of Ghostty? Skip step 2. Everything else works in Warp too, and Warp has its own history search, so you can leave Atuin out." },
];
