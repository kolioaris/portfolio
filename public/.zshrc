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

# Plugins
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-history-substring-search/zsh-history-substring-search.zsh

# Keybindings
bindkey '^[[A' history-substring-search-up
bindkey '^[[B' history-substring-search-down
bindkey '^[[1;5C' forward-word    # Ctrl+Right
bindkey '^[[1;5D' backward-word   # Ctrl+Left

# Aliases
alias ls='ls --color=auto'
alias ll='ls -lah --color=auto'
alias la='ls -A'
alias grep='grep --color=auto'
alias cls='clear'
alias update='sudo pacman -Syu'
alias yayup='yay -Syu'
alias vim='nvim'
alias cat='bat'          # requires: yay -S bat
alias top='btop'         # requires: yay -S btop

# Prompt (Starship)
eval "$(starship init zsh)"

# Directory shortcuts
setopt AUTO_CD
setopt AUTO_PUSHD
setopt PUSHD_IGNORE_DUPS

# Misc
setopt CORRECT               # typo correction
setopt INTERACTIVE_COMMENTS  # allow comments in terminal
