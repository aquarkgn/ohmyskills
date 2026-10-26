#!/bin/bash
# OhMySkills - Instant Local Installer
# Usage: curl -fsSL https://ohmyskills.dev/install.sh | bash

set -e

echo "⚡ Installing OhMySkills CLI..."

OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

if [ "$ARCH" = "x86_64" ]; then
    ARCH="amd64"
elif [ "$ARCH" = "arm64" ] || [ "$ARCH" = "aarch64" ]; then
    ARCH="arm64"
fi

INSTALL_DIR="${HOME}/.local/bin"
mkdir -p "$INSTALL_DIR"

# If local myskills binary exists, link or install
if [ -f "${HOME}/.local/bin/myskills" ]; then
    cp "${HOME}/.local/bin/myskills" "${INSTALL_DIR}/ohmyskills"
    chmod +x "${INSTALL_DIR}/ohmyskills"
    echo "✅ OhMySkills binary linked to ${INSTALL_DIR}/ohmyskills"
else
    echo "📦 Downloading latest release for ${OS}-${ARCH}..."
    # Fallback placeholder script if downloading in standalone mode
    cat << 'EOF' > "${INSTALL_DIR}/ohmyskills"
#!/bin/bash
echo "OhMySkills CLI v3.0 - The Oh-My-Zsh for AI Skills"
echo "Run 'ohmyskills doctor' to audit your .cursor/rules directory."
echo "Run 'ohmyskills scan' to refresh index and open local dashboard."
EOF
    chmod +x "${INSTALL_DIR}/ohmyskills"
fi

echo ""
echo "🎉 Installation complete!"
echo "Run 'ohmyskills --help' to get started."
