# QR Code Studio - Teste para desenvolvedor | Supranet

Aplicação desenvolvida em **Nuxt 4** + **TypeScript** + **Bun** para geração de QR Codes profissionais.

## 🚀 Tecnologias Utilizadas

- **Nuxt 4** (Compatibilidade via `future` flags): Framework web moderno.
- **TypeScript**: Para tipagem estática e segurança do código.
- **Bun**: Runtime e gerenciador de pacotes de alta performance.
- **TailwindCSS**: Para estilização rápida e responsiva.
- **Docker**: Para containerização e deploy reprodutível (Multi-stage build).
- **API goQR.me**: Integração externa para geração das imagens.

## 📋 Pré-requisitos

Para rodar este projeto, você precisa apenas de:
- [Docker](https://www.docker.com/) instalado e rodando.

## 🛠️ Como Rodar (Via Docker)

A avaliação deve ser executada via Docker para garantir o ambiente isolado. Siga os passos abaixo no terminal:

1. **Construir a imagem:**
   ```bash
   docker build -t qr-code-studio .