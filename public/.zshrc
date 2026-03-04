# History
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_SPACE
setopt SHARE_HISTORY

# Auto-completion
autoload -Uz compinit
compinit
zstyle ':completion:*' menu select
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}'
zstyle ':completion:*' list-colors "${(s.:.)LS_COLORS}"
zstyle ':completion:*' special-dirs true

# Plugins
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-history-substring-search/zsh-history-substring-search.zsh

# Autosuggestion styling
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#888888,italic"
ZSH_AUTOSUGGEST_STRATEGY=(history completion)

# Syntax highlighting colors
ZSH_HIGHLIGHT_STYLES[command]='fg=cyan,bold'
ZSH_HIGHLIGHT_STYLES[alias]='fg=magenta,bold'
ZSH_HIGHLIGHT_STYLES[builtin]='fg=yellow,bold'
ZSH_HIGHLIGHT_STYLES[function]='fg=blue,bold'
ZSH_HIGHLIGHT_STYLES[path]='fg=green'
ZSH_HIGHLIGHT_STYLES[unknown-token]='fg=red,bold'
ZSH_HIGHLIGHT_STYLES[single-quoted-argument]='fg=yellow'
ZSH_HIGHLIGHT_STYLES[double-quoted-argument]='fg=yellow'

# Keybindings
bindkey '^[[A' history-substring-search-up
bindkey '^[[B' history-substring-search-down
bindkey '^[[1;5C' forward-word    # Ctrl+Right
bindkey '^[[1;5D' backward-word   # Ctrl+Left
bindkey '^[[3~' delete-char       # Delete key
bindkey '^H' backward-kill-word   # Ctrl+Backspace

# Aliases
alias ls='eza --icons --color=auto'
alias ll='eza -lah --icons --git --color=auto'
alias la='eza -A --icons'
alias lt='eza --tree --icons --level=2'
alias grep='grep --color=auto'
alias cls='clear'
alias update='sudo pacman -Syu'
alias yayup='yay -Syu'
alias vim='nvim'
alias cat='bat --style=numbers,changes,header'
alias top='btop'
alias df='duf'
alias du='dust'
alias ping='gping'
alias cd='z'

# Zoxide
eval "$(zoxide init zsh)"

# Directory shortcuts
setopt AUTO_CD
setopt AUTO_PUSHD
setopt PUSHD_IGNORE_DUPS

# Misc
setopt CORRECT
setopt INTERACTIVE_COMMENTS

# ─── Prompt (Starship) ─────────────────────────────────────────────────────
eval "$(starship init zsh)"
